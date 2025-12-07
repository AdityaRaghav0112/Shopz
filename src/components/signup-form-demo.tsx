"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface AuthFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  type: "signup" | "login";            // 🔥 use same component for both
  onSubmit: (data: AuthFormData) => Promise<void> | void;
}

export default function SignupFormDemo({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState<AuthFormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const isSignup = type === "signup";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await onSubmit(formData); // 🔥 delegate actual logic to parent
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {isSignup ? "Create an Account" : "Welcome Back"}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        {isSignup
          ? "Sign up to Shopz and start your journey!"
          : "Login to continue shopping."}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* SIGNUP ONLY — FIRST & LAST NAME */}
        {isSignup && (
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
        )}

        {/* EMAIL */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {/* PASSWORD */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {/* SUBMIT BUTTON */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br 
          from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
          dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Please wait..."
            : isSignup
            ? "Sign up →"
            : "Login →"}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full 
      bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 
      transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 
      bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 
      blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
