"use client";

export default function Button({
  name,
  func,
}: {
  name: string;
  func: () => void;
}) {
  return (
    <button
      className="bg-slate-200 dark:bg-slate-800  pl-6 dark:text-white rounded-lg pr-6 p-2 border-2 cursor-pointer  hover:bg-slate-200 hover:text-black"
      onClick={func}
    >
      {name}
    </button>
  );
}
