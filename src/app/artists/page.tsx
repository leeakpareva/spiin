import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/section-header";
import { artistsData } from "@/lib/artistData";
import BottomNav from "@/components/bottom-nav";

export default function ArtistsPage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">Artists on SPIIN</h1>
          <p className="text-white/70">
            Discover independent creators and support them directly.
            Every purchase goes straight to the artist.
          </p>
        </div>

        {/* Featured Artists */}
        <div className="mb-10">
          <SectionHeader
            title="Featured Artists"
            description="Hand-picked creators making waves"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.values(artistsData).map((artist) => (
              <Link
                key={artist.id}
                href={`/artist/${artist.id}`}
                className="group space-y-4"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-800/30 ring-1 ring-white/5 hover:ring-white/20 transition-all">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {artist.verified && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="font-semibold text-sm mb-1">{artist.name}</div>
                      <div className="text-xs text-white/70">{artist.followers} followers</div>
                      <div className="text-xs text-white/50">{artist.genre}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <SectionHeader title="Browse by Genre" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Hip-Hop", count: "1.2K artists", color: "from-purple-500 to-purple-700" },
              { name: "Electronic", count: "890 artists", color: "from-blue-500 to-blue-700" },
              { name: "R&B", count: "756 artists", color: "from-pink-500 to-pink-700" },
              { name: "Indie", count: "1.1K artists", color: "from-green-500 to-green-700" },
              { name: "Jazz", count: "432 artists", color: "from-yellow-500 to-yellow-700" },
              { name: "Rock", count: "678 artists", color: "from-red-500 to-red-700" },
              { name: "Pop", count: "943 artists", color: "from-indigo-500 to-indigo-700" },
              { name: "Folk", count: "321 artists", color: "from-teal-500 to-teal-700" }
            ].map((genre) => (
              <button
                key={genre.name}
                className="group relative overflow-hidden rounded-xl bg-brand-800/30 p-4 text-left hover:bg-brand-800/50 transition-all hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative">
                  <p className="font-semibold">{genre.name}</p>
                  <p className="text-xs text-white/60">{genre.count}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Artist Stats */}
        <div className="mb-8">
          <SectionHeader
            title="Platform Statistics"
            description="Growing community of independent creators"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-brand-800/30 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">{Object.keys(artistsData).length}</div>
              <div className="text-sm text-white/60">Featured Artists</div>
            </div>
            <div className="bg-brand-800/30 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">
                {Object.values(artistsData).reduce((total, artist) => total + artist.recentSongs.length, 0)}+
              </div>
              <div className="text-sm text-white/60">Songs Available</div>
            </div>
            <div className="bg-brand-800/30 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">
                {Object.values(artistsData).reduce((total, artist) => total + artist.albums.length, 0)}
              </div>
              <div className="text-sm text-white/60">Albums & EPs</div>
            </div>
            <div className="bg-brand-800/30 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">100%</div>
              <div className="text-sm text-white/60">Direct to Artists</div>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}