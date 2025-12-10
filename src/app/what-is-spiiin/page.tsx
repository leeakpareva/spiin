"use client";

import { useState, useEffect } from "react";

export default function WhatIsSpiiin() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-12 h-96 bg-gray-100 rounded-lg animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-100 rounded animate-pulse" />
            <div className="h-4 bg-gray-100 rounded animate-pulse" />
            <div className="h-4 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Video Section */}
        <div className="mb-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-contain rounded-lg"
          >
            <source src="/Rema/smoking.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-black">
            Rema: The New Blueprint for Global Youth Culture
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            Rema isn't just shaping the sound of a generation - he's redefining what modern African identity looks like. In a world where music, fashion, and digital culture collide, Rema has become one of the few artists who effortlessly moves between all three, setting trends rather than following them.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            From the moment he emerged, his aesthetic was unmistakable: futuristic streetwear, gothic undertones, spiritual symbolism, and bold colour palettes that blend Afrobeats energy with global alt-culture. It's a visual language that young fans worldwide instantly recognise and imitate.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            A Cultural Hybrid
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Rema represents a new hybrid identity: confident, experimental, and unafraid to merge Benin-City roots with anime, trap, skate culture, and high fashion. This fusion has become a blueprint for today's global youth movement - one that values individuality over conformity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            Fashion as a Weapon
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            In fashion, Rema treats clothing like armour. His sleeveless silhouettes, heavy jewellery, and dark palettes build a persona that is both mythical and street. Luxury brands have taken note, seeing him as the face of a new cultural rebellion - an artist who can make avant-garde fashion accessible to millions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            Influence Beyond Music
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Rema's impact extends far beyond the charts. His imagery, hand signs, and "Ravage" aesthetic have evolved into a recognisable cultural signature. TikTok, Instagram, and fan art communities constantly remix his look, solidifying him as a style icon for the digital era.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            The Future Icon
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Rema isn't just participating in culture - he's bending it. In music, visuals, fashion, and attitude, he has become a symbol of a fearless new African wave taking over the world.
          </p>
        </article>
      </div>
    </div>
  );
}