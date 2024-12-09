"use client";
import { z } from "zod";
import { registerSchema } from "../_lib/validation";

export const handleRegister = async (data: z.infer<typeof registerSchema>) => {
    try {
        console.log("Registering user:", data);

        const response = await fetch('/api/auth/register', {
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
    }
};
