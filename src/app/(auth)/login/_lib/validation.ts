import { z } from "zod";

// Login Schema
export const loginSchema = z.object({
  username: z
    .string()
    .min(6, "must be at least 6 characters")
    .nonempty("Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Register Schema
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "must be at least 3 characters")
      .nonempty("name is required"),
    username: z
      .string()
      .min(6, "must be at least 6 characters")
      .nonempty("Username is required"),
    email: z.string().email("Invalid email").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
