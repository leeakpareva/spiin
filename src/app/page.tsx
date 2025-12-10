"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import FloatingParticles from "@/components/floating-particles";

export default function CoverPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play background music when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Autoplay blocked");
      });
    }
  }, []);

  const handleEnter = () => {
    setIsLoading(true);
    // Fade out audio before transitioning
    if (audioRef.current) {
      audioRef.current.pause();
    }
    router.push("/subscribe");
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/Wahala 4.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

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