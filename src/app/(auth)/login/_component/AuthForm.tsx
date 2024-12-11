"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { loginSchema, registerSchema } from "../_lib/validation";
import { UseFormSetError } from "react-hook-form";

type Field = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
};

export default function AuthForm({
    schema,
    onSubmit,
    fields,
    buttonText,
}: {
    schema: typeof loginSchema | typeof registerSchema;
    onSubmit: (
        setError: UseFormSetError<z.infer<typeof registerSchema>> | UseFormSetError<z.infer<typeof loginSchema>>,
        router: ReturnType<typeof useRouter>,
        data: z.infer<typeof loginSchema> | z.infer<typeof registerSchema>
    ) => Promise<void>;
    fields: Field[];
    buttonText: string;
}) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const router = useRouter();

    return (
        <form
            onSubmit={handleSubmit((data) => onSubmit(setError, router, data))}
            className="space-y-4"
        >
            {fields.map((field: Field) => (
                <div key={field.name}>
                    <label
                        htmlFor={field.name}
                        className="block text-sm font-[family-name:var(--font-geist-mono)] mb-2"
                    >
                        {field.label}
                    </label>
                    <Input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(
                            field.name as keyof z.infer<typeof schema>,
                        )}
                        className="w-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#383838] dark:focus:ring-[#ccc]"
                    />
                    {errors[field.name as keyof typeof errors] && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors[field.name as keyof typeof errors]?.message}
                        </p>
                    )}
                </div>
            ))}
            {errors?.root?.server?.message && (
                <p className="mt-1 text-sm text-red-600">
                    {errors?.root?.server?.message}
                </p>
            )}
            <Button type="submit" className="w-full h-10 sm:h-12">
                {buttonText}
            </Button>
        </form>
    );
}
