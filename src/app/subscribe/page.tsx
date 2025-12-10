"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePayment } from "@/lib/payment-context";
import { Check, Star, Music, Calendar, MessageCircle, Shield, Gift } from "lucide-react";

export default function SubscribePage() {
  const router = useRouter();
  const { availableSubscriptions } = usePayment();
  const [selectedPlan, setSelectedPlan] = useState<string>("free");

  const handleContinue = () => {
    if (selectedPlan === "free") {
      router.push("/login?plan=free");
    } else {
      router.push("/login?plan=premium");
    }
  };

  const handleSkip = () => {
    router.push("/login?plan=free");
  };

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("SPIIN Events")) return <Calendar size={12} className="text-purple-500" />;
    if (feature.includes("messaging")) return <MessageCircle size={12} className="text-blue-500" />;
    if (feature.includes("support")) return <Shield size={12} className="text-green-500" />;
    if (feature.includes("merchandise")) return <Gift size={12} className="text-orange-500" />;
    return <Check size={12} className="text-green-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Choose Your Experience
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Start with free access or unlock premium features to connect deeper with your favorite artists
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {availableSubscriptions.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedPlan === plan.id
                  ? plan.id === 'premium'
                    ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 shadow-2xl shadow-yellow-500/20'
                    : 'bg-gradient-to-br from-brand-600/40 to-brand-700/40 border-2 border-brand-accent shadow-2xl shadow-brand-accent/20'
                  : 'bg-brand-800/60 border border-white/10 hover:border-white/30'
              }`}
            >
              {plan.id === 'premium' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star size={14} fill="currentColor" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Music className={`${plan.id === 'premium' ? 'text-yellow-400' : 'text-brand-accent'}`} size={24} />
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-white/60 text-sm">/ month</span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {getFeatureIcon(feature)}
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {selectedPlan === plan.id && (
                <div className="absolute top-4 right-4">
                  <div className={`w-6 h-6 rounded-full ${
                    plan.id === 'premium' ? 'bg-yellow-500' : 'bg-brand-accent'
                  } flex items-center justify-center`}>
                    <Check size={14} className="text-black" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <button
            onClick={handleContinue}
            className={`w-full max-w-md mx-auto py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 ${
              selectedPlan === 'premium'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 shadow-lg shadow-yellow-500/30'
                : 'bg-gradient-to-r from-brand-accent to-red-500 text-white hover:from-red-500 hover:to-orange-500 shadow-lg shadow-brand-accent/30'
            }`}
          >
            Continue with {availableSubscriptions.find(p => p.id === selectedPlan)?.name}
          </button>

          <div className="text-center mt-4">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => router.push(`/signup?plan=${selectedPlan}`)}
                className="text-brand-accent hover:text-white transition-colors"
              >
                Sign up here
              </button>
            </p>
          </div>

          <button
            onClick={handleSkip}
            className="block mx-auto text-white/60 hover:text-white transition-colors text-sm"
          >
            Skip for now, continue with free
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-xs mb-4">Trusted by 2M+ music lovers worldwide</p>
          <div className="flex justify-center items-center gap-6 text-white/20">
            <div className="text-xs">✓ Cancel anytime</div>
            <div className="text-xs">✓ No hidden fees</div>
            <div className="text-xs">✓ Secure payments</div>
          </div>
        </div>
      </div>
    </div>
  );
}