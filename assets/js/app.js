(() => {
  const LINES = [
    { id: 'montado_ceramica', name: 'Montado de Cerámica + Cargado de Header' },
    { id: 'montado_chip', name: 'Montado de Chip' },
    { id: 'alineacion_chip', name: 'Alineación de Chip' },
    { id: 'wire_bond', name: 'Wire Bond' },
  ];

  const DB_KEY = 'trend_salida_db_v3';
  const LEGACY_DB_KEYS = ['trend_salida_db_v2', 'trend_salida_records_v1'];
  const INHABIL_DAY = 2;
  const COMPARE_CURRENT_DAY = 18;
  const COMPARE_PREVIOUS_DAY = 17;

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
    ],
  };

  const monthSelect = document.querySelector('#monthSelect');
  const yearSelect = document.querySelector('#yearSelect');
  const currentMonthLabel = document.querySelector('#currentMonthLabel');
  const sectionsContainer = document.querySelector('#sectionsContainer');
  const historyContainer = document.querySelector('#historyContainer');
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
    const ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    return { ctx, width, height };
  }

  function drawDailyChart(canvas, labels, metaValues, realValues) {
    const { ctx, width, height } = setupCanvas(canvas, 300);
    const p = { l: 36, r: 20, t: 18, b: 32 };
    const chartW = width - p.l - p.r;
    const chartH = height - p.t - p.b;

    const allValues = [...metaValues, ...realValues].filter((n) => n != null);
    const max = Math.max(1, ...allValues) * 1.1;

    ctx.strokeStyle = '#d9e4ff';
    ctx.beginPath();
    ctx.moveTo(p.l, p.t);
    ctx.lineTo(p.l, height - p.b);
    ctx.lineTo(width - p.r, height - p.b);
    ctx.stroke();

    const xStep = chartW / Math.max(1, labels.length - 1);

    function pointY(value) {
      return p.t + chartH - (value / max) * chartH;
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
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    drawLine(metaValues, '#8aa4ff');
    drawLine(realValues, '#f48fb1');

    ctx.fillStyle = '#5f6f92';
    ctx.font = '11px Arial';
    labels.forEach((label, i) => {
      if (i % 2 !== 0) return;
      const x = p.l + i * xStep;
      ctx.fillText(label, x - 5, height - 10);
    });
  }

  function drawHistoryBars(canvas, labels, values) {
    const { ctx, width, height } = setupCanvas(canvas, 240);
    const p = 24;
    const chartW = width - p * 2;
    const chartH = height - p * 2;
    const max = Math.max(1, ...values) * 1.1;
    const gap = chartW / Math.max(1, values.length);
    const barW = Math.max(20, gap * 0.55);
    const colors = ['#d2e8ff', '#f9d9e7', '#d9f4e7', '#ffe9cc'];

    values.forEach((v, i) => {
      const h = (v / max) * chartH;
      const x = p + i * gap + (gap - barW) / 2;
      const y = height - p - h;
      ctx.fillStyle = colors[i % colors.length];
      ctx.strokeStyle = '#c8d8ff';
      ctx.lineWidth = 1;
      ctx.fillRect(x, y, barW, h);
      ctx.strokeRect(x, y, barW, h);

      ctx.fillStyle = '#6a7da7';
      ctx.font = '11px Arial';
      ctx.fillText(labels[i], x, height - 6);
    });
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
      <p class="muted">Incluye variación absoluta y porcentaje de cambio por sección.</p>
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

      let cls = 'trend-flat';
      let icon = '➖';
      let text = 'Sin cambio';
      if (delta > 0) {
        cls = 'trend-up';
        icon = '📈';
        text = 'Aumento';
      } else if (delta < 0) {
        cls = 'trend-down';
        icon = '📉';
        text = 'Decremento';
      }

      const item = document.createElement('div');
      item.className = `compare-item ${cls}`;
      item.innerHTML = `
        <h4>${line.name}</h4>
        <div class="compare-values">
          <span>Día ${COMPARE_PREVIOUS_DAY}: <strong>${formatNumber(previousReal)}</strong></span>
          <span>Día ${COMPARE_CURRENT_DAY}: <strong>${formatNumber(currentReal)}</strong></span>
        </div>
        <div class="compare-kpi">
          <span class="big-icon">${icon}</span>
          <div>
            <p class="compare-delta">${text}: <strong>${formatNumber(Math.abs(delta))}</strong></p>
            <p class="compare-pct">${pct >= 0 ? '+' : ''}${formatNumber(pct)}%</p>
          </div>
        </div>
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
            <p class="muted">Comportamiento diario (sin sábados ni domingos)</p>
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
    historyContainer.innerHTML = '';
    monthlyAveragesContainer.innerHTML = `
      <h3>Histórico + Promedios mensuales (sin febrero)</h3>
      <p class="muted">Se combinan datos históricos y promedio mensual real para una vista ejecutiva.</p>
    `;

    const wrap = document.createElement('div');
    wrap.className = 'avg-combined-grid';

    LINES.forEach((line) => {
      const series = monthlyStats(line.id, true);
      const labels = series.map((s) => monthLabelFromKey(s.key));
      const values = series.map((s) => s.avg);
      const max = Math.max(0, ...values);
      const min = Math.min(...values.length ? values : [0]);

      const card = document.createElement('article');
      card.className = 'avg-card avg-card-pro';
      card.innerHTML = `
        <div class="avg-head">
          <h4>${line.name}</h4>
          <div class="avg-pills">
            <span class="pill pill-up">Top: ${formatNumber(max)}</span>
            <span class="pill pill-down">Min: ${formatNumber(min)}</span>
          </div>
        </div>
        <canvas class="history-canvas"></canvas>
        <table class="avg-table">
          <thead><tr><th>Mes</th>${labels.map((l) => `<th>${l}</th>`).join('')}</tr></thead>
          <tbody>
            <tr><td>Prom. Real</td>${values.map((v) => `<td>${formatNumber(v)}</td>`).join('')}</tr>
            <tr><td>Cump. %</td>${series.map((s) => `<td>${formatNumber(s.cumplimiento)}%</td>`).join('')}</tr>
          </tbody>
        </table>
      `;

      wrap.append(card);
      drawHistoryBars(card.querySelector('.history-canvas'), labels.map((l) => l.slice(0, 3)), values);
    });

    monthlyAveragesContainer.append(wrap);
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
