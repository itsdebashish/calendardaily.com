import { useEffect, useState } from "react";
import calender from "../../data/calender2026.json";
import { Store } from "@/store/localstore";
import { getStorage } from "@/store/localstore";
import { buildCalendarCells, toDateKey, WEEK_DAYS } from "@/utils/calender";

export default function Page({ i }: { i: number }) {
  const { days, startDay } = calender.months[i];
  const year = 2026;

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const storageKey = `calendar-range-${i}`;

  useEffect(() => {
    const saved = getStorage(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setStartDate(parsed.startDate);
      setEndDate(parsed.endDate);
    }
  }, [i]);

  useEffect(() => {
    Store(
      storageKey,
      JSON.stringify({ startDate, endDate })
    );
  }, [startDate, endDate, storageKey]);

  const prevMonthDays = calender.months[(i - 1 + 12) % 12].days;
  const { cells, beforeStart, afterStart } = buildCalendarCells(
    prevMonthDays,
    startDay,
    days
  );

  const handleClick = (index: number) => {
    if (index < beforeStart || index >= afterStart) return;

    const day = index - beforeStart + 1;
    const dateKey = toDateKey(year, i, day);

    if (!startDate || (startDate && endDate)) {
      setStartDate(dateKey);
      setEndDate(null);
      return;
    }

    if (dateKey === startDate && !endDate) {
      setStartDate(null);
      setEndDate(null);
      return;
    }

    if (dateKey < startDate) {
      setEndDate(startDate);
      setStartDate(dateKey);
    } else {
      setEndDate(dateKey);
    }
  };

  return (
    <div className="w-full flex flex-col p-6 h-80 font-semibold">
      <div className="grid grid-cols-7 gap-4 pb-6">
        {WEEK_DAYS.map((v, idx) => (
          <h1 key={idx} className="text-center">
            {v}
          </h1>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4">
        {cells.map((value, index) => {
          const isPrevMonth = index < beforeStart;
          const isNextMonth = index >= afterStart;
          const isCurrentMonth = !isPrevMonth && !isNextMonth;

          const day = isCurrentMonth ? index - beforeStart + 1 : null;
          const dateKey = day ? toDateKey(year, i, day) : null;

          const isStart = dateKey === startDate;
          const isEnd = dateKey === endDate;

          const inRange =
            dateKey && startDate && endDate
              ? dateKey > startDate && dateKey < endDate
              : false;

          return (
            <h1
              key={index}
              onClick={() => handleClick(index)}
              className={`text-center  rounded-full
                ${
                  isPrevMonth || isNextMonth
                    ? "text-black cursor-default bg-transparent"
                    : "text-black cursor-pointer"
                }
                ${isStart ? "bg-blue-600 text-white" : ""}
                ${isEnd ? "bg-blue-600 text-white" : ""}
                ${inRange ? "bg-blue-100" : ""}
                ${
                  !isStart && !isEnd && isCurrentMonth
                    ? "hover:bg-gray-200"
                    : ""
                }
              `}
            >
              {value}
            </h1>
          );
        })}
      </div>
    </div>
  );
}