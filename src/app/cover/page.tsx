"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CoverPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = () => {
    setIsLoading(true);
    router.push("/home");
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Logo/Title */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight animate-pulse-slow">
          SPIIN
        </h1>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          disabled={isLoading}
          className="group relative px-12 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-bold text-lg tracking-wider hover:bg-white/20 hover:border-white/50 transition-all duration-300 disabled:opacity-50"
        >
          <span className="relative z-10">
            {isLoading ? "LOADING..." : "ENTER"}
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>

        {/* Optional tagline */}
        <p className="mt-6 text-white/60 text-sm tracking-widest uppercase">
          Discover the Sound of Africa
        </p>
      </div>
    </div>
  );
}