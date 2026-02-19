export function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

export function formatNumber(value) {
  if (value == null || Number.isNaN(value)) return '—';
  return Number(value).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatDateISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function monthName(index) {
  return new Date(2025, index, 1).toLocaleString('es-MX', { month: 'long' });
}

export function keyFromDate(dateStr) {
  const [year, month] = dateStr.split('-');
  return `${year}-${month}`;
}
