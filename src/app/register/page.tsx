"use client";

import { useState } from "react";
import AuthLayout from "../(auth)/uthLayout"; // Adjust path based on your folder structure

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert(`Registering user: ${name} with email: ${email}`);
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-semibold mb-6">Create your account</h2>

      <form onSubmit={handleRegister}>
        <label htmlFor="name" className="block mb-2 font-medium">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="w-full p-3 mb-4 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

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
          placeholder="Enter a strong password"
          className="w-full p-3 mb-4 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <label htmlFor="confirmPassword" className="block mb-2 font-medium">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter your password"
          className="w-full p-3 mb-6 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <button
          type="submit"
          className="w-full bg-[var(--color-primary)] text-white py-3 rounded-md hover:bg-[var(--color-primary-dark)] transition"
        >
          Register
        </button>
      </form>
    </AuthLayout>
  );
}
