function Input() {
  return (
    <input
      type="text"
      className="pl-3 focus:outline-none pr-3 p-2 w-full border-b-2 border-black"
    />
  );
}

export default function Page() {
  return (
    <div className="w-full h-80 bg-slate-200 text-black text-center p-6">
      <h1 className="font-bold">Notes</h1>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
}
