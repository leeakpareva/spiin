"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Mock user data for development
const mockUsers = [
  { email: "demo@spiin.com", password: "demo123", name: "Demo User" },
  { email: "user@example.com", password: "password", name: "John Doe" },
  { email: "admin@spiin.com", password: "admin123", name: "Admin User" }
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock authentication
    const user = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      // Store user data in localStorage (for development only)
      localStorage.setItem("user", JSON.stringify({
        email: user.email,
        name: user.name,
        isAuthenticated: true
      }));

      // Redirect to home page
      router.push("/");
    } else {
      setError("Invalid email or password");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-brand-800/60 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl shadow-black/50 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-white/60">Log in to continue to SPIIN</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-brand-700/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                placeholder="demo@spiin.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-brand-700/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-900/30"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-brand-800/60 text-white/60">Or</span>
              </div>
            </div>

            <div className="text-center text-sm">
              <span className="text-white/60">Don't have an account? </span>
              <Link href="/signup" className="text-brand-accent hover:underline font-semibold">
                Sign up for SPIIN
              </Link>
            </div>

            <div className="bg-brand-700/30 rounded-lg p-4 border border-white/5">
              <p className="text-xs text-white/50 mb-2">Demo accounts for testing:</p>
              <ul className="space-y-1 text-xs text-white/70">
                <li>• demo@spiin.com / demo123</li>
                <li>• user@example.com / password</li>
                <li>• admin@spiin.com / admin123</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}