export const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function toDateKey(year: number, monthIndex: number, day: number): string {
  return new Date(year, monthIndex, day).toISOString().split("T")[0];
}

export function buildCalendarCells(
  prevMonthDays: number,
  startDay: number,
  days: number
): { cells: number[]; beforeStart: number; afterStart: number } {
  const cells: number[] = [];

  let beforeStart = 0;
  for (let j = prevMonthDays - startDay + 1; j <= prevMonthDays; j++) {
    cells.push(j);
    beforeStart++;
  }

  for (let j = 1; j <= days; j++) {
    cells.push(j);
  }

  const afterStart = beforeStart + days;

  let next = 1;
  while (cells.length % 7 !== 0) {
    cells.push(next++);
  }

  return { cells, beforeStart, afterStart };
}
