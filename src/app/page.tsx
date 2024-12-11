import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoIosAdd } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import Link from "next/link";
import { BiTask } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <main>
        <div className="px-10">
          <h1 className="font-semibold text-3xl">Welcome back, Mustafa 👋 </h1>
        </div>
        <div className="border rounded-lg mt-10 shadow-xl flex p-10 m-10 gap-3">
          <div className="w-1/2">
            <section className="shadow-xl rounded-lg p-8">
              <div className="flex justify-between items-center text-xl text-red-400 gap-2 mb-5">
                <div className="flex items-center gap-2">
                  <LiaBusinessTimeSolid />
                  <h3>To-Do</h3>
                </div>

                <Link
                  href="#"
                  className="bg-white text-red-400 font-light hover:bg-red-400 hover:text-white flex items-center text-base"
                >
                  <IoIosAdd />
                  Add Task
                </Link>
              </div>
              <Card className="w-full mb-3 mt-3 flex">
                <div className="mt-2 ml-2 text-red-500">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Attend Andinis Birthday Party</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-10">
                    Buy gift on the way and pick up cake from the bakery
                    <Image
                      src="/image/party.jpg"
                      alt="Party"
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between font-light text-xs">
                    <div>
                      Priority:<span className="text-blue-400"> Moderate</span>
                    </div>
                    <div>
                      Status:<span className="text-red-500"> Progress</span>
                    </div>
                    <div>
                      <span className="text-slate-500">
                        Created on: 20/05/2024
                      </span>
                    </div>
                  </CardFooter>
                </div>
                <div className="mt-2 mr-2 text-2xl">
                  <PiDotsThreeOutlineLight />
                </div>
              </Card>
              <Card className="w-full mb-3 mt-3 flex">
                <div className="mt-2 ml-2 text-red-500">
                  <RiCheckboxBlankCircleLine className="text-blue-800" />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Attend Andinis Birthday Party</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-10">
                    Buy gift on the way and pick up cake from the bakery
                    <Image
                      src="/image/party.jpg"
                      alt="Party"
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between font-light text-xs">
                    <div>
                      Priority:<span className="text-blue-400"> Moderate</span>
                    </div>
                    <div>
                      Status:<span className="text-red-500"> Progress</span>
                    </div>
                    <div>
                      <span className="text-slate-500">
                        Created on: 20/05/2024
                      </span>
                    </div>
                  </CardFooter>
                </div>
                <div className="mt-2 mr-2 text-2xl">
                  <PiDotsThreeOutlineLight />
                </div>
              </Card>
              <Separator className="my-10" />
              <Card className="w-full mb-3 mt-3 flex">
                <div className="mt-2 ml-2 text-red-500">
                  <RiCheckboxBlankCircleLine className="text-blue-800" />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Attend Andinis Birthday Party</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-10">
                    Buy gift on the way and pick up cake from the bakery
                    <Image
                      src="/image/party.jpg"
                      alt="Party"
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between font-light text-xs">
                    <div>
                      Priority:<span className="text-blue-400"> Moderate</span>
                    </div>
                    <div>
                      Status:<span className="text-red-500"> Progress</span>
                    </div>
                    <div>
                      <span className="text-slate-500">
                        Created on: 20/05/2024
                      </span>
                    </div>
                  </CardFooter>
                </div>
                <div className="mt-2 mr-2 text-2xl">
                  <PiDotsThreeOutlineLight />
                </div>
              </Card>
            </section>
          </div>

          <div className="w-1/2">
            <section className="shadow-xl rounded-lg p-10">
              <div className="flex justify-between items-center text-xl text-red-400 gap-2 mb-5 ">
                <div className="flex items-center gap-2">
                  <FaTasks />
                  <h3>Task Status</h3>
                </div>
              </div>
              <Card className="w-full mb-3 mt-3 flex justify-between">
                <div className="mt-2 ml-2 text-red-500">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex w-[400px] justify-between">
                    <div>
                      <div className="border-8 rounded-full border-red-500 h-20 w-20 flex justify-center items-center">
                        80%
                      </div>
                      <div className="flex justify-center items-center text-red-500">
                        Completed
                      </div>
                    </div>
                    <div>
                      <div className="border-8 rounded-full border-blue-500 h-20 w-20 flex justify-center items-center">
                        80%
                      </div>
                      <div className="flex justify-center items-center text-blue-500">
                        Completed
                      </div>
                    </div>
                    <div>
                      <div className="border-8 rounded-full border-red-400 h-20 w-20 flex justify-center items-center">
                        80%
                      </div>
                      <div className="flex justify-center items-center text-red-400">
                        Completed
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </div>
                <div className="mt-2 mr-2 text-2xl">
                  <PiDotsThreeOutlineLight />
                </div>
              </Card>
            </section>
            <section className="shadow-xl rounded-lg p-10">
              <div className="flex justify-between items-center text-xl text-red-400 gap-2 mb-5 ">
                <div className="flex items-center gap-2">
                  <BiTask />
                  <h3>Completed Task</h3>
                </div>
              </div>
              <Card className="w-full mb-3 mt-3 flex">
                <div className="mt-2 ml-2 text-red-500">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle>Attend Andinis Birthday Party</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-10">
                    Buy gift on the way and pick up cake from the bakery
                    <Image
                      src="/image/party.jpg"
                      alt="Party"
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between font-light text-xs">
                    <div>
                      Priority:<span className="text-blue-400"> Moderate</span>
                    </div>
                    <div>
                      Status:<span className="text-red-500"> Progress</span>
                    </div>
                    <div>
                      <span className="text-slate-500">
                        Created on: 20/05/2024
                      </span>
                    </div>
                  </CardFooter>
                </div>
                <div className="mt-2 mr-2 text-2xl">
                  <PiDotsThreeOutlineLight />
                </div>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
