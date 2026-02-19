(() => {
  const LINES = [
    { id: 'montado_ceramica', name: 'Montado de Cerámica + Cargado de Header' },
    { id: 'montado_chip', name: 'Montado de Chip' },
    { id: 'alineacion_chip', name: 'Alineación de Chip' },
    { id: 'wire_bond', name: 'Wire Bond' },
  ];

  const DB_KEY = 'trend_salida_db_v2';
  const LEGACY_RECORDS_KEY = 'trend_salida_records_v1';

  const SEED_DB = {
  "metas": {
    "montado_ceramica": 2287,
    "montado_chip": 2610,
    "alineacion_chip": 3859,
    "wire_bond": 2346
  },
  "records": [
    {
      "lineId": "montado_ceramica",
      "date": "2025-10-01",
      "target": 2287,
      "real": 2035
    },
    {
      "lineId": "montado_ceramica",
      "date": "2025-11-01",
      "target": 2287,
      "real": 2085
    },
    {
      "lineId": "montado_ceramica",
      "date": "2025-12-01",
      "target": 2287,
      "real": 1869
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-01-01",
      "target": 2287,
      "real": 1321
    },
    {
      "lineId": "montado_chip",
      "date": "2025-10-01",
      "target": 2610,
      "real": 1973
    },
    {
      "lineId": "montado_chip",
      "date": "2025-11-01",
      "target": 2610,
      "real": 2059
    },
    {
      "lineId": "montado_chip",
      "date": "2025-12-01",
      "target": 2610,
      "real": 1904
    },
    {
      "lineId": "montado_chip",
      "date": "2026-01-01",
      "target": 2610,
      "real": 2066
    },
    {
      "lineId": "alineacion_chip",
      "date": "2025-10-01",
      "target": 3859,
      "real": 1580
    },
    {
      "lineId": "alineacion_chip",
      "date": "2025-11-01",
      "target": 3859,
      "real": 1508
    },
    {
      "lineId": "alineacion_chip",
      "date": "2025-12-01",
      "target": 3859,
      "real": 1536
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-01-01",
      "target": 3859,
      "real": 2145
    },
    {
      "lineId": "wire_bond",
      "date": "2025-10-01",
      "target": 2346,
      "real": 1205
    },
    {
      "lineId": "wire_bond",
      "date": "2025-11-01",
      "target": 2346,
      "real": 1651
    },
    {
      "lineId": "wire_bond",
      "date": "2025-12-01",
      "target": 2346,
      "real": 4883
    },
    {
      "lineId": "wire_bond",
      "date": "2026-01-01",
      "target": 2346,
      "real": 2002
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-03",
      "target": 2287,
      "real": 2222
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-04",
      "target": 2287,
      "real": 2223
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-05",
      "target": 2287,
      "real": 1753
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-06",
      "target": 2287,
      "real": 2873
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-09",
      "target": 2287,
      "real": 2263
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-10",
      "target": 2287,
      "real": 2296
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-11",
      "target": 2287,
      "real": 2167
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-12",
      "target": 2287,
      "real": 2263
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-13",
      "target": 2287,
      "real": 2259
    },
    {
      "lineId": "montado_ceramica",
      "date": "2026-02-16",
      "target": 2287,
      "real": 1800
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-03",
      "target": 2610,
      "real": 2155
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-04",
      "target": 2610,
      "real": 2000
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-05",
      "target": 2610,
      "real": 1900
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-06",
      "target": 2610,
      "real": 2164
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-09",
      "target": 2610,
      "real": 1998
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-10",
      "target": 2610,
      "real": 2217
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-11",
      "target": 2610,
      "real": 2114
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-12",
      "target": 2610,
      "real": 1912
    },
    {
      "lineId": "montado_chip",
      "date": "2026-02-13",
      "target": 2610,
      "real": 1944
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-02-03",
      "target": 3859,
      "real": 1600
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-02-04",
      "target": 3859,
      "real": 1630
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-02-05",
      "target": 3859,
      "real": 1600
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-02-06",
      "target": 3859,
      "real": 1720
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-02-09",
      "target": 3859,
      "real": 1244
    },
    {
      "lineId": "alineacion_chip",
      "date": "2026-02-10",
      "target": 3859,
      "real": 1800
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-03",
      "target": 2346,
      "real": 1700
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-04",
      "target": 2346,
      "real": 1790
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-05",
      "target": 2346,
      "real": 1540
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-06",
      "target": 2346,
      "real": 1605
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-09",
      "target": 2346,
      "real": 1730
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-10",
      "target": 2346,
      "real": 1750
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-11",
      "target": 2346,
      "real": 1700
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-12",
      "target": 2346,
      "real": 1605
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-13",
      "target": 2346,
      "real": 1595
    },
    {
      "lineId": "wire_bond",
      "date": "2026-02-16",
      "target": 2346,
      "real": 1720
    }
  ]
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

  const now = new Date();
  let selectedMonth = now.getMonth();
  let selectedYear = now.getFullYear();
  let db = loadDB();

  function getDaysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  function formatDateISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function monthName(index) {
    return new Date(2025, index, 1).toLocaleString('es-MX', { month: 'long' });
  }

  function formatNumber(value) {
    if (value == null || Number.isNaN(value)) return '—';
    return Number(value).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function keyFromDate(dateStr) {
    const [year, month] = dateStr.split('-');
    return `${year}-${month}`;
  }

  function parseSeedDb() {
    return JSON.parse(JSON.stringify(SEED_DB));
  }

  function loadDB() {
    try {
      const rawDb = localStorage.getItem(DB_KEY);
      if (rawDb) {
        const parsed = JSON.parse(rawDb);
        return {
          metas: parsed.metas || {},
          records: Array.isArray(parsed.records) ? parsed.records : [],
        };
      }

      const legacyRaw = localStorage.getItem(LEGACY_RECORDS_KEY);
      if (legacyRaw) {
        const legacyRecords = JSON.parse(legacyRaw);
        const seeded = parseSeedDb();
        const migrated = {
          metas: seeded.metas,
          records: Array.isArray(legacyRecords) ? legacyRecords : [],
        };
        localStorage.setItem(DB_KEY, JSON.stringify(migrated));
        return migrated;
      }

      const seeded = parseSeedDb();
      localStorage.setItem(DB_KEY, JSON.stringify(seeded));
      return seeded;
    } catch (error) {
      return parseSeedDb();
    }
  }

  function saveDB() {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }

  function upsertRecord(nextRecord) {
    const idx = db.records.findIndex((item) => item.lineId === nextRecord.lineId && item.date === nextRecord.date);
    if (idx >= 0) db.records[idx] = nextRecord;
    else db.records.push(nextRecord);
  }

  function setupMonthYearSelectors() {
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

  function setupLineSelector() {
    lineSelect.innerHTML = '';
    LINES.forEach((line) => {
      const op = document.createElement('option');
      op.value = line.id;
      op.textContent = line.name;
      lineSelect.append(op);
    });
  }

  function syncEntryTargetWithGoal() {
    const goal = db.metas[lineSelect.value] || 0;
    targetInput.value = goal > 0 ? goal : '';
  }

  function renderGoalsForm() {
    goalsForm.innerHTML = '';

    LINES.forEach((line) => {
      const item = document.createElement('div');
      item.className = 'goal-item';
      item.innerHTML = `
        <label for="goal_${line.id}">${line.name}</label>
        <input id="goal_${line.id}" type="number" step="0.01" min="0" data-goal-input="${line.id}" value="${db.metas[line.id] || ''}" required />
      `;
      goalsForm.append(item);
    });

    const actions = document.createElement('div');
    actions.className = 'goals-actions';
    actions.innerHTML = '<button type="submit" class="btn-primary">Guardar metas</button>';
    goalsForm.append(actions);
  }

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

  function drawDailyChart(canvas, labels, targetValues, realValues) {
    const { ctx, width, height } = setupCanvas(canvas);
    const paddingLeft = 34;
    const paddingRight = 18;
    const paddingTop = 20;
    const paddingBottom = 28;
    const chartW = width - paddingLeft - paddingRight;
    const chartH = height - paddingTop - paddingBottom;

    const allValues = targetValues.concat(realValues).filter((v) => v != null);
    const maxRaw = allValues.length ? Math.max.apply(null, allValues) : 1;
    const max = Math.max(1, Math.ceil(maxRaw / 200) * 200);
    const stepX = chartW / Math.max(1, labels.length - 1);

    ctx.strokeStyle = '#dce9ff';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i += 1) {
      const y = paddingTop + (chartH / 5) * i;
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();

      const referenceValue = Math.round(max - (max / 5) * i);
      ctx.fillStyle = '#6c81a1';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(referenceValue.toLocaleString('es-MX'), paddingLeft - 6, y + 3);
    }
    ctx.textAlign = 'start';

    labels.forEach((_, idx) => {
      const x = paddingLeft + idx * stepX;
      ctx.fillStyle = '#6c81a1';
      ctx.font = '10px Arial';
      ctx.fillText(String(idx + 1), x - 4, height - 8);
    });

    // Barras de real diario (nuevo diseño)
    const barW = Math.max(4, stepX * 0.55);
    realValues.forEach((value, idx) => {
      if (value == null) return;
      const x = paddingLeft + idx * stepX - barW / 2;
      const barH = (value / max) * chartH;
      const y = paddingTop + chartH - barH;
      ctx.fillStyle = 'rgba(46,127,231,0.35)';
      ctx.fillRect(x, y, barW, barH);
    });

    // Línea meta (referencia)
    ctx.strokeStyle = '#0b4f9c';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 5]);
    ctx.beginPath();
    let startedMeta = false;
    targetValues.forEach((value, idx) => {
      if (value == null) return;
      const x = paddingLeft + idx * stepX;
      const y = paddingTop + chartH - (value / max) * chartH;
      if (!startedMeta) {
        ctx.moveTo(x, y);
        startedMeta = true;
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // Línea trend real super visible
    ctx.strokeStyle = '#f05a2b';
    ctx.lineWidth = 4;
    ctx.beginPath();
    let started = false;
    realValues.forEach((value, idx) => {
      if (value == null) return;
      const x = paddingLeft + idx * stepX;
      const y = paddingTop + chartH - (value / max) * chartH;
      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    realValues.forEach((value, idx) => {
      if (value == null) return;
      const x = paddingLeft + idx * stepX;
      const y = paddingTop + chartH - (value / max) * chartH;
      ctx.fillStyle = '#f05a2b';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    ctx.fillStyle = '#4f6282';
    ctx.font = '11px Arial';
    ctx.fillText('Meta', paddingLeft, 14);
    ctx.strokeStyle = '#0b4f9c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(paddingLeft + 34, 10);
    ctx.lineTo(paddingLeft + 52, 10);
    ctx.stroke();
    ctx.fillStyle = '#4f6282';
    ctx.fillText('Trend real', paddingLeft + 62, 14);
    ctx.fillStyle = '#f05a2b';
    ctx.beginPath();
    ctx.arc(paddingLeft + 132, 10, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawMonthlyBars(canvas, labels, values) {
    const { ctx, width, height } = setupCanvas(canvas);
    const padding = 26;
    drawAxes(ctx, width, height, padding);

    const max = values.length ? Math.max.apply(null, values) * 1.15 : 1;
    const chartWidth = width - padding * 2;
    const barSpace = chartWidth / Math.max(1, values.length);
    const barWidth = Math.max(8, barSpace * 0.5);

    values.forEach((value, idx) => {
      const x = padding + idx * barSpace + (barSpace - barWidth) / 2;
      const barHeight = (value / max) * (height - padding * 2);
      const y = height - padding - barHeight;
      ctx.fillStyle = '#1458b3';
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = '#1b2a41';
      ctx.font = '10px Arial';
      ctx.fillText(Number(value).toLocaleString('es-MX', { maximumFractionDigits: 0 }), x, y - 6);

      if (labels[idx]) {
        ctx.fillStyle = '#5c7092';
        ctx.font = '10px Arial';
        ctx.fillText(labels[idx], x, height - 8);
      }
    });
  }

  function summarize(metaByDay, realByDay) {
    const meta = metaByDay.reduce((acc, item) => acc + (item || 0), 0);
    const real = realByDay.reduce((acc, item) => acc + (item || 0), 0);
    const cumplimiento = meta > 0 ? (real / meta) * 100 : 0;
    return { meta, real, cumplimiento };
  }

  function renderSectionCards() {
    sectionsContainer.innerHTML = '';
    const days = getDaysInMonth(selectedYear, selectedMonth);
    const chartRefs = [];

    LINES.forEach((line) => {
      const goal = Number(db.metas[line.id] || 0);

      const lineMonthRecords = db.records.filter((item) => {
        if (item.lineId !== line.id) return false;
        const d = new Date(`${item.date}T00:00:00`);
        return d.getFullYear() === selectedYear && d.getMonth() === selectedMonth;
      });

      const metaByDay = Array(days).fill(goal > 0 ? goal : null);
      const realByDay = Array(days).fill(null);
      lineMonthRecords.forEach((item) => {
        const day = Number(item.date.split('-')[2]) - 1;
        if (item.target != null) metaByDay[day] = item.target;
        realByDay[day] = item.real;
      });

      const resume = summarize(metaByDay, realByDay);
      const headers = Array.from({ length: days }, (_, i) => `<th>${i + 1}</th>`).join('');
      const rowMeta = metaByDay.map((n) => `<td>${formatNumber(n)}</td>`).join('');
      const rowReal = realByDay.map((n) => `<td>${formatNumber(n)}</td>`).join('');

      const card = document.createElement('article');
      card.className = 'section-card';
      card.innerHTML = `
        <div class="section-header">
          <strong>${line.name}</strong>
          <div class="badges">
            <span class="badge">Meta: ${formatNumber(resume.meta)}</span>
            <span class="badge">Cantidad: ${formatNumber(resume.real)}</span>
            <span class="badge">Cumplimiento: ${formatNumber(resume.cumplimiento)}%</span>
          </div>
        </div>
        <div class="section-content">
          <div class="table-wrap">
            <table class="month-table">
              <thead><tr><th>Día</th>${headers}</tr></thead>
              <tbody>
                <tr><td class="label-cell">Meta</td>${rowMeta}</tr>
                <tr><td class="label-cell">Cantidad real</td>${rowReal}</tr>
              </tbody>
            </table>
          </div>
          <div class="charts-row">
            <div class="chart-card chart-card-daily"><p class="muted">Comportamiento diario alineado por día</p><canvas data-chart="daily"></canvas></div>
          </div>
        </div>
      `;

      sectionsContainer.append(card);
      chartRefs.push({
        daily: card.querySelector('[data-chart="daily"]'),
        metaByDay,
        realByDay,
      });
    });

    return chartRefs;
  }

  function toMonthSeries(lineId) {
    const map = new Map();
    db.records.forEach((item) => {
      if (item.lineId !== lineId) return;
      const key = keyFromDate(item.date);
      const prev = map.get(key) || 0;
      map.set(key, prev + item.real);
    });

    const sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return {
      labels: sorted.map((entry) => {
        const parts = entry[0].split('-');
        return `${parts[1]}/${parts[0].slice(2)}`;
      }),
      values: sorted.map((entry) => entry[1]),
    };
  }


  function monthLabelFromKey(key) {
    const parts = key.split('-');
    const year = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    return `${monthName(month).toUpperCase()} ${year}`;
  }

  function monthlyAveragesByLine(lineId) {
    const map = new Map();
    db.records.forEach((item) => {
      if (item.lineId !== lineId) return;
      const key = keyFromDate(item.date);
      const prev = map.get(key) || { sum: 0, count: 0 };
      prev.sum += item.real;
      prev.count += 1;
      map.set(key, prev);
    });

    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, v]) => ({ key, avg: v.count ? v.sum / v.count : 0 }));
  }

  function renderMonthlyAverages() {
    monthlyAveragesContainer.innerHTML = '<h3>Promedios mensuales reales</h3>';

    LINES.forEach((line) => {
      const series = monthlyAveragesByLine(line.id);
      const months = series.map((m) => `<th>${monthLabelFromKey(m.key)}</th>`).join('');
      const values = series.map((m) => `<td>${formatNumber(m.avg)}</td>`).join('');

      const card = document.createElement('div');
      card.className = 'avg-card';
      card.innerHTML = `
        <h4>${line.name}</h4>
        <table class="avg-table">
          <thead><tr>${months}</tr></thead>
          <tbody><tr>${values}</tr></tbody>
        </table>
      `;
      monthlyAveragesContainer.append(card);
    });
  }

  function renderHistoryCards() {
    historyContainer.innerHTML = '';
    LINES.forEach((line) => {
      const series = monthlyAveragesByLine(line.id);
      const labels = series.map((sItem) => monthLabelFromKey(sItem.key));
      const values = series.map((sItem) => sItem.avg);

      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `<h3>${line.name}</h3><p class="muted">Trend de promedio mensual real</p><canvas></canvas>`;
      historyContainer.append(item);

      drawMonthlyBars(item.querySelector('canvas'), labels, values);
    });
  }

  function setCurrentMonthLabel() {
    currentMonthLabel.textContent = `${monthName(selectedMonth)} ${selectedYear}`;
  }

  function renderDashboard() {
    setCurrentMonthLabel();
    const refs = renderSectionCards();
    refs.forEach((ref) => {
      const labels = Array.from({ length: ref.metaByDay.length }, (_, i) => String(i + 1));
      drawDailyChart(ref.daily, labels, ref.metaByDay, ref.realByDay);
    });
    renderHistoryCards();
    renderMonthlyAverages();
  }

  function activateScreen(screenId) {
    screens.forEach((screen) => screen.classList.toggle('active', screen.id === screenId));
    navButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.screen === screenId));
  }

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => activateScreen(btn.dataset.screen));
  });

  monthSelect.addEventListener('change', (e) => {
    selectedMonth = Number(e.target.value);
    renderDashboard();
  });

  yearSelect.addEventListener('change', (e) => {
    selectedYear = Number(e.target.value);
    renderDashboard();
  });

  lineSelect.addEventListener('change', syncEntryTargetWithGoal);

  goalsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    LINES.forEach((line) => {
      const input = goalsForm.querySelector(`[data-goal-input="${line.id}"]`);
      db.metas[line.id] = Number(input.value || 0);
    });

    saveDB();
    syncEntryTargetWithGoal();
    goalsFeedback.textContent = 'Metas actualizadas correctamente.';
    renderDashboard();
  });

  entryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const record = {
      lineId: lineSelect.value,
      date: dateInput.value,
      target: Number(targetInput.value || db.metas[lineSelect.value] || 0),
      real: Number(realInput.value),
    };

    upsertRecord(record);
    saveDB();

    const d = new Date(`${record.date}T00:00:00`);
    selectedMonth = d.getMonth();
    selectedYear = d.getFullYear();
    monthSelect.value = String(selectedMonth);
    yearSelect.value = String(selectedYear);

    entryForm.reset();
    dateInput.value = formatDateISO(new Date());
    syncEntryTargetWithGoal();
    entryFeedback.textContent = 'Registro guardado correctamente.';

    renderDashboard();
    activateScreen('dashboardScreen');
  });

  window.addEventListener('resize', renderDashboard);

  setupMonthYearSelectors();
  setupLineSelector();
  renderGoalsForm();
  dateInput.value = formatDateISO(now);
  syncEntryTargetWithGoal();
  renderDashboard();
})();
