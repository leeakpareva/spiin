"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { usePayment, Subscription } from "@/lib/payment-context";
import { Check, Star, Music } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [selectedPlan, setSelectedPlan] = useState<string>("free");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const { availableSubscriptions, upgradeSubscription } = usePayment();

  useEffect(() => {
    const plan = searchParams.get('plan') || 'free';
    setSelectedPlan(plan);
  }, [searchParams]);

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

    try {
      // Create account using auth context
      const signupSuccess = await signup(formData.email, formData.password, formData.name);

      if (signupSuccess) {
        // Set subscription plan
        if (selectedPlan === "premium") {
          await upgradeSubscription("premium");
        }

        // Redirect to home page
        router.push("/home");
      } else {
        setError("Account with this email already exists");
      }
    } catch (err) {
      setError("Failed to create account. Please try again.");
    }

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
            <p className="text-white/60">Choose your plan and create your account</p>
          </div>

          {/* Plan Selection */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-white">Choose Your Plan</h3>

            {availableSubscriptions.map((plan: Subscription) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? plan.id === 'premium'
                      ? 'border-yellow-500 bg-yellow-500/10'
                      : 'border-brand-accent bg-brand-accent/10'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.id === 'premium' && (
                  <div className="absolute -top-2 left-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <Star size={10} />
                    POPULAR
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">{plan.name}</h4>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">
                      ${plan.price}
                      {plan.price > 0 && <span className="text-sm font-normal">/month</span>}
                    </div>
                    {plan.price === 0 && <div className="text-xs text-white/60">Forever</div>}
                  </div>
                </div>

                <ul className="space-y-1">
                  {plan.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-white/80">
                      <Check size={12} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 3 && (
                    <li className="text-xs text-white/60">
                      +{plan.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>
            ))}
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
              className={`w-full py-3 px-4 font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                selectedPlan === 'premium'
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600 shadow-yellow-900/30'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-orange-900/30'
              }`}
            >
              {isLoading ? "Creating account..." :
                selectedPlan === 'premium'
                  ? "Start Premium - $10/month"
                  : "Start Free"
              }
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