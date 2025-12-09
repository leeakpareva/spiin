import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-brand-900 to-emerald-500/20 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              About SPIIN
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The artist-first music platform where creators own their audience and earn directly
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              SPIIN is a next-generation music platform built for artists first — a place where creators don't just distribute music, but own their audience, earn directly, and build sustainable careers.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Designed as the artist-centred evolution of Spotify, SPIIN blends premium streaming with direct creator monetisation. Fans don't just listen — they tip, subscribe, unlock exclusive drops, and pay artists directly inside the app.
            </p>
          </section>

          {/* What Artists Can Do */}
          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-brand-accent">
              SPIIN gives every artist a space to:
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">✓</span>
                <span className="text-white/80">Share albums, singles, EPs and demos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">✓</span>
                <span className="text-white/80">Host behind-the-scenes content, writing sessions and studio moments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">✓</span>
                <span className="text-white/80">Run paid fan clubs and subscription tiers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">✓</span>
                <span className="text-white/80">Release early-access drops and limited experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent mt-1">✓</span>
                <span className="text-white/80">Receive instant payouts from fans without waiting for royalty cycles</span>
              </li>
            </ul>
          </section>

          {/* Mission */}
          <section className="text-center py-12 space-y-8">
            <h2 className="text-3xl font-bold mb-8">Our mission is simple:</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
                <div className="text-5xl mb-4">💰</div>
                <p className="text-lg font-semibold text-white/90">
                  Turn every play into a possible paycheck.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-brand-accent/10 rounded-2xl p-8 border border-emerald-500/20">
                <div className="text-5xl mb-4">🤝</div>
                <p className="text-lg font-semibold text-white/90">
                  Turn every fan into a stakeholder in the artist's journey.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-brand-800/50 to-brand-700/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Artists Choose SPIIN</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-accent">100%</div>
                <div className="text-sm text-white/60 mt-2">Direct to Artist</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-accent">0%</div>
                <div className="text-sm text-white/60 mt-2">Platform Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-accent">Instant</div>
                <div className="text-sm text-white/60 mt-2">Payouts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-accent">Forever</div>
                <div className="text-sm text-white/60 mt-2">Own Your Fans</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Ready to join the revolution?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you're an artist ready to take control of your career or a fan who wants to support creators directly, SPIIN is your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-900/30"
              >
                Join SPIIN Today
              </Link>
              <Link
                href="/artists"
                className="inline-block px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Explore Artists
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-white/10 pt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
              <p className="text-white/60 mb-6">
                Have questions? Want to partner with us? We'd love to hear from you.
              </p>
              <div className="flex justify-center gap-6">
                <a href="mailto:hello@spiin.com" className="text-brand-accent hover:text-orange-400 transition-colors">
                  hello@spiin.com
                </a>
                <span className="text-white/20">|</span>
                <a href="#" className="text-brand-accent hover:text-orange-400 transition-colors">
                  Press Kit
                </a>
                <span className="text-white/20">|</span>
                <a href="#" className="text-brand-accent hover:text-orange-400 transition-colors">
                  Careers
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}