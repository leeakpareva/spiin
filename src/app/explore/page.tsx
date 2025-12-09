import SectionHeader from "@/components/section-header";
import ContentCarousel from "@/components/content-carousel";
import BottomNav from "@/components/bottom-nav";
import IntroAnimation from "@/components/scroll-morph-hero";
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
      {/* Hero section with scroll morph */}
      <div className="w-full h-screen">
        <IntroAnimation />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-6">

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