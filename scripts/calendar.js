export function getMonthName(monthIndex) {
  return new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    new Date(2024, monthIndex, 1),
  );
}

export function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

export function toISODate(year, monthIndex, day) {
  const month = String(monthIndex + 1).padStart(2, "0");
  return `${year}-${month}-${String(day).padStart(2, "0")}`;
}

export function getMonths() {
  return Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: getMonthName(i),
  }));
}

export function getYearOptions(range = 3) {
  const current = new Date().getFullYear();
  const years = [];

  for (let offset = -range; offset <= range; offset += 1) {
    years.push(current + offset);
  }

  return years;
}
