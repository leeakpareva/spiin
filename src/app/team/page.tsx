import Link from "next/link";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-brand-900 to-emerald-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-emerald-500/5" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-6 py-2 text-sm text-orange-300">
              Leadership team
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-orange-200 to-amber-300 bg-clip-text text-transparent">
              Meet the Team
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Built by artists, executives, and creators who understand the music industry from the inside out.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-32">

          {/* M.I Abaga - Founder */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-orange-500/20 to-emerald-500/20 border border-white/10 backdrop-blur-sm overflow-hidden">
                <Image
                  src="/mi.JPEG"
                  alt="M.I Abaga"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-accent text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Founder
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Founded by M.I Abaga</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  SPIIN is founded by Jude "M.I" Abaga, one of Africa's most respected hip-hop artists and music executives.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  M.I Abaga is a Nigerian rapper, songwriter, producer and former CEO of Chocolate City, where he helped shape the careers of major artists such as Blaqbonez and CKay.
                </p>

                <p className="text-white/80 leading-relaxed">
                  His award-winning discography includes Talk About It, MI 2: The Movie, The Chairman, Yxng Dxnzl, and The Guy, projects that reshaped the sound and lyrical ambition of African hip hop. He has earned multiple honours including MTV Africa Music Awards, The Headies, and international recognition from BET.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-brand-accent">M.I brings to SPIIN:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white">Artist Empathy</strong>
                      <span className="text-white/70"> - lived experience with royalties, contracts, and industry barriers</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white">Executive Experience</strong>
                      <span className="text-white/70"> - years leading one of Africa's biggest labels</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white">Cultural Influence</strong>
                      <span className="text-white/70"> - global impact as a storyteller and advocate for young creatives</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/20">
                <p className="text-lg font-semibold text-center text-white/90">
                  SPIIN is his answer to a long-standing question: <br />
                  <span className="text-brand-accent">"What if a streaming platform was built from the artist's side of the table?"</span>
                </p>
              </div>
            </div>
          </section>

          {/* Chopstix - Creative Director */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Creative Direction by Chopstix</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  SPIIN's creative identity and cultural vision are shaped by Chopstix (Olagundoye Olumide), one of Nigeria's most influential record producers, known for his genre-shaping work across Afrobeats and hip-hop.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  As a producer, Chopstix has collaborated with leading artists including Ice Prince, Yung L, M.I Abaga, Burna Boy and many more, contributing to some of the most recognisable sounds in modern African music.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">His experience spans:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">Music production and sonic architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">Artist development and industry strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">Creative leadership across Africa's vibrant music landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">Global influence through collaborations and culturally impactful records</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">At SPIIN, Chopstix shapes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">The brand identity and visual language</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">The cultural positioning of the platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">The experience design behind artist pages, drops, and storytelling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">The creative strategy that ensures SPIIN reflects real African artistry and global taste</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-emerald-500/20 to-brand-accent/20 border border-white/10 backdrop-blur-sm overflow-hidden">
                <Image
                  src="/choperstix.JPEG"
                  alt="Chopstix"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Creative Director
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">Built by creators, for creators</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              With deep industry experience and artistic insight, our team understands what artists really need to thrive in the modern music economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:scale-105"
              >
                Learn More About SPIIN
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:border-white/40"
              >
                Join the Platform
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}