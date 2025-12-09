"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock signup - in development, just store in localStorage
    const newUser = {
      email: formData.email,
      name: formData.name,
      isAuthenticated: true
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    // Mock adding to users list (in real app, this would be backend)
    const existingUsers = JSON.parse(localStorage.getItem("mockUsers") || "[]");
    existingUsers.push({
      email: formData.email,
      password: formData.password,
      name: formData.name
    });
    localStorage.setItem("mockUsers", JSON.stringify(existingUsers));

    // Redirect to home page
    router.push("/");
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-brand-800/60 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl shadow-black/50 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Join SPIIN</h1>
            <p className="text-white/60">Create your account to start listening</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-brand-700/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-brand-700/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-brand-700/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-brand-700/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                placeholder="Confirm your password"
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
              {isLoading ? "Creating account..." : "Sign up"}
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
              <span className="text-white/60">Already have an account? </span>
              <Link href="/login" className="text-brand-accent hover:underline font-semibold">
                Log in
              </Link>
            </div>

            <p className="text-xs text-center text-white/40">
              By signing up, you agree to SPIIN's Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}