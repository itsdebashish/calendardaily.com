import calender from "../../data/calender2026.json"
const date = [1, 2, 3, 4, 5, 6, 7, 8,9 ,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
export default function Page() {
  return (
    <div className="w-full flex-col flex p-6 h-80  bg-slate-200">
      <div className="flex w-full justify-between pb-10">
        {
          (["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
            (value, index) => (
              <h1 key={index} className="text-black">
                {value}
              </h1>
            ),
          ),
          )
        }
      </div>
      <div className="flex w-full gap-7 flex-wrap">
        {
          date.map((value, index) => (
            <h1 key={index} className="text-black">
              {value}
            </h1>
          ))
        }
      </div>
    </div>
  );
}
