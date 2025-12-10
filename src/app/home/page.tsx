"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ScrollableSection from "@/components/scrollable-section";
import MiniMusicPlayer from "@/components/mini-music-player";
import { artistsData } from "@/lib/artistData";

// Convert artistData to array format for home page with all 20 artists
const artists = Object.values(artistsData).map(artist => ({
  id: artist.id,
  name: artist.name,
  role: "Artist",
  image: artist.image,
  followers: artist.followers
}));

const popularSongs = [
  {
    title: "Like That (bomboclat)",
    artists: "Shallipopi, Wizkid",
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "SNOKONOKO",
    artists: "Al Xapo, Benzoo, EeQue",
    cover: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "2Factor",
    artists: "Young Jonn, Asake, Focalistic",
    cover: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Trap Ian je",
    artists: "Tml Vibez",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Give U",
    artists: "PsychoYP, Mavo, King Carsley",
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Galorizzy",
    artists: "Galorizzy, Davido, Mavo",
    cover: "https://images.unsplash.com/photo-1513861810402-53342e7a83af?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Intentions",
    artists: "FAVE, Urban Vibes",
    cover: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  // Video sources array
  const videos = ["/Rema/dark.mp4", "/Fireboy DML/alive.mp4"];

  // Filter artists based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    return artists.filter(artist =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5); // Limit to 5 results
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      router.push(`/artist/${searchResults[0].id}`);
      setSearchQuery("");
      setShowSearchResults(false);
    }
  };

  const handleArtistSelect = (artistId: string) => {
    router.push(`/artist/${artistId}`);
    setSearchQuery("");
    setShowSearchResults(false);
  };

  // Handle video ended event to switch to next video
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Effect to update video source when currentVideoIndex changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video with new source
    }
  }, [currentVideoIndex]);

  return (
    <div className="bg-brand-900">
      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 lg:pt-10">
        {/* Main content */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-white/5 bg-brand-800/60 p-3 shadow-lg shadow-black/25">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-brand-700 hover:bg-brand-600">
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20c0-2.21 2.686-4 6-4s6 1.79 6 4" />
                  </svg>
                </button>
                <Link
                  href="/"
                  className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black shadow-md shadow-black/30"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 1.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414L3 10.414V17a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-8-8z" />
                  </svg>
                </Link>
              </div>

              <div className="relative flex-1">
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 rounded-full bg-brand-700 px-3 py-2 text-sm ring-1 ring-white/10">
                  <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for artists..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSearchResults(true);
                    }}
                    onFocus={() => setShowSearchResults(true)}
                    onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/60 outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/80 text-white hover:bg-brand-500/70"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>

                {/* Search Results Dropdown */}
                {showSearchResults && searchQuery && searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-brand-800 border border-white/10 rounded-xl shadow-xl z-50">
                    {searchResults.map((artist) => (
                      <button
                        key={artist.id}
                        onClick={() => handleArtistSelect(artist.id)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-brand-700 first:rounded-t-xl last:rounded-b-xl transition-colors"
                      >
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="text-sm font-medium text-white">{artist.name}</div>
                          <div className="text-xs text-white/60">{artist.followers} followers</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {showSearchResults && searchQuery && searchResults.length === 0 && (
                  <div className="absolute top-full mt-2 w-full bg-brand-800 border border-white/10 rounded-xl shadow-xl z-50 p-3">
                    <div className="text-sm text-white/60 text-center">No artists found</div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Link href="/install" className="text-white/70 hover:text-white">
                  Install App
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-80 lg:h-96 xl:h-[400px]">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay for text visibility */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8 lg:px-12">
              <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-brand-accent/20 to-emerald-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-brand-accent backdrop-blur-sm w-fit">
                Featured
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                SPIIN Spotlight
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Discover the latest drops and support your favorite artists directly. Build playlists, follow music, and stay on top of the culture.
              </p>
            </div>
          </div>

          <ScrollableSection
            title="Artists"
            showAllHref="/artists"
          >
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artist/${artist.id}`}
                className="group w-36 shrink-0 space-y-3 rounded-2xl bg-brand-800/40 p-4 text-center shadow-lg shadow-black/25 ring-1 ring-white/5 hover:bg-brand-800/70 cursor-pointer"
              >
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/10">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold">{artist.name}</div>
                  <div className="text-xs text-white/60">{artist.followers} followers</div>
                </div>
              </Link>
            ))}
          </ScrollableSection>

          <ScrollableSection
            title="Popular Songs"
            showAllHref="/explore"
          >
            {popularSongs.map((song) => (
              <div
                key={song.title}
                className="group w-44 shrink-0 space-y-3 rounded-2xl bg-brand-800/40 p-3 shadow-lg shadow-black/25 ring-1 ring-white/5 hover:bg-brand-800/70 cursor-pointer"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <Image
                    src={song.cover}
                    alt={song.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="176px"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                </div>
                <div className="space-y-1 px-1">
                  <div className="text-sm font-semibold leading-tight line-clamp-2">{song.title}</div>
                  <div className="text-xs text-white/60 leading-tight line-clamp-2">{song.artists}</div>
                </div>
              </div>
            ))}
          </ScrollableSection>
        </div>
      </div>

      {/* Mini Music Player */}
      <MiniMusicPlayer audioSrc="/Wahala 4.mp3" title="Wahala 4" />
    </div>
  );
}
