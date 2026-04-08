import Image from "next/image";
import Notes from "../../components/Notes/Notes.tsx";
import Calender from "../../components/Calender/Calender.tsx";

function Button({ name, logo, func }) {
  return (
    <button
      className="pl-6 rounded-lg pr-6 p-2 border-2 cursor-pointer  hover:bg-slate-200 hover:text-black"
      onClick={func}
    >
      {name}
    </button>
  );
}

export default function CalenderPage() {
  return (
    <div className="max-w-2xl shadow-2xl  w-full p-8 pt-2 flex flex-col justify-center items-center  h-fit bg-slate-100">
      <div className="w-4 h-4 bg-black shadow-lg m-4 rounded-full text-center"></div>
      <div className="w-full">
        <h1 className="text-2xl relative top-20 left-10  z-50  text-white font-semibold">
          January 2026
        </h1>
        <Image
          className="h-full w-full overflow-hidden"
          src="https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg"
          width={400}
          height={400}
          alt="January Picture"
        />
      </div>
      <div className="flex md:flex-row flex-col-reverse w-full justify-between  ">
        <Notes />
        <Calender />
      </div>
      {/* <div className="w-full justify-between flex pt-10 pb-4 p-2 "> */}
      {/*   <Button name="Prev" /> */}
      {/*   <Button name="Next" /> */}
      {/* </div> */}
    </div>
  );
}
