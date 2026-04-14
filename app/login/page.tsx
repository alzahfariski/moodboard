"use client";

import { useState } from "react";
import { login } from "@/lib/actions/auth";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-taupe-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-taupe-200/50 border border-taupe-100">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl text-taupe-800 mb-2">Welcome Back</h1>
          <p className="text-taupe-600 font-body">Sign in to manage your wedding planning</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-taupe-800 ml-1">Username</label>
            <input
              name="username"
              type="text"
              required
              className="w-full px-5 py-4 bg-taupe-50 border border-taupe-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-taupe-800"
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-taupe-800 ml-1">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-5 py-4 bg-taupe-50 border border-taupe-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all text-taupe-800"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl shadow-lg shadow-purple-200 transition-all disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
