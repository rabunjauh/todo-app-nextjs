"use client";
import { Button } from "@/components/ui/button";
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryFormSchema } from "@/lib/form-schema";

export default function TaskCategories() {
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
  });

  function onSubmit(values: z.infer<typeof categoryFormSchema>) {
    console.log(values);
  }

  return (
    <main className="h-[900px]">
      <section className="border p-10 rounded-xl shadow-lg w-full">
        <h3 className="font-bold">
          <span className="underline underline-offset-4 decoration-red-400 decoration-2">
            Task
          </span>{" "}
          Categories
        </h3>

        <div className="flex justify-between mt-10">
          <span className="font-bold">Task Status</span>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-red-400 font-light hover:bg-red-400 hover:text-white flex items-center text-base">
                <IoIosAdd />
                Add Task Status
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Task Status</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="border rounded-lg p-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="taskStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Task Status</FormLabel>
                          <FormControl>
                            <Input placeholder="Task Status" {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-red-400 font-light hover:bg-red-400 hover:text-white flex items-center text-base">
                <IoIosAdd />
                Add Task Priority
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Task Priority</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="border rounded-lg p-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="taskPriority"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Task Priority</FormLabel>
                          <FormControl>
                            <Input placeholder="Task Priority" {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
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
