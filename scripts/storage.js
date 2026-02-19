const KEY = "trend-salida-records";

export const DEFAULT_LINES = [
  "Montado de Cerámica + Cargado de Header",
  "Montado de Chip",
  "Alineación de Chip",
  "Wire Bond",
];

export function getRecords() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveRecords(records) {
  localStorage.setItem(KEY, JSON.stringify(records));
}

export function upsertRecord(record) {
  const records = getRecords();
  const index = records.findIndex(
    (item) => item.line === record.line && item.date === record.date,
  );

  if (index >= 0) {
    records[index] = record;
  } else {
    records.push(record);
  }

  saveRecords(records);
  return records;
}
