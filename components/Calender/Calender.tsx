import calender from "../../data/calender2026.json";

export default function Page({ i }: { i: number }) {
  const { days, startDay } = calender.months[i];

  const prevMonthDays = calender.months[(i - 1 + 12) % 12].days;

  const result: number[] = [];

  let beforeStart = 0;

  for (let j = prevMonthDays - startDay + 1; j <= prevMonthDays; j++) {
    result.push(j);
    beforeStart++;
  }

  for (let j = 1; j <= days; j++) {
    result.push(j);
  }

  const afterStart = beforeStart + days;

  let next = 1;
  while (result.length % 7 !== 0) {
    result.push(next++);
  }

  return (
    <div className="w-full flex flex-col p-6 h-80 font-semibold ">
      <div className="grid grid-cols-7 gap-4 pb-6">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (value, index) => (
            <h1 key={index} className="text-black text-center">
              {value}
            </h1>
          ),
        )}
      </div>

      <div className="grid grid-cols-7 gap-4">
        {result.map((value, index) => {
          const isPrevMonth = index < beforeStart;
          const isNextMonth = index >= afterStart;

          return (
            <h1
              key={index}
              className={`text-center ${
                isPrevMonth || isNextMonth ? "text-slate-300" : "text-black"
              }`}
            >
              {value}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
