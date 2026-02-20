(() => {
  const LINES = [
    { id: 'montado_ceramica', name: 'Montado de Cerámica + Cargado de Header' },
    { id: 'montado_chip', name: 'Montado de Chip' },
    { id: 'alineacion_chip', name: 'Alineación de Chip' },
    { id: 'wire_bond', name: 'Wire Bond' },
  ];

  const DB_KEY = 'trend_salida_db_v4';
  const LEGACY_DB_KEYS = ['trend_salida_db_v2', 'trend_salida_records_v1'];
  const INHABIL_DAY = 2;
  const COMPARE_CURRENT_DAY = 19;
  const COMPARE_PREVIOUS_DAY = 18;

  const SEED_DB = {
    metas: {
      montado_ceramica: 2287,
      montado_chip: 2610,
      alineacion_chip: 3859,
      wire_bond: 2346,
    },
    records: [
      // Alineación de Chip
      { lineId: 'alineacion_chip', date: '2025-10-01', target: 3859, real: 1580 },
      { lineId: 'alineacion_chip', date: '2025-11-01', target: 3859, real: 1508 },
      { lineId: 'alineacion_chip', date: '2025-12-01', target: 3859, real: 1536 },
      { lineId: 'alineacion_chip', date: '2026-01-01', target: 3859, real: 2145 },
      { lineId: 'alineacion_chip', date: '2026-02-03', target: 3859, real: 1600 },
      { lineId: 'alineacion_chip', date: '2026-02-04', target: 3859, real: 1630 },
      { lineId: 'alineacion_chip', date: '2026-02-05', target: 3859, real: 1600 },
      { lineId: 'alineacion_chip', date: '2026-02-06', target: 3859, real: 1720 },
      { lineId: 'alineacion_chip', date: '2026-02-09', target: 3859, real: 1244 },
      { lineId: 'alineacion_chip', date: '2026-02-10', target: 3859, real: 1800 },
      { lineId: 'alineacion_chip', date: '2026-02-11', target: 3859, real: 1767 },
      { lineId: 'alineacion_chip', date: '2026-02-12', target: 3859, real: 1826 },
      { lineId: 'alineacion_chip', date: '2026-02-13', target: 3859, real: 1580 },
      { lineId: 'alineacion_chip', date: '2026-02-16', target: 3859, real: 1425 },
      { lineId: 'alineacion_chip', date: '2026-02-17', target: 3859, real: 940 },
      { lineId: 'alineacion_chip', date: '2026-02-18', target: 3859, real: 1660 },
      { lineId: 'alineacion_chip', date: '2026-02-19', target: 3859, real: 1780 },

      // Wire Bond
      { lineId: 'wire_bond', date: '2025-10-01', target: 2346, real: 1205 },
      { lineId: 'wire_bond', date: '2025-11-01', target: 2346, real: 1651 },
      { lineId: 'wire_bond', date: '2025-12-01', target: 2346, real: 4883 },
      { lineId: 'wire_bond', date: '2026-01-01', target: 2346, real: 2002 },
      { lineId: 'wire_bond', date: '2026-02-03', target: 2346, real: 1700 },
      { lineId: 'wire_bond', date: '2026-02-04', target: 2346, real: 1790 },
      { lineId: 'wire_bond', date: '2026-02-05', target: 2346, real: 1540 },
      { lineId: 'wire_bond', date: '2026-02-06', target: 2346, real: 1605 },
      { lineId: 'wire_bond', date: '2026-02-09', target: 2346, real: 1730 },
      { lineId: 'wire_bond', date: '2026-02-10', target: 2346, real: 1750 },
      { lineId: 'wire_bond', date: '2026-02-11', target: 2346, real: 1700 },
      { lineId: 'wire_bond', date: '2026-02-12', target: 2346, real: 1605 },
      { lineId: 'wire_bond', date: '2026-02-13', target: 2346, real: 1595 },
      { lineId: 'wire_bond', date: '2026-02-16', target: 2346, real: 400 },
      { lineId: 'wire_bond', date: '2026-02-17', target: 2346, real: 600 },
      { lineId: 'wire_bond', date: '2026-02-18', target: 2346, real: 1575 },
      { lineId: 'wire_bond', date: '2026-02-19', target: 2346, real: 1645 },

      // Montado de Cerámica
      { lineId: 'montado_ceramica', date: '2025-10-01', target: 2287, real: 2035 },
      { lineId: 'montado_ceramica', date: '2025-11-01', target: 2287, real: 2085 },
      { lineId: 'montado_ceramica', date: '2025-12-01', target: 2287, real: 1869 },
      { lineId: 'montado_ceramica', date: '2026-01-01', target: 2287, real: 1321 },
      { lineId: 'montado_ceramica', date: '2026-02-03', target: 2287, real: 2222 },
      { lineId: 'montado_ceramica', date: '2026-02-04', target: 2287, real: 2223 },
      { lineId: 'montado_ceramica', date: '2026-02-05', target: 2287, real: 1753 },
      { lineId: 'montado_ceramica', date: '2026-02-06', target: 2287, real: 2873 },
      { lineId: 'montado_ceramica', date: '2026-02-09', target: 2287, real: 2263 },
      { lineId: 'montado_ceramica', date: '2026-02-10', target: 2287, real: 2296 },
      { lineId: 'montado_ceramica', date: '2026-02-11', target: 2287, real: 2167 },
      { lineId: 'montado_ceramica', date: '2026-02-12', target: 2287, real: 2263 },
      { lineId: 'montado_ceramica', date: '2026-02-13', target: 2287, real: 2259 },
      { lineId: 'montado_ceramica', date: '2026-02-16', target: 2287, real: 1800 },
      { lineId: 'montado_ceramica', date: '2026-02-17', target: 2287, real: 2208 },
      { lineId: 'montado_ceramica', date: '2026-02-18', target: 2287, real: 3254 },
      { lineId: 'montado_ceramica', date: '2026-02-19', target: 2287, real: 3183 },

      // Montado de Chip
      { lineId: 'montado_chip', date: '2025-10-01', target: 2610, real: 1973 },
      { lineId: 'montado_chip', date: '2025-11-01', target: 2610, real: 2059 },
      { lineId: 'montado_chip', date: '2025-12-01', target: 2610, real: 1904 },
      { lineId: 'montado_chip', date: '2026-01-01', target: 2610, real: 2066 },
      { lineId: 'montado_chip', date: '2026-02-03', target: 2610, real: 2155 },
      { lineId: 'montado_chip', date: '2026-02-04', target: 2610, real: 2000 },
      { lineId: 'montado_chip', date: '2026-02-05', target: 2610, real: 1900 },
      { lineId: 'montado_chip', date: '2026-02-06', target: 2610, real: 2164 },
      { lineId: 'montado_chip', date: '2026-02-09', target: 2610, real: 1998 },
      { lineId: 'montado_chip', date: '2026-02-10', target: 2610, real: 2217 },
      { lineId: 'montado_chip', date: '2026-02-11', target: 2610, real: 2114 },
      { lineId: 'montado_chip', date: '2026-02-12', target: 2610, real: 1912 },
      { lineId: 'montado_chip', date: '2026-02-13', target: 2610, real: 1944 },
      { lineId: 'montado_chip', date: '2026-02-16', target: 2610, real: 1990 },
      { lineId: 'montado_chip', date: '2026-02-17', target: 2610, real: 2172 },
      { lineId: 'montado_chip', date: '2026-02-18', target: 2610, real: 2198 },
      { lineId: 'montado_chip', date: '2026-02-19', target: 2610, real: 2185 },
    ],
  };

  const monthSelect = document.querySelector('#monthSelect');
  const yearSelect = document.querySelector('#yearSelect');
  const currentMonthLabel = document.querySelector('#currentMonthLabel');
  const sectionsContainer = document.querySelector('#sectionsContainer');
  const monthlyAveragesContainer = document.querySelector('#monthlyAveragesContainer');

  const lineSelect = document.querySelector('#lineSelect');
  const dateInput = document.querySelector('#dateInput');
  const targetInput = document.querySelector('#targetInput');
  const realInput = document.querySelector('#realInput');
  const entryForm = document.querySelector('#entryForm');
  const entryFeedback = document.querySelector('#entryFeedback');
  const goalsForm = document.querySelector('#goalsForm');
  const goalsFeedback = document.querySelector('#goalsFeedback');

  const navButtons = Array.from(document.querySelectorAll('.nav-btn'));
  const screens = Array.from(document.querySelectorAll('.screen'));

  const START_MONTH = 1;
  const START_YEAR = 2026;
  let selectedMonth = START_MONTH;
  let selectedYear = START_YEAR;
  let db = loadDB();

  function getDaysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  function getBusinessDaysInMonth(year, monthIndex) {
    return Array.from({ length: getDaysInMonth(year, monthIndex) }, (_, i) => i + 1)
      .filter((day) => {
        const weekday = new Date(year, monthIndex, day).getDay();
        return weekday !== 0 && weekday !== 6;
      });
  }

  function formatNumber(value) {
    if (value == null || Number.isNaN(value)) return '—';
    return Number(value).toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  function monthName(index) {
    return new Date(2026, index, 1).toLocaleString('es-MX', { month: 'long' });
  }

  function keyFromDate(dateStr) {
    const [year, month] = dateStr.split('-');
    return `${year}-${month}`;
  }

  function parseSeed() {
    return JSON.parse(JSON.stringify(SEED_DB));
  }

  function loadDB() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) return JSON.parse(raw);
      const seeded = parseSeed();
      localStorage.setItem(DB_KEY, JSON.stringify(seeded));
      LEGACY_DB_KEYS.forEach((key) => localStorage.removeItem(key));
      return seeded;
    } catch (_) {
      return parseSeed();
    }
  }

  function saveDB() {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }

  function setupSelectors() {
    monthSelect.innerHTML = '';
    yearSelect.innerHTML = '';

    for (let m = 0; m < 12; m += 1) {
      const op = document.createElement('option');
      op.value = String(m);
      op.textContent = monthName(m);
      if (m === selectedMonth) op.selected = true;
      monthSelect.append(op);
    }

    for (let y = 2025; y <= 2026; y += 1) {
      const op = document.createElement('option');
      op.value = String(y);
      op.textContent = String(y);
      if (y === selectedYear) op.selected = true;
      yearSelect.append(op);
    }

    lineSelect.innerHTML = '';
    LINES.forEach((line) => {
      const op = document.createElement('option');
      op.value = line.id;
      op.textContent = line.name;
      lineSelect.append(op);
    });
    targetInput.value = db.metas[lineSelect.value] || '';
  }

  function summarize(metaValues, realValues) {
    const meta = metaValues.reduce((acc, n) => acc + (Number(n) || 0), 0);
    const real = realValues.reduce((acc, n) => acc + (Number(n) || 0), 0);
    const cumplimiento = meta > 0 ? (real / meta) * 100 : 0;
    return { meta, real, cumplimiento };
  }

  function setupCanvas(canvas, minHeight = 260) {
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(320, Math.floor(rect.width));
    const height = Math.max(minHeight, Math.floor(rect.height));
    
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    
    // Fijar el tamaño en CSS para que no se estire y pierda resolución
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    return { ctx, width, height };
  }

  function drawDailyChart(canvas, labels, metaValues, realValues) {
    const { ctx, width, height } = setupCanvas(canvas, 300);
    const p = { l: 44, r: 18, t: 16, b: 34 };
    const chartW = width - p.l - p.r;
    const chartH = height - p.t - p.b;

    const max = 5000;
    const step = 1000;
    const ticks = max / step;

    for (let i = 0; i <= ticks; i += 1) {
      const y = p.t + (chartH / ticks) * i;
      ctx.strokeStyle = i === ticks ? '#c8d6f2' : '#e4ecfb';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.l, y);
      ctx.lineTo(width - p.r, y);
      ctx.stroke();

      const tickValue = max - i * step;
      ctx.fillStyle = '#8c9dbe';
      ctx.font = '11px Arial';
      ctx.fillText(formatNumber(tickValue), 6, y + 3);
    }

    const xStep = chartW / Math.max(1, labels.length - 1);
    const barW = Math.max(10, Math.min(28, xStep * 0.58));

    function pointY(value) {
      const safeValue = Math.max(0, Math.min(max, value));
      return p.t + chartH - (safeValue / max) * chartH;
    }

    realValues.forEach((v, i) => {
      if (v == null) return;
      const x = p.l + i * xStep;
      const y = pointY(v);
      ctx.fillStyle = '#a8bcd9';
      ctx.fillRect(x - barW / 2, y, barW, height - p.b - y);
    });

    const targetValues = metaValues.filter((v) => v != null);
    const target = targetValues.length ? targetValues.reduce((acc, n) => acc + n, 0) / targetValues.length : 0;
    if (target > 0) {
      const y = pointY(target);
      ctx.setLineDash([8, 4]);
      ctx.strokeStyle = '#3f69ad';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.l, y);
      ctx.lineTo(width - p.r, y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawLine(values, color) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.4;
      let started = false;
      values.forEach((v, i) => {
        if (v == null) return;
        const x = p.l + i * xStep;
        const y = pointY(v);
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();

      values.forEach((v, i) => {
        if (v == null) return;
        const x = p.l + i * xStep;
        const y = pointY(v);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.arc(x, y, 3.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    drawLine(realValues, '#e24b62');

    ctx.fillStyle = '#5f6f92';
    ctx.font = '11px Arial';
    labels.forEach((label, i) => {
      const x = p.l + i * xStep;
      ctx.fillText(label, x - 4, height - 9);
    });
  }

  function drawMonthlyAverageLine(canvas, labels, values) {
    const safeValues = values.length ? values : [0];
    const maxRaw = Math.max(...safeValues);
    const minRaw = Math.min(...safeValues);
    const range = Math.max(1, maxRaw - minRaw);
    const yMin = Math.max(0, minRaw - range * 0.25);
    const yMax = maxRaw + range * 0.25;

    const { ctx, width, height } = setupCanvas(canvas, 230);
    const p = { l: 48, r: 16, t: 16, b: 34 };
    const chartW = width - p.l - p.r;
    const chartH = height - p.t - p.b;
    const steps = 4;

    function yFromValue(value) {
      const normalized = yMax === yMin ? 0 : (value - yMin) / (yMax - yMin);
      return p.t + chartH - normalized * chartH;
    }

    for (let i = 0; i <= steps; i += 1) {
      const y = Math.round(p.t + (chartH / steps) * i) + 0.5;
      ctx.strokeStyle = '#e7efff';
      ctx.beginPath();
      ctx.moveTo(p.l, y);
      ctx.lineTo(width - p.r, y);
      ctx.stroke();

      const tickValue = yMax - ((yMax - yMin) / steps) * i;
      ctx.fillStyle = '#7c8fb2';
      ctx.font = '11px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(formatNumber(tickValue), p.l - 6, y + 3);
    }

    const xStep = chartW / Math.max(1, labels.length - 1);
    const barW = Math.max(12, Math.min(24, xStep * 0.45));

    values.forEach((value, index) => {
      const x = p.l + xStep * index;
      const y = yFromValue(value);
      const barHeight = p.t + chartH - y;
      ctx.fillStyle = 'rgba(93, 140, 244, 0.28)';
      ctx.fillRect(x - barW / 2, y, barW, barHeight);
    });

    ctx.beginPath();
    ctx.strokeStyle = '#2a63c9';
    ctx.lineWidth = 2.2;
    values.forEach((value, index) => {
      const x = p.l + xStep * index;
      const y = yFromValue(value);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    values.forEach((value, index) => {
      const x = p.l + xStep * index;
      const y = yFromValue(value);
      const labelY = y < p.t + 14 ? y + 14 : y - 8;

      ctx.beginPath();
      ctx.fillStyle = '#2a63c9';
      ctx.arc(x, y, 3.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#355b9d';
      ctx.font = '700 10px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(formatNumber(value), x, labelY);

      ctx.fillStyle = '#4f6289';
      ctx.font = '700 10px Arial';
      ctx.fillText(labels[index], x, height - 10);
    });

    ctx.textAlign = 'start';
  }

  function monthLabelFromKey(key) {
    const [y, m] = key.split('-').map(Number);
    return `${monthName(m - 1).slice(0, 3).toUpperCase()} ${y}`;
  }

  function recordsByLineAndMonth(lineId, year, month) {
    return db.records.filter((item) => {
      if (item.lineId !== lineId) return false;
      const date = new Date(`${item.date}T00:00:00`);
      return date.getFullYear() === year && date.getMonth() === month;
    });
  }

  function monthlyStats(lineId, excludeCurrent = true) {
    const map = new Map();
    db.records.forEach((item) => {
      if (item.lineId !== lineId) return;
      const key = keyFromDate(item.date);
      if (excludeCurrent && key === `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}`) return;
      const prev = map.get(key) || { sum: 0, count: 0, target: 0 };
      prev.sum += Number(item.real) || 0;
      prev.target += Number(item.target) || 0;
      prev.count += 1;
      map.set(key, prev);
    });

    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, val]) => ({
        key,
        avg: val.count ? val.sum / val.count : 0,
        cumplimiento: val.target ? (val.sum / val.target) * 100 : 0,
      }));
  }

  function renderDailyComparison() {
    const panel = document.createElement('article');
    panel.className = 'panel compare-panel';
    panel.innerHTML = `
      <h2>Comparativo diario PRO (${COMPARE_CURRENT_DAY} vs ${COMPARE_PREVIOUS_DAY})</h2>
    `;

    const grid = document.createElement('div');
    grid.className = 'compare-grid';

    LINES.forEach((line) => {
      const current = recordsByLineAndMonth(line.id, selectedYear, selectedMonth).find((r) => Number(r.date.slice(-2)) === COMPARE_CURRENT_DAY);
      const previous = recordsByLineAndMonth(line.id, selectedYear, selectedMonth).find((r) => Number(r.date.slice(-2)) === COMPARE_PREVIOUS_DAY);

      const currentReal = Number(current?.real || 0);
      const previousReal = Number(previous?.real || 0);
      const delta = currentReal - previousReal;
      const pct = previousReal ? (delta / previousReal) * 100 : 0;
      const target = Number(current?.target || previous?.target || db.metas[line.id] || 0);
      const cumplimiento = target ? (currentReal / target) * 100 : 0;
      const impulse = Math.min(100, Math.abs(pct));

      let cls = 'trend-flat';
      let text = 'Sin cambio';
      if (delta > 0) {
        cls = 'trend-up';
        text = 'Aumento';
      } else if (delta < 0) {
        cls = 'trend-down';
        text = 'Decremento';
      }

      const item = document.createElement('div');
      item.className = `compare-item ${cls}`;
      item.innerHTML = `
        <div class="compare-title-row">
          <h4>${line.name}</h4>
          <span class="trend-pill">${text}</span>
        </div>
        <div class="compare-values">
          <div class="metric-tile"><span>Día ${COMPARE_PREVIOUS_DAY}</span><strong>${formatNumber(previousReal)}</strong></div>
          <div class="metric-tile"><span>Día ${COMPARE_CURRENT_DAY}</span><strong>${formatNumber(currentReal)}</strong></div>
          <div class="metric-tile"><span>Meta día ${COMPARE_CURRENT_DAY}</span><strong>${formatNumber(target)}</strong></div>
        </div>
        <div class="compare-kpi">
          <div class="kpi-chip"><span>Delta absoluto</span><strong>${delta >= 0 ? '+' : ''}${formatNumber(delta)}</strong></div>
          <div class="kpi-chip"><span>Variación %</span><strong>${pct >= 0 ? '+' : ''}${formatNumber(pct)}%</strong></div>
          <div class="kpi-chip"><span>Cumplimiento</span><strong>${formatNumber(cumplimiento)}%</strong></div>
        </div>
        <p class="progress-label">Impulso del día</p>
        <div class="compare-progress"><div style="width:${impulse}%"></div></div>
        <p class="compare-pct">${formatNumber(impulse)}%</p>
      `;
      grid.append(item);
    });

    panel.append(grid);
    sectionsContainer.append(panel);
  }

  function renderSections() {
    sectionsContainer.innerHTML = '';
    const businessDays = getBusinessDaysInMonth(selectedYear, selectedMonth);
    const chartRefs = [];

    LINES.forEach((line) => {
      const monthRecords = recordsByLineAndMonth(line.id, selectedYear, selectedMonth);
      const defaultTarget = Number(db.metas[line.id] || 0);
      const metaByDay = businessDays.map((day) => {
        if (day === INHABIL_DAY) return null;
        const rec = monthRecords.find((r) => Number(r.date.slice(-2)) === day);
        return Number(rec?.target ?? defaultTarget);
      });
      const realByDay = businessDays.map((day) => {
        if (day === INHABIL_DAY) return null;
        const rec = monthRecords.find((r) => Number(r.date.slice(-2)) === day);
        return rec ? Number(rec.real) : null;
      });

      const resume = summarize(metaByDay, realByDay);
      const headers = businessDays
        .map((day) => `<th class="${day === INHABIL_DAY ? 'inhabil-col' : ''}">${day === INHABIL_DAY ? `${day}<br><small>INHÁBIL</small>` : day}</th>`)
        .join('');

      const metaCells = businessDays
        .map((day, idx) => (day === INHABIL_DAY ? '<td class="inhabil-col">INHÁBIL</td>' : `<td>${formatNumber(metaByDay[idx])}</td>`))
        .join('');

      const realCells = businessDays
        .map((day, idx) => (day === INHABIL_DAY ? '<td class="inhabil-col">INHÁBIL</td>' : `<td>${formatNumber(realByDay[idx])}</td>`))
        .join('');

      const card = document.createElement('article');
      card.className = 'section-card';
      card.innerHTML = `
        <div class="section-header">
          <strong>${line.name}</strong>
          <div class="badges">
            <span class="badge">Meta: ${formatNumber(resume.meta)}</span>
            <span class="badge">Real: ${formatNumber(resume.real)}</span>
            <span class="badge">Cumplimiento: ${formatNumber(resume.cumplimiento)}%</span>
          </div>
        </div>
        <div class="section-content">
          <div class="table-wrap">
            <table class="month-table">
              <thead><tr><th>Día</th>${headers}</tr></thead>
              <tbody>
                <tr><td class="label-cell">META (CAP INST.)</td>${metaCells}</tr>
                <tr><td class="label-cell">REAL (CAP. 1 EST.)</td>${realCells}</tr>
              </tbody>
            </table>
          </div>
          <div class="chart-card chart-card-daily">
            <p class="chart-title">Comportamiento diario</p>
            <div class="chart-legend">
              <span><i class="legend-dot legend-target"></i>Meta</span>
              <span><i class="legend-dot legend-bars"></i>Barras reales</span>
              <span><i class="legend-dot legend-real"></i>Tendencia real</span>
            </div>
            <canvas data-chart="daily"></canvas>
          </div>
        </div>
      `;

      sectionsContainer.append(card);
      chartRefs.push({
        canvas: card.querySelector('[data-chart="daily"]'),
        labels: businessDays.map((d) => String(d)),
        metaByDay,
        realByDay,
      });
    });

    return chartRefs;
  }

  function renderCombinedHistory() {
    monthlyAveragesContainer.innerHTML = `
      <h3>Promedio mensual por sección</h3>
      <p class="muted">Gráfico doble simple: barras de promedio mensual + línea de tendencia.</p>
    `;

    const wrap = document.createElement('div');
    wrap.className = 'avg-combined-grid';
    
    // El wrapper se inserta primero en el DOM para que los elementos dentro hereden el tamaño
    monthlyAveragesContainer.append(wrap);

    LINES.forEach((line) => {
      const series = monthlyStats(line.id, false);
      const labels = series.map((s) => monthLabelFromKey(s.key));
      const values = series.map((s) => s.avg);
      const latest = values[values.length - 1] || 0;

      const card = document.createElement('article');
      card.className = 'avg-card avg-card-simple';
      card.innerHTML = `
        <div class="avg-head">
          <h4>${line.name}</h4>
          <div class="avg-pills">
            <span class="pill">Último prom.: ${formatNumber(latest)}</span>
          </div>
        </div>
        <canvas class="history-canvas" aria-label="Promedio mensual"></canvas>
      `;

      // Insertamos la tarjeta en el contenedor que ya está en el DOM
      wrap.append(card);
      drawMonthlyAverageLine(card.querySelector('.history-canvas'), labels.map((l) => l.slice(0, 3)), values);
    });
  }

  function renderGoalsForm() {
    goalsForm.innerHTML = '';
    LINES.forEach((line) => {
      const item = document.createElement('div');
      item.className = 'goal-item';
      item.innerHTML = `
        <label for="goal_${line.id}">${line.name}</label>
        <input id="goal_${line.id}" type="number" min="0" step="1" data-goal-input="${line.id}" value="${db.metas[line.id] || ''}" required />
      `;
      goalsForm.append(item);
    });

    const actions = document.createElement('div');
    actions.className = 'goals-actions';
    actions.innerHTML = '<button type="submit" class="btn-primary">Guardar metas</button>';
    goalsForm.append(actions);
  }

  function setCurrentMonthLabel() {
    currentMonthLabel.textContent = `${monthName(selectedMonth)} ${selectedYear}`;
  }

  function renderDashboard() {
    setCurrentMonthLabel();
    const chartRefs = renderSections();
    chartRefs.forEach((ref) => drawDailyChart(ref.canvas, ref.labels, ref.metaByDay, ref.realByDay));
    renderDailyComparison();
    renderCombinedHistory();
  }

  function activateScreen(screenId) {
    screens.forEach((screen) => screen.classList.toggle('active', screen.id === screenId));
    navButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.screen === screenId));
  }

  navButtons.forEach((btn) => btn.addEventListener('click', () => activateScreen(btn.dataset.screen)));

  monthSelect.addEventListener('change', (e) => {
    selectedMonth = Number(e.target.value);
    renderDashboard();
  });

  yearSelect.addEventListener('change', (e) => {
    selectedYear = Number(e.target.value);
    renderDashboard();
  });

  lineSelect.addEventListener('change', () => {
    targetInput.value = db.metas[lineSelect.value] || '';
  });

  goalsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    LINES.forEach((line) => {
      const input = goalsForm.querySelector(`[data-goal-input="${line.id}"]`);
      db.metas[line.id] = Number(input.value || 0);
    });
    saveDB();
    targetInput.value = db.metas[lineSelect.value] || '';
    goalsFeedback.textContent = 'Metas actualizadas correctamente.';
    renderDashboard();
  });

  entryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const lineId = lineSelect.value;
    const date = dateInput.value;
    const nextRecord = {
      lineId,
      date,
      target: Number(targetInput.value || db.metas[lineId] || 0),
      real: Number(realInput.value || 0),
    };

    const idx = db.records.findIndex((r) => r.lineId === lineId && r.date === date);
    if (idx >= 0) db.records[idx] = nextRecord;
    else db.records.push(nextRecord);

    const d = new Date(`${date}T00:00:00`);
    selectedMonth = d.getMonth();
    selectedYear = d.getFullYear();
    setupSelectors();
    saveDB();
    entryFeedback.textContent = 'Dato guardado correctamente.';
    entryForm.reset();
    targetInput.value = db.metas[lineSelect.value] || '';
    renderDashboard();
  });

  window.addEventListener('resize', renderDashboard);

  setupSelectors();
  renderGoalsForm();
  renderDashboard();
})();