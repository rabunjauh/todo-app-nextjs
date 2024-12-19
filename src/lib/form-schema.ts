import { z } from "zod";

export const taskFormSchema = z.object({
  taskTitle: z.string({ required_error: "Title is required" }),
  taskDate: z.date({ required_error: "Date is required" }),
  priority: z.string({ required_error: "You need to select Priority" }),
  taskDescription: z.string({ required_error: "Task Description is required" }),
});

export const categoryFormSchema = z.object({
  taskStatus: z.string({ required_error: "Category Name is required" }),
  taskPriority: z.string({ required_error: "Category Name is required" }),
});

export const signUpFormSchema = z.object({
  firstName: z.string({ required_error: "First Name is required" }),
  lastName: z.string({ required_error: "Last Name is required" }),
  userName: z.string({ required_error: "Username is required" }),
  emailAddress: z.string().email({ message: "Invalid email address" }),
  password: z.string({ required_error: "Password is required" }),
  confirmPassword: z.string({ required_error: "Confirm password is required" }),
});

export const signInFormSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
});
