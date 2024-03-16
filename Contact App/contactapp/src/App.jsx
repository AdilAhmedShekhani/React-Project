import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
export default function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
      <div className=" relative flex items-center flex-grow">
        <FiSearch className=" ml-1 absolute text-3xl text-white" />
        <input
          type="text"
          className="pl-9 h-10 flex-grow rounded-md border border-white bg-transparent text-white"
        />
      </div>
        <AiFillPlusCircle className=" cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
}
