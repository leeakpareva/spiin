import SectionHeader from "@/components/section-header";
import ContentCarousel from "@/components/content-carousel";
import BottomNav from "@/components/bottom-nav";
import {
  discovered,
  trending,
  exclusive,
  powered,
  artists
} from "@/lib/mockData";

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-6">
        {/* Hero section */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-brand-900 via-brand-800/60 to-brand-900 px-6 py-8 md:px-10 md:py-12">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-accent/10 blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow" />
            
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 font-medium">
                Discovered on SPIIN
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Support artists directly.
                <br />
                <span className="gradient-text">Own exclusive music.</span>
              </h1>
              <p className="max-w-xl text-sm text-white/70 leading-relaxed">
                SPIIN is your dark-mode backstage pass. Purchase songs directly from artists,
                unlock early listens, behind-the-scenes footage and live recordings.
                Every purchase goes straight to the creator.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Direct payments
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Exclusive content
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Support artists
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-1 flex-col gap-10 pb-8">
          <section>
            <SectionHeader 
              title="Discovered on SPIIN" 
              description="Fresh drops and exclusive releases from emerging artists"
            />
            <ContentCarousel items={discovered} />
          </section>

          <section>
            <SectionHeader 
              title="Trending right now" 
              actionLabel="See all"
              description="What the SPIIN community is loving"
            />
            <ContentCarousel items={trending} />
          </section>

          <section>
            <SectionHeader 
              title="Exclusive access" 
              description="Limited releases and VIP experiences"
            />
            <ContentCarousel items={exclusive} />
          </section>

          <section>
            <SectionHeader 
              title="Powered by SPIIN" 
              actionLabel="See all"
              description="Curated experiences from our team"
            />
            <ContentCarousel items={powered} />
          </section>

          <section className="mb-4">
            <SectionHeader 
              title="Featured Artists" 
              actionLabel="View all artists"
              description="Discover and support independent creators"
            />
            <ContentCarousel items={artists} />
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}