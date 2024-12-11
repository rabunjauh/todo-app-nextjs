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
            <Link href="/">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
              >
                <MdDashboard />
                Dashboard
              </Button>
            </Link>
            <Link href="/vital-task">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
              >
                <BsExclamationCircle />
                Vital Task
              </Button>
            </Link>
            <Link href="/my-task">
              {" "}
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
              >
                <BiTask />
                My Task
              </Button>
            </Link>
            <Link href="/task-categories">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
              >
                <IoIosList />
                Task Categories
              </Button>
            </Link>
            <Link href="/settings">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-xl hover:text-red-400 font-normal text-xl h-20"
              >
                <IoSettingsOutline />
                Settings
              </Button>
            </Link>
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
