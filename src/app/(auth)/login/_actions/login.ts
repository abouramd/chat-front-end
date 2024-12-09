"use client";
import { z } from "zod";
import { loginSchema } from "../_lib/validation";

export const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
        console.log("login data", data);
                
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                credentials: "include",
            },
            body: JSON.stringify(data),
        });

        console.log("Responce status", response.status);

        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error("Something went wrong:", err);
        // throw new Error("Something went wrong");
    }
};
