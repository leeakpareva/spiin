"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { artistDetails } from "@/lib/mockData";
import { usePayment } from "@/lib/payment-context";

export default function ArtistPage() {
  const params = useParams();
  const { addToCart } = usePayment();
  const artist = artistDetails.artist1; // In real app, would fetch based on params.id

  const handleAddToCart = (songId: string, title: string, price: number) => {
    addToCart({
      id: songId,
      title,
      artist: artist.name,
      price,
      imageUrl: artist.imageUrl,
      type: "song"
    });
  };

  return (
    <div className="min-h-screen">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={artist.coverUrl}
          alt={artist.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 -mt-20 relative">
        <div className="flex flex-col md:flex-row gap-6 items-end mb-8">
          {/* Artist Avatar */}
          <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-2xl border-4 border-brand-900 shadow-xl">
            <Image
              src={artist.imageUrl}
              alt={artist.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">{artist.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span>{artist.stats.fans} fans</span>
              <span>·</span>
              <span>{artist.stats.monthlyListeners} monthly listeners</span>
              <span>·</span>
              <span>{artist.stats.songs} songs</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full bg-gradient-to-r from-brand-accent to-emerald-500 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all">
              Follow
            </button>
            <button className="rounded-full border border-white/20 px-6 py-2 text-sm font-semibold hover:bg-white/10 transition-all">
              Tip Artist
            </button>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-brand-800/50 p-6">
          <h2 className="mb-3 text-lg font-semibold">About</h2>
          <p className="text-sm text-white/70 leading-relaxed">{artist.bio}</p>
          
          <div className="mt-4 flex gap-4">
            {artist.socials.instagram && (
              <Link 
                href={`https://instagram.com/${artist.socials.instagram.replace('@', '')}`}
                className="text-xs text-white/60 hover:text-brand-accent transition-colors"
                target="_blank"
              >
                Instagram
              </Link>
            )}
            {artist.socials.twitter && (
              <Link 
                href={`https://twitter.com/${artist.socials.twitter.replace('@', '')}`}
                className="text-xs text-white/60 hover:text-brand-accent transition-colors"
                target="_blank"
              >
                X (Twitter)
              </Link>
            )}
            {artist.socials.spotify && (
              <Link 
                href={`https://open.spotify.com/artist/${artist.socials.spotify}`}
                className="text-xs text-white/60 hover:text-brand-accent transition-colors"
                target="_blank"
              >
                Spotify
              </Link>
            )}
          </div>
        </div>

        {/* Top Songs */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Top Songs</h2>
          <div className="space-y-2">
            {artist.topSongs.map((song, index) => (
              <div
                key={song.id}
                className="group flex items-center gap-4 rounded-xl bg-brand-800/30 p-3 hover:bg-brand-800/50 transition-colors"
              >
                <span className="text-sm text-white/40 w-6">{index + 1}</span>
                
                <Link 
                  href={`/song/${song.id}`}
                  className="flex-1 hover:text-brand-accent transition-colors"
                >
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <p className="text-xs text-white/60">{song.plays} plays</p>
                  </div>
                </Link>

                <span className="text-sm text-white/60">{song.duration}</span>
                
                <span className="font-semibold">${song.price}</span>
                
                <button
                  onClick={() => handleAddToCart(song.id, song.title, song.price)}
                  className="opacity-0 group-hover:opacity-100 rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-black transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-12 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-brand-900 to-brand-800/50 p-6">
          <h3 className="mb-3 text-lg font-semibold">Support {artist.name}</h3>
          <p className="mb-4 text-sm text-white/70">
            Every purchase goes directly to the artist. Your support helps them create more amazing music.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            <button className="rounded-xl bg-white/5 p-4 text-left hover:bg-white/10 transition-colors">
              <p className="text-2xl mb-1">☕</p>
              <p className="text-sm font-medium">Buy a Coffee</p>
              <p className="text-xs text-white/60">$5</p>
            </button>
            <button className="rounded-xl bg-white/5 p-4 text-left hover:bg-white/10 transition-colors">
              <p className="text-2xl mb-1">🎵</p>
              <p className="text-sm font-medium">Support Album</p>
              <p className="text-xs text-white/60">$25</p>
            </button>
            <button className="rounded-xl bg-white/5 p-4 text-left hover:bg-white/10 transition-colors">
              <p className="text-2xl mb-1">🌟</p>
              <p className="text-sm font-medium">Become a Patron</p>
              <p className="text-xs text-white/60">$50/mo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}