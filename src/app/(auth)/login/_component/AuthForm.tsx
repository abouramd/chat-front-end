"use client";

import { SubmitErrorHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

export default function AuthForm({ schema, onSubmit, fields, buttonText }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  ;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium">
            {field.label}
          </label>
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            className="mt-1 block w-full"
          />
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">{errors[field.name]?.message}</p>
          )}
        </div>
      ))}
      {errors?.root?.server?.message && <p>{errors?.root?.server?.message}</p>}
      <Button type="submit" className="w-full">
        {buttonText}
      </Button>
    </form>
  );
}
