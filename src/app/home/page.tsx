import Image from "next/image";
import Link from "next/link";
import ScrollableSection from "@/components/scrollable-section";
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
  return (
    <div className="bg-brand-900">
      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 lg:pt-10">
        {/* Main content */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-white/5 bg-brand-800/60 p-3 shadow-lg shadow-black/25">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 hover:bg-brand-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20c0-2.21 2.686-4 6-4s6 1.79 6 4" />
                  </svg>
                </button>
                <Link
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md shadow-black/30"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 1.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414L3 10.414V17a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-8-8z" />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-1 items-center gap-3 rounded-full bg-brand-700 px-3 py-2 text-sm ring-1 ring-white/10">
                <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="What do you want to play?"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/60 outline-none"
                />
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/80 text-white hover:bg-brand-500/70">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v2H3V5z" />
                    <path fillRule="evenodd" d="M4 9h12v4a2 2 0 01-2 2H6a2 2 0 01-2-2V9zm3 3a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Link href="/install" className="hidden text-white/70 hover:text-white md:inline">
                  Install App
                </Link>
                <Link href="/signup" className="hidden font-semibold text-white hover:text-brand-accent md:inline">
                  Sign up
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 font-semibold text-white hover:border-white/40"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 shadow-2xl shadow-orange-900/30">
            <div className="grid items-center gap-6 p-6 md:grid-cols-[1.2fr,1fr] md:p-8">
              <div className="space-y-4 text-white">
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Featured</div>
                <h1 className="text-4xl font-black leading-tight sm:text-5xl">SPIIN Spotlight</h1>
                <p className="max-w-2xl text-base text-white/85">
                  Discover the latest drops and support your favorite artists directly. Build playlists, follow music, and stay on top of the culture.
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href="/explore" className="rounded-full bg-white px-5 py-2 text-black shadow-md shadow-black/20">
                    Start listening
                  </Link>
                  <Link href="/artists" className="rounded-full border border-white/40 px-5 py-2 text-white hover:bg-white/10">
                    Browse artists
                  </Link>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80 lg:h-96 xl:h-[400px]">
                <Image
                  src="/rema.png"
                  alt="Rema"
                  fill
                  className="object-cover object-center z-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-700/30 to-brand-900/30 z-20" />
              </div>
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
    </div>
  );
}
