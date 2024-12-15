import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

export default function VitalTask() {
  return (
    <main className="flex gap-5 h-[900px]">
      <section className="border p-10 rounded-xl shadow-lg w-[40%]">
        <h3 className="font-bold">
          <span className="underline underline-offset-4 decoration-red-400 decoration-2">
            Vital
          </span>{" "}
          Tasks
        </h3>
        <Card className="w-full mb-3 mt-3 flex">
          <div className="mt-2 ml-2 text-red-500">
            <RiCheckboxBlankCircleLine />
          </div>
          <div>
            <CardHeader>
              <CardTitle>Walk the dog</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex gap-10">
              <div className="w-[70%]">
                Take the dog to the park and bring treats as well...
              </div>
              <Image
                src="/image/dog.jpg"
                alt="Dog"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </CardContent>
            <CardFooter className="flex justify-between font-light text-xs">
              <div>
                Priority:<span className="text-red-400"> Extreme</span>
              </div>
              <div>
                Status:<span className="text-red-500"> Not Started</span>
              </div>
              <div>
                <span className="text-slate-500">Created on: 20/05/2024</span>
              </div>
            </CardFooter>
          </div>
          <div className="mt-2 mr-2 text-2xl">
            <PiDotsThreeOutlineLight />
          </div>
        </Card>
        <Card className="w-full mb-3 mt-3 flex">
          <div className="mt-2 ml-2 text-blue-500 font-bold">
            <RiCheckboxBlankCircleLine />
          </div>
          <div>
            <CardHeader>
              <CardTitle>Take grandma to hospital</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex gap-10">
              <div className="w-[70%]">
                Go back home and take grandma to the hosp...
              </div>
              <Image
                src="/image/hospital.jpg"
                alt="hospital"
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
                Status:<span className="text-blue-500"> In Progress</span>
              </div>
              <div>
                <span className="text-slate-500">Created on: 20/05/2024</span>
              </div>
            </CardFooter>
          </div>
          <div className="mt-2 mr-2 text-2xl">
            <PiDotsThreeOutlineLight />
          </div>
        </Card>
      </section>
      <section className="border p-10 rounded-xl shadow-lg w-[60%]">
        <div className="flex gap-10">
          <Image
            src="/image/dog.jpg"
            alt="Dog"
            width={200}
            height={200}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-5 justify-end">
            <h1 className="font-bold text-xl">Walk the dog</h1>
            <div className="font-light text-sm">
              Priority: <span className="text-red-500">Extreme</span>
            </div>
            <div className="font-light text-sm">
              Status: <span className="text-red-500">Not Started</span>
            </div>
            <div className="font-light text-xs">Created on: 20/05/2024</div>
          </div>
        </div>
        <div className="text-gray-500 leading-10">
          <p>Take the dog to the park and bring treats as well.</p>
          <p>
            Take Luffy and Jiro for leisurely stroll around the neighbourhood.
            Enjoy the fresh air and give them the exercise and mental
            stimulation they need for a happy and healthy day. Dont forget to
            bring along squeky and fluffy for some extra fun along the way!
          </p>
          <p>
            <ul className="list-decimal list-inside">
              <li>Listen to podcast or audiobook</li>
              <li>Practice mindfulness or meditaion</li>
              <li>Take photos of interesting sights along the way</li>
              <li>Practice obedience training with your dog</li>
              <li>Chat with neighbors or other dog walkers</li>
              <li>Listen to music or an upbeat playlist</li>
            </ul>
          </p>
        </div>
      </section>
    </main>
  );
}
