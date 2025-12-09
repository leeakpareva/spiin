import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-brand-900 to-emerald-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-emerald-500/5" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-6 py-2 text-sm text-orange-300">
              Artist-first platform
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-orange-200 to-amber-300 bg-clip-text text-transparent">
              About SPIIN
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              The next-generation music platform where creators own their audience, earn directly, and build sustainable careers without intermediaries.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-20">
          {/* Introduction */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Reimagining music for the creator economy</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                SPIIN is a next-generation music platform built for artists first - a place where creators don&apos;t just distribute music, but own their audience, earn directly, and build sustainable careers.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Designed as the artist-centred evolution of traditional streaming, SPIIN blends premium music discovery with direct creator monetisation. Fans don&apos;t just listen - they tip, subscribe, unlock exclusive drops, and pay artists directly inside the app.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/20 to-emerald-500/20 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M13.828 8.172a1 1 0 011.414 0A5.983 5.983 0 0117 12a5.983 5.983 0 01-1.758 3.828 1 1 0 01-1.414-1.414A3.987 3.987 0 0015 12a3.987 3.987 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/60">Direct artist payments</p>
                </div>
              </div>
            </div>
          </section>

          {/* What Artists Can Do */}
          <section className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">
                Built for creators, <span className="text-brand-accent">by creators</span>
              </h2>
              <p className="text-white/70">
                Every feature is designed to help artists thrive in the modern music economy.
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Release & Distribute",
                  description: "Share albums, singles, EPs and demos with full control over your content",
                  icon: "🎵"
                },
                {
                  title: "Behind-the-Scenes",
                  description: "Host exclusive content, writing sessions and studio moments for fans",
                  icon: "🎬"
                },
                {
                  title: "Fan Communities",
                  description: "Run paid fan clubs and subscription tiers with exclusive perks",
                  icon: "👥"
                },
                {
                  title: "Exclusive Drops",
                  description: "Release early-access content and limited experiences for top supporters",
                  icon: "💎"
                },
                {
                  title: "Instant Payments",
                  description: "Receive direct payouts from fans without waiting for royalty cycles",
                  icon: "⚡"
                },
                {
                  title: "Own Your Data",
                  description: "Keep complete control and ownership of your fan relationships",
                  icon: "🔐"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-brand-accent/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/30 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Statement */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-emerald-500/5 rounded-3xl" />
            <div className="relative text-center py-16 px-8 space-y-12">
              <h2 className="text-4xl lg:text-5xl font-bold">Our mission is simple</h2>

              <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Turn every play into a paycheck</h3>
                  <p className="text-lg text-white/70">
                    Every stream, every interaction, every moment of engagement becomes a direct opportunity for artists to earn from their craft.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-brand-accent flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Turn fans into stakeholders</h3>
                  <p className="text-lg text-white/70">
                    Transform passive listeners into active participants in an artist's creative journey through direct support and exclusive access.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-brand-800/30 to-brand-700/30 rounded-3xl p-12 backdrop-blur-sm border border-white/5">
            <h2 className="text-3xl font-bold mb-12 text-center">Why artists choose SPIIN</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "100%", label: "Direct to Artist", sublabel: "Zero platform cuts" },
                { value: "0%", label: "Platform Fees", sublabel: "Keep what you earn" },
                { value: "Instant", label: "Payouts", sublabel: "No waiting periods" },
                { value: "Forever", label: "Own Your Fans", sublabel: "Data stays with you" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 p-6 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <div className="text-4xl font-bold text-brand-accent mb-2">{stat.value}</div>
                    <div className="font-semibold text-white/90">{stat.label}</div>
                    <div className="text-sm text-white/50 mt-1">{stat.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to join the revolution?</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Whether you're an artist ready to take control of your career or a fan who wants to support creators directly, SPIIN is your platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:scale-105"
              >
                Join SPIIN Today
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/artists"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:border-white/40"
              >
                Explore Artists
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-white/10 pt-16">
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Have questions? Want to partner with us? We'd love to hear from you and explore how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <a
                  href="mailto:hello@spiin.com"
                  className="flex items-center gap-3 text-brand-accent hover:text-orange-400 transition-colors group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  hello@spiin.com
                </a>

                <a href="#" className="flex items-center gap-3 text-brand-accent hover:text-orange-400 transition-colors group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  Press Kit
                </a>

                <a href="#" className="flex items-center gap-3 text-brand-accent hover:text-orange-400 transition-colors group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
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