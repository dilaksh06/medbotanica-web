"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.replace("/login"); // redirect to login if not logged in
    }
  }, [router]);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to MedBotanica 🌿</h1>
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          router.push("/login");
        }}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
