let dailyChart;
let historicChart;

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#274264",
        font: { family: "Inter" },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#60738f" },
      grid: { color: "#e8effb" },
    },
    y: {
      ticks: { color: "#60738f" },
      grid: { color: "#e8effb" },
      beginAtZero: true,
    },
  },
};

export function renderDailyChart(canvas, labels, targetData, realData) {
  dailyChart?.destroy();

  dailyChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          type: "line",
          label: "Meta",
          data: targetData,
          borderColor: "#1f6feb",
          backgroundColor: "#1f6feb",
          pointRadius: 2,
          tension: 0.2,
        },
        {
          label: "Real",
          data: realData,
          borderRadius: 4,
          backgroundColor: "#4db3ff",
        },
      ],
    },
    options: commonOptions,
  });
}

export function renderHistoricChart(canvas, labels, data) {
  historicChart?.destroy();

  historicChart = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Promedio real",
          data,
          borderColor: "#114bba",
          backgroundColor: "rgba(31, 111, 235, 0.12)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: commonOptions,
  });
}
