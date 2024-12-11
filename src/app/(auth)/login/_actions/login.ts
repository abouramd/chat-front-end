"use client";
import { z } from "zod";
import { loginSchema } from "../_lib/validation";
import { useRouter } from "next/navigation";
import { UseFormSetError } from "react-hook-form";

export const handleLogin = async (
    setError: UseFormSetError<z.infer<typeof loginSchema>>,
    router: ReturnType<typeof useRouter>,
    data: z.infer<typeof loginSchema>,
) => {
    try {
        setError("root.server", {message: ""});
        console.log("login data", data);

        const response = await fetch("/api/auth/login", {
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

        if (result.success) {
            router.push("/chat");
        } else {
            setError("root.server", result);
        }
    } catch (err) {
        console.log("Something went wrong:", err);
        setError("root.server", {
            message: "Something went wrong. Please try again later.",
        });
    }
};
