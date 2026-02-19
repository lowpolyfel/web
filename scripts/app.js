import {
  DEFAULT_LINES,
  getRecords,
  upsertRecord,
} from "./storage.js";
import {
  getDaysInMonth,
  getMonthName,
  getMonths,
  getYearOptions,
  toISODate,
} from "./calendar.js";
import { renderDailyChart, renderHistoricChart } from "./charts.js";

const state = {
  records: getRecords(),
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth(),
  historicLine: DEFAULT_LINES[0],
};

const elements = {
  yearSelector: document.getElementById("yearSelector"),
  monthSelector: document.getElementById("monthSelector"),
  monthLabel: document.getElementById("monthLabel"),
  monthlyTable: document.getElementById("monthlyTable"),
  dailyForm: document.getElementById("dailyForm"),
  lineInput: document.getElementById("lineInput"),
  dateInput: document.getElementById("dateInput"),
  targetInput: document.getElementById("targetInput"),
  realInput: document.getElementById("realInput"),
  dailyChart: document.getElementById("dailyChart"),
  historicChart: document.getElementById("historicChart"),
  historicLineSelector: document.getElementById("historicLineSelector"),
};

function initSelectors() {
  getYearOptions(4).forEach((year) => {
    elements.yearSelector.add(new Option(String(year), String(year)));
  });

  getMonths().forEach((month) => {
    elements.monthSelector.add(new Option(month.label, String(month.value)));
  });

  DEFAULT_LINES.forEach((line) => {
    elements.historicLineSelector.add(new Option(line, line));
  });

  elements.yearSelector.value = String(state.selectedYear);
  elements.monthSelector.value = String(state.selectedMonth);
  elements.historicLineSelector.value = state.historicLine;
  elements.dateInput.value = new Date().toISOString().split("T")[0];
}

function getFilteredRecords() {
  return state.records.filter((record) => {
    const date = new Date(`${record.date}T00:00:00`);
    return (
      date.getFullYear() === state.selectedYear &&
      date.getMonth() === state.selectedMonth
    );
  });
}

function renderTable() {
  const days = getDaysInMonth(state.selectedYear, state.selectedMonth);
  const filtered = getFilteredRecords();

  elements.monthLabel.textContent = `${getMonthName(state.selectedMonth)} ${state.selectedYear}`;

  const header = ["Línea", ...Array.from({ length: days }, (_, i) => String(i + 1))];

  const rows = DEFAULT_LINES.map((line) => {
    const dailyValues = Array.from({ length: days }, (_, dayIndex) => {
      const day = dayIndex + 1;
      const date = toISODate(state.selectedYear, state.selectedMonth, day);
      return filtered.find((item) => item.line === line && item.date === date);
    });

    return {
      line,
      meta: dailyValues.map((item) => (item ? item.target : "-")),
      real: dailyValues.map((item) => (item ? item.real : "-")),
    };
  });

  const thead = `<thead><tr>${header.map((h) => `<th>${h}</th>`).join("")}</tr></thead>`;

  const tbody = rows
    .map(({ line, meta, real }) => {
      const metaCells = meta.map((value) => `<td>${value}</td>`).join("");
      const realCells = real
        .map((value, index) => {
          const metaValue = Number(meta[index]);
          const realValue = Number(value);

          if (Number.isNaN(realValue) || Number.isNaN(metaValue)) {
            return `<td>${value}</td>`;
          }

          const cssClass = realValue >= metaValue ? "good" : "bad";
          return `<td class="${cssClass}">${realValue}</td>`;
        })
        .join("");

      return `
        <tr>
          <td><strong>${line} · Meta</strong></td>
          ${metaCells}
        </tr>
        <tr>
          <td><strong>${line} · Real</strong></td>
          ${realCells}
        </tr>
      `;
    })
    .join("");

  elements.monthlyTable.innerHTML = `${thead}<tbody>${tbody}</tbody>`;
}

function renderCharts() {
  const days = getDaysInMonth(state.selectedYear, state.selectedMonth);
  const labels = Array.from({ length: days }, (_, i) => `${i + 1}`);

  const filtered = getFilteredRecords();
  const dailyTarget = [];
  const dailyReal = [];

  for (let day = 1; day <= days; day += 1) {
    const date = toISODate(state.selectedYear, state.selectedMonth, day);
    const dayRecords = filtered.filter((item) => item.date === date);

    if (dayRecords.length === 0) {
      dailyTarget.push(null);
      dailyReal.push(null);
      continue;
    }

    const targetAverage =
      dayRecords.reduce((acc, item) => acc + Number(item.target), 0) /
      dayRecords.length;
    const realAverage =
      dayRecords.reduce((acc, item) => acc + Number(item.real), 0) /
      dayRecords.length;

    dailyTarget.push(Number(targetAverage.toFixed(2)));
    dailyReal.push(Number(realAverage.toFixed(2)));
  }

  renderDailyChart(elements.dailyChart, labels, dailyTarget, dailyReal);

  const byMonth = new Map();
  state.records
    .filter((item) => item.line === state.historicLine)
    .forEach((item) => {
      const date = new Date(`${item.date}T00:00:00`);
      const key = `${date.getFullYear()}-${date.getMonth()}`;

      if (!byMonth.has(key)) {
        byMonth.set(key, []);
      }

      byMonth.get(key).push(Number(item.real));
    });

  const historicLabels = [];
  const historicValues = [];

  [...byMonth.entries()]
    .sort(([a], [b]) => (a > b ? 1 : -1))
    .forEach(([key, values]) => {
      const [year, month] = key.split("-").map(Number);
      historicLabels.push(`${getMonthName(month)} ${year}`);
      const average = values.reduce((sum, value) => sum + value, 0) / values.length;
      historicValues.push(Number(average.toFixed(2)));
    });

  renderHistoricChart(elements.historicChart, historicLabels, historicValues);
}

function onFormSubmit(event) {
  event.preventDefault();

  const record = {
    line: elements.lineInput.value,
    date: elements.dateInput.value,
    target: Number(elements.targetInput.value),
    real: Number(elements.realInput.value),
  };

  state.records = upsertRecord(record);
  renderTable();
  renderCharts();
  elements.dailyForm.reset();
  elements.lineInput.value = record.line;
  elements.dateInput.value = record.date;
}

function bindEvents() {
  elements.yearSelector.addEventListener("change", (event) => {
    state.selectedYear = Number(event.target.value);
    renderTable();
    renderCharts();
  });

  elements.monthSelector.addEventListener("change", (event) => {
    state.selectedMonth = Number(event.target.value);
    renderTable();
    renderCharts();
  });

  elements.historicLineSelector.addEventListener("change", (event) => {
    state.historicLine = event.target.value;
    renderCharts();
  });

  elements.dailyForm.addEventListener("submit", onFormSubmit);
}

initSelectors();
bindEvents();
renderTable();
renderCharts();
