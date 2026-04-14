"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const correctUsername = process.env.AUTH_USERNAME;
  const correctPassword = process.env.AUTH_PASSWORD;

  if (username === correctUsername && password === correctPassword) {
    // Simple session management for "simple security"
    const cookieStore = await cookies();
    cookieStore.set("session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    redirect("/planning");
  } else {
    return { error: "Invalid credentials" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect("/login");
}
