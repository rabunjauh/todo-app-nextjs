import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";

export default function TaskCategories() {
  return (
    <main className="h-[900px]">
      <section className="border p-10 rounded-xl shadow-lg w-full">
        <h3 className="font-bold">
          <span className="underline underline-offset-4 decoration-red-400 decoration-2">
            Task
          </span>{" "}
          Categories
        </h3>
        <Button className="bg-red-500 text-white hover:bg-red-300 mt-5">
          Add Category
        </Button>
        <div className="flex justify-between mt-10">
          <span className="font-bold">Task Status</span>
          <Link
            href="#"
            className="bg-white text-red-400 font-light hover:bg-red-400 hover:text-white flex items-center text-base"
          >
            <IoIosAdd />
            Add Task Status
          </Link>
        </div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>SN</TableHead>
              <TableHead>Task Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell className="flex justify-center gap-5">
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiEdit />
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiTrash2 />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>In Progress</TableCell>
              <TableCell className="flex justify-center gap-5">
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiEdit />
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiTrash2 />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Not Started</TableCell>
              <TableCell className="flex justify-center gap-5">
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiEdit />
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiTrash2 />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Separator className="my-5" />
        <div className="flex justify-between mt-10">
          <span className="font-bold">Task Priority</span>
          <Link
            href="#"
            className="bg-white text-red-400 font-light hover:bg-red-400 hover:text-white flex items-center text-base"
          >
            <IoIosAdd />
            Add Task Priority
          </Link>
        </div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>SN</TableHead>
              <TableHead>Task Priority</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Extreme</TableCell>
              <TableCell className="flex justify-center gap-5">
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiEdit />
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiTrash2 />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Moderate</TableCell>
              <TableCell className="flex justify-center gap-5">
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiEdit />
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiTrash2 />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Low</TableCell>
              <TableCell className="flex justify-center gap-5">
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiEdit />
                  Edit
                </Button>
                <Button className="bg-red-500 text-white hover:bg-red-300">
                  <FiTrash2 />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
