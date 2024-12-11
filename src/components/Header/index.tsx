import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FiSearch } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

export default function Header() {
  return (
    <div className="bg-amber-50 flex w-full justify-between items-center h-[10%] px-10">
      <div className="font-bold text-3xl">Dashboard</div>
      <div className="flex gap-1">
        <Input
          type="text"
          placeholder="Search your task here"
          className="w-[695px]"
        />
        <Button className="bg-red-400 text-white hover:bg-red-100">
          <FiSearch />
        </Button>
      </div>
      <div className="flex gap-1">
        <Button className="bg-red-400 text-white hover:bg-red-100">
          <RiNotification3Line />
        </Button>
        <Button className="bg-red-400 text-white hover:bg-red-100">
          <RxCalendar />
        </Button>
      </div>
      <div>
        <div className="font-semibold">Sunday</div>
        <div className="text-blue-600">18/12/2024</div>
      </div>
    </div>
  );
}
