import { STORAGE_KEY } from './config.js';

export function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function upsertRecord(records, newRecord) {
  const idx = records.findIndex(
    (item) => item.lineId === newRecord.lineId && item.date === newRecord.date,
  );

  if (idx >= 0) {
    records[idx] = newRecord;
  } else {
    records.push(newRecord);
  }

  return records;
}
