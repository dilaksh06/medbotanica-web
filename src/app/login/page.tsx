"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Fake login for now
    if (email === "abc@gmail.com" && password === "abc123") {
      // Save token in cookies
      Cookies.set("authToken", "mysecrettoken", { expires: 1 }); // expires in 1 day
      router.push("/home");
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[var(--color-surface)] rounded-lg shadow-md p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-semibold mb-6">Login to MedBotanica</h2>

        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full p-3 mb-4 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          className="w-full p-3 mb-6 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <button
          type="submit"
          className="w-full bg-[var(--color-primary)] text-white py-3 rounded-md hover:bg-[var(--color-primary-dark)] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
