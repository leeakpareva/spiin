import ContentCarousel from "@/components/content-carousel";
import SectionHeader from "@/components/section-header";
import { artists, discovered, trending } from "@/lib/mockData";
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
          <ContentCarousel items={artists} />
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

        {/* New Artists */}
        <div className="mb-10">
          <SectionHeader 
            title="New to SPIIN"
            description="Fresh talent joining our community"
            actionLabel="See all"
          />
          <ContentCarousel items={discovered.map(item => ({
            ...item,
            type: "artist" as const,
            subtitle: item.subtitle + " · New Artist"
          }))} />
        </div>

        {/* Trending */}
        <div className="mb-8">
          <SectionHeader 
            title="Trending Artists"
            description="Artists gaining momentum this week"
            actionLabel="See all"
          />
          <ContentCarousel items={trending.map(item => ({
            ...item,
            type: "artist" as const,
            subtitle: item.subtitle + " · Trending"
          }))} />
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}