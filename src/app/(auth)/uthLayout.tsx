"use client";

import React, { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)] px-4">
      <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-8 max-w-md w-full">
        {children}
      </div>
    </div>
  );
}
