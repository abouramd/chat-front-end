"use client";
import { z } from "zod";
import { registerSchema } from "../_lib/validation";
import { UseFormSetError } from "react-hook-form";
import { useRouter } from "next/navigation";

export const handleRegister = async (
    setError: UseFormSetError<z.infer<typeof registerSchema>>,
    router: ReturnType<typeof useRouter>,
    data: z.infer<typeof registerSchema>,
) => {
    try {
        setError("root.server", {  message: "" });
        console.log("Registering user:", data);

        const response = await fetch("/api/auth/register", {
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
        setError("root.server", result);
    } catch (err) {
        console.error("Something went wrong:", err);
        setError("root.server", {
            message: "Something went wrong. Please try again later.",
        });
    }
};
