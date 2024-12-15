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

export default function MyTask() {
  return (
    <main className="flex gap-5 h-[900px]">
      <section className="border p-10 rounded-xl shadow-lg w-[40%]">
        <h3 className="font-bold">
          <span className="underline underline-offset-4 decoration-red-400 decoration-2">
            My
          </span>{" "}
          Tasks
        </h3>
        <Card className="w-full mb-3 mt-3 flex">
          <div className="mt-2 ml-2 text-red-500">
            <RiCheckboxBlankCircleLine />
          </div>
          <div>
            <CardHeader>
              <CardTitle>Submit Documents</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex gap-10">
              <div className="w-[70%]">
                Review the list of documents required for submission and ensure
                all necessary documents are ready.
              </div>
              <Image
                src="/image/document.jpg"
                alt="Document"
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
              <CardTitle>Complete assignments</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex gap-10">
              <div className="w-[70%]">
                The assignments must be completed to pass final year...
              </div>
              <Image
                src="/image/document.jpg"
                alt="Document"
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
            src="/image/document.jpg"
            alt="Document"
            width={200}
            height={200}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-5 justify-end">
            <h1 className="font-bold text-xl">Submit Documents</h1>
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
          <p>
            <span className="font-semibold">Task Title: </span>Document
            Submission.
          </p>
          <p>
            <span className="font-semibold">Objective: </span>To submit required
            documents for something important
          </p>
          <p>
            <span className="font-semibold">Task Description: </span>
            Review the list of documents required for submission and ensure all
            necessary documents are ready. Organize the documents accordingly
            and scan them if physical copies need to be submitted digitally.
            Rename the scanned files appropriately for easy identification and
            veify the accepted file formats. Upload the documents securely to
            the designated platform, double-check for accuracy, and obtain
            confirmation of successful submission. Follow up if necessary to
            ensure proper processing.
          </p>
          <p>
            <span className="font-semibold">Additional Notes: </span>
            <ul className="list-disc list-inside">
              <li>Ensure that documents are authentic and up-to-date.</li>
              <li>
                Maintain confidentiality and security of sensitive information
                during the submission process.
              </li>
              <li>
                If there are specific guidelines or deadlines for submission,
                adhere to them diligently
              </li>
            </ul>
          </p>
          <p>
            <span className="font-semibold">Deadline for Submission: </span>
            End of Day
          </p>
        </div>
      </section>
    </main>
  );
}
