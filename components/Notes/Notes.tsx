"use client";
import { Store } from "@/store/localstore";
import { getStorage } from "@/store/localstore";
import React from "react";

function Input({ month, id }: { month: number; id: string }) {
  const key = `note-${month}-${id}`;

  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const stored = getStorage(key);
    if (stored) setValue(stored);
  }, [key]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    Store(key, val);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      maxLength={40}
      placeholder=""
      className="
        w-full
        px-3 py-2
        border-b-2 border-black
        focus:outline-none
        bg-transparent
        whitespace-nowrap
        overflow-hidden
        text-ellipsis
      "
    />
  );
}

export default function Page({ month }: { month: number }) {
  return (
    <div className="w-full h-80 g-slate-200 text-black p-6 mx-auto rounded-lg hadow-md">
      <h1 className="font-bold text-xl text-center mb-4">Notes</h1>

      <div className="flex flex-col gap-3">
        <Input key={`0-${month}`} month={month} id="0" />
        <Input key={`1-${month}`} month={month} id="1" />
        <Input key={`2-${month}`} month={month} id="2" />
        <Input key={`3-${month}`} month={month} id="3" />
        <Input key={`4-${month}`} month={month} id="4" />
      </div>
    </div>
  );
}
