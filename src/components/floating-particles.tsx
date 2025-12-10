"use client";

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  depth: number;
}

// Deterministic pseudo-random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Create initial particles with deterministic values
    const createParticles = () => {
      const newParticles: Particle[] = [];
      // Use a fixed count initially, then adjust if needed
      const particleCount = 20; // Fixed count to avoid hydration mismatch

      for (let i = 0; i < particleCount; i++) {
        const seed = i + 1;
        newParticles.push({
          id: i,
          x: seededRandom(seed) * 100, // Percentage position
          y: seededRandom(seed + 100) * 100,
          size: seededRandom(seed + 200) * 40 + 20, // 20-60px rings
          speedX: (seededRandom(seed + 300) - 0.5) * 0.3, // Very slow movement
          speedY: (seededRandom(seed + 400) - 0.5) * 0.3,
          opacity: seededRandom(seed + 500) * 0.15 + 0.05, // 0.05-0.2 opacity (more visible but still subtle)
          depth: seededRandom(seed + 600) * 0.5 + 0.5, // 0.5-1 scale for depth
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Animation loop
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    };

    const interval = setInterval(animateParticles, 100); // Slow animation

    return () => clearInterval(interval);
  }, [isMounted]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full border border-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * particle.depth}px`,
            height: `${particle.size * particle.depth}px`,
            opacity: particle.opacity * particle.depth,
            transform: `translate(-50%, -50%) scale(${particle.depth})`,
            borderWidth: `${Math.max(1, particle.depth * 1.5)}px`,
            boxShadow: `0 0 ${particle.size * 0.4}px rgba(255, 255, 255, ${particle.opacity * 0.5})`,
            animation: `float ${15 + seededRandom(particle.id + 700) * 10}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Add some CSS keyframes for subtle floating */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) scale(var(--depth, 1)) translateY(0px);
          }
          100% {
            transform: translate(-50%, -50%) scale(var(--depth, 1)) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}