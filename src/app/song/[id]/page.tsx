"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePayment } from "@/lib/payment-context";
import { songDetails } from "@/lib/mockData";
import PaymentModal from "@/components/payment/payment-modal";

export default function SongPage() {
  const params = useParams();
  const { addToCart } = usePayment();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const song = songDetails.song1; // In real app, would fetch based on params.id

  const handleBuyNow = () => {
    setShowPaymentModal(true);
  };

  const handleAddToCart = () => {
    addToCart({
      id: song.id,
      title: song.title,
      artist: song.artist,
      price: song.price,
      imageUrl: song.imageUrl,
      type: "song"
    });
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: Image and Preview */}
            <div className="space-y-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-800">
                <Image
                  src={song.imageUrl}
                  alt={song.title}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Play button overlay */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity hover:bg-black/50"
                >
                  <div className="rounded-full bg-brand-accent p-6 shadow-2xl shadow-brand-accent/30">
                    <svg className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      {isPlaying ? (
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </svg>
                  </div>
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-brand-800/50 p-4">
                <h3 className="mb-3 text-sm font-semibold">Preview</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      {isPlaying ? (
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </svg>
                  </button>
                  <div className="flex-1">
                    <div className="h-1 rounded-full bg-white/10">
                      <div className="h-1 w-1/3 rounded-full bg-brand-accent" />
                    </div>
                  </div>
                  <span className="text-xs text-white/60">{song.duration}</span>
                </div>
              </div>
            </div>

            {/* Right: Details and Purchase */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-semibold text-brand-accent">
                    {song.genre}
                  </span>
                  <span className="text-xs text-white/60">
                    Released {song.releaseDate}
                  </span>
                </div>
                
                <h1 className="mb-2 text-3xl font-bold">{song.title}</h1>
                
                <Link 
                  href={`/artist/${song.artistId}`}
                  className="text-lg text-white/70 hover:text-brand-accent transition-colors"
                >
                  by {song.artist}
                </Link>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                {song.description}
              </p>

              {/* Price and Purchase */}
              <div className="space-y-4 rounded-2xl border border-white/10 bg-brand-800/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60">Price</p>
                    <p className="text-2xl font-bold">${song.price.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60">Goes directly to</p>
                    <p className="text-sm font-semibold text-brand-accent">{song.artist}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 rounded-full bg-gradient-to-r from-brand-accent to-emerald-500 py-3 text-sm font-semibold text-black shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all hover:scale-105"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>

                <p className="text-center text-xs text-white/50">
                  ✓ Instant delivery · ✓ 100% to artist · ✓ Lifetime access
                </p>
              </div>

              {/* Credits */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold">Credits</h3>
                <div className="space-y-1.5 text-xs text-white/60">
                  {song.credits.map((credit, index) => (
                    <p key={index}>{credit}</p>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="flex gap-3">
                <button className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </button>
                <button className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-2.796 0-5.29 1.28-6.716 3.284m9.032 4.026a3 3 0 10-5.632-2.684m0 2.684a3 3 0 105.632 2.684" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          item={{
            id: song.id,
            title: song.title,
            artist: song.artist,
            price: song.price,
            imageUrl: song.imageUrl,
            type: "song"
          }}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </>
  );
}