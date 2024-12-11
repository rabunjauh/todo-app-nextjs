import Image from "next/image";
import { Button } from "../ui/button";
import { MdDashboard } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { IoIosList } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex justify-center mb-5">
            <Image
              src={"/image/profile.jpg"}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border-2 border-white"
            />
          </div>
          <div className="flex justify-center font-medium text-2xl">
            Mustafa
          </div>
          <div className="flex justify-center font-light">
            mustafa.visionet@gmail.com
          </div>
          <div className="space-y-3 mt-5 ">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
            >
              <MdDashboard />
              <Link href="/">Dashboard</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
            >
              <BsExclamationCircle />
              <Link href="/vital-task">Vital Task</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
            >
              <BiTask />
              <Link href="/my-task">My Task</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
            >
              <IoIosList />
              <Link href="/task-categories">Task Categories</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
            >
              <IoSettingsOutline />
              <Link href="/settings">Settings</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
            >
              <MdOutlineLogout />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
