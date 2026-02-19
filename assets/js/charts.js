function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(320, Math.floor(rect.width));
  const height = Math.max(180, Math.floor(rect.height));
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  return { ctx, width, height };
}

function drawAxes(ctx, width, height, padding) {
  ctx.strokeStyle = '#dce9ff';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();
}

export function drawDailyChart(canvas, labels, targetValues, realValues) {
  const { ctx, width, height } = setupCanvas(canvas);
  const padding = 26;
  drawAxes(ctx, width, height, padding);

  const values = [...targetValues, ...realValues].filter((v) => v != null);
  const max = values.length ? Math.max(...values) * 1.15 : 1;
  const stepX = (width - padding * 2) / Math.max(1, labels.length - 1);

  function plot(valuesList, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    let started = false;

    valuesList.forEach((value, idx) => {
      if (value == null) return;
      const x = padding + idx * stepX;
      const y = height - padding - (value / max) * (height - padding * 2);
      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  }

  plot(targetValues, '#2e7fe7');
  plot(realValues, '#1f9d71');

  ctx.fillStyle = '#4f6282';
  ctx.font = '11px Arial';
  ctx.fillText('Meta', padding, 14);
  ctx.fillStyle = '#2e7fe7';
  ctx.fillRect(padding + 34, 7, 16, 4);
  ctx.fillStyle = '#4f6282';
  ctx.fillText('Real', padding + 60, 14);
  ctx.fillStyle = '#1f9d71';
  ctx.fillRect(padding + 88, 7, 16, 4);
}

export function drawMonthlyBars(canvas, labels, values) {
  const { ctx, width, height } = setupCanvas(canvas);
  const padding = 26;
  drawAxes(ctx, width, height, padding);

  const max = values.length ? Math.max(...values) * 1.15 : 1;
  const chartWidth = width - padding * 2;
  const barSpace = chartWidth / Math.max(1, values.length);
  const barWidth = Math.max(8, barSpace * 0.5);

  values.forEach((value, idx) => {
    const x = padding + idx * barSpace + (barSpace - barWidth) / 2;
    const barHeight = (value / max) * (height - padding * 2);
    const y = height - padding - barHeight;

    ctx.fillStyle = '#1458b3';
    ctx.fillRect(x, y, barWidth, barHeight);

    if (labels[idx]) {
      ctx.fillStyle = '#5c7092';
      ctx.font = '10px Arial';
      ctx.fillText(labels[idx], x, height - 8);
    }
  });
}
