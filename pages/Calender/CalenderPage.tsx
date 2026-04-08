"use client";

import calender26 from "@/data/calender2026.json";
import BackgroundColor from '@/data/Background.json'
import Image from "next/image";
import Notes from "@/components/Notes/Notes";
import Calender from "@/components/Calender/Calender";
import Button from "@/components/Button/Button";
import React from "react";

export default function CalenderPage() {
  const currentMonthIndex = new Date().getMonth(); 
  const [color,setColor] = React.useState(0)
  const [month, setMonth] = React.useState(currentMonthIndex);
  const [direction, setDirection] = React.useState(1);

  const handleNextMonth = () => {
    setDirection(1);
    setMonth((p) => (p + 1) % 12);
  };

  const handlePrevMonth = () => {
    setDirection(-1);
    setMonth((p) => (p - 1 + 12) % 12);
  };

  return (
    <div className="h-fit flex items-center justify-center -gray-200">
      <div className={`calendar-card max-w-2xl w-full ${BackgroundColor.bg[month].color}  rounded-xl shadow-2xl overflow-hidden relative perspective`}>
        <div>
          <Image
            src="./binding.svg"
            alt="binding image"
            width={500}
            height={200}
            className="w-full"
          />
        </div>
        <div className="relative w-full h-[260px] overflow-hidden">
          <div className="absolute w-full h-full backface-hidden">
            <Image
              src={BackgroundColor.bg?.[month]?.image || 'https://plus.unsplash.com/premium_photo-1676422355557-2f2ffa09e817?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt="Calendar"
              fill
              className="object-cover"
            />

            <h1 className="absolute bottom-6 left-6 text-2xl md:text-3xl font-semibold text-black shadow-sm shadow-white bg-slate-50 p-2 rounded-lg z-10">
              {calender26.months[month].name} 2026
            </h1>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center  w-full justify-between p-4 gap-4">
          <Notes month={month} />
          <Calender i={month} />
        </div>

        <div className="flex justify-between p-4">
          <Button name="Prev" func={handlePrevMonth} />
          <Button name="Next" func={handleNextMonth} />
        </div>
      </div>
    </div>
  );
}
