import { formatNumber, getDaysInMonth, monthName } from './utils.js';

export function setupMonthYearSelectors(monthSelect, yearSelect, selectedMonth, selectedYear) {
  monthSelect.innerHTML = '';
  yearSelect.innerHTML = '';

  for (let i = 0; i < 12; i += 1) {
    const op = document.createElement('option');
    op.value = i;
    op.textContent = monthName(i);
    if (i === selectedMonth) op.selected = true;
    monthSelect.append(op);
  }

  for (let y = selectedYear - 3; y <= selectedYear + 2; y += 1) {
    const op = document.createElement('option');
    op.value = y;
    op.textContent = y;
    if (y === selectedYear) op.selected = true;
    yearSelect.append(op);
  }
}

export function setupLineSelector(select, lines) {
  select.innerHTML = '';
  lines.forEach((line) => {
    const op = document.createElement('option');
    op.value = line.id;
    op.textContent = line.name;
    select.append(op);
  });
}

function summarize(records) {
  const meta = records.reduce((acc, item) => acc + item.target, 0);
  const real = records.reduce((acc, item) => acc + item.real, 0);
  const cumplimiento = meta > 0 ? (real / meta) * 100 : 0;
  return { meta, real, cumplimiento };
}

export function renderSectionCards(container, lines, records, year, month) {
  container.innerHTML = '';
  const days = getDaysInMonth(year, month);
  const chartRefs = [];

  lines.forEach((line) => {
    const lineMonthRecords = records.filter((item) => {
      if (item.lineId !== line.id) return false;
      const d = new Date(`${item.date}T00:00:00`);
      return d.getFullYear() === year && d.getMonth() === month;
    });

    const metaByDay = Array(days).fill(null);
    const realByDay = Array(days).fill(null);

    lineMonthRecords.forEach((item) => {
      const d = Number(item.date.split('-')[2]) - 1;
      metaByDay[d] = item.target;
      realByDay[d] = item.real;
    });

    const { meta, real, cumplimiento } = summarize(lineMonthRecords);
    const headers = Array.from({ length: days }, (_, i) => `<th>${i + 1}</th>`).join('');
    const rowMeta = metaByDay.map((n) => `<td>${formatNumber(n)}</td>`).join('');
    const rowReal = realByDay.map((n) => `<td>${formatNumber(n)}</td>`).join('');

    const card = document.createElement('article');
    card.className = 'section-card';
    card.innerHTML = `
      <div class="section-header">
        <strong>${line.name}</strong>
        <div class="badges">
          <span class="badge">Meta: ${formatNumber(meta)}</span>
          <span class="badge">Cantidad: ${formatNumber(real)}</span>
          <span class="badge">Cumplimiento: ${formatNumber(cumplimiento)}%</span>
        </div>
      </div>
      <div class="section-content">
        <div class="table-wrap">
          <table>
            <thead><tr><th>Día</th>${headers}</tr></thead>
            <tbody>
              <tr><td class="label-cell">Meta</td>${rowMeta}</tr>
              <tr><td class="label-cell">Cantidad real</td>${rowReal}</tr>
            </tbody>
          </table>
        </div>
        <div class="charts-row">
          <div class="chart-card">
            <p class="muted">Comportamiento diario</p>
            <canvas data-chart="daily"></canvas>
          </div>
          <div class="chart-card">
            <p class="muted">Acumulado del mes</p>
            <canvas data-chart="monthly"></canvas>
          </div>
        </div>
      </div>
    `;

    container.append(card);
    chartRefs.push({ lineId: line.id, daily: card.querySelector('[data-chart="daily"]'), monthly: card.querySelector('[data-chart="monthly"]'), metaByDay, realByDay });
  });

  return chartRefs;
}

export function renderHistoryCards(container, lines) {
  container.innerHTML = '';
  return lines.map((line) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <h3>${line.name}</h3>
      <p class="muted">Histórico por mes</p>
      <canvas></canvas>
    `;
    container.append(item);
    return { lineId: line.id, canvas: item.querySelector('canvas') };
  });
}
