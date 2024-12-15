"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoIosAdd } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { taskFormSchema } from "@/lib/form-schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function Home() {
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      taskTitle: "",
      taskDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof taskFormSchema>) {
    console.log(values);
  }

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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-red-500 hover:bg-red-500 hover:text-white">
                      <IoIosAdd />
                      Add Task
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Task</DialogTitle>
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
                            name="taskTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Task Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="Task Title" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="taskDate"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-[240px] pl-3 text-left font-normal",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormDescription></FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel>Priority</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <div className="flex gap-3">
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="extreme" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Extreme
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="moderate" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Moderate
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="low" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Low
                                        </FormLabel>
                                      </FormItem>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="taskDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Task Description</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Task Description"
                                    className="resize-none"
                                    {...field}
                                  />
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
