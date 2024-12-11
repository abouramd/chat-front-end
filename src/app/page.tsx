
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Login to Chat App
        </h1>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-[family-name:var(--font-geist-mono)] mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#383838] dark:focus:ring-[#ccc]"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-[family-name:var(--font-geist-mono)] mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#383838] dark:focus:ring-[#ccc]"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button className="w-full h-10 sm:h-12">Login</Button>
        </form>
        <p className="text-sm text-center sm:text-left text-black/[.6] dark:text-white/[.7]">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-[#0070f3] hover:underline hover:underline-offset-4"
          >
            Register here
          </a>
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
