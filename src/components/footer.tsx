import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-900/95 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <div className="flex flex-col gap-2 text-xs text-white/60">
              <Link href="/about" className="hover:text-brand-accent transition-colors">
                About SPIIN
              </Link>
              <Link href="/press" className="hover:text-brand-accent transition-colors">
                Press
              </Link>
              <Link href="/careers" className="hover:text-brand-accent transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Artists */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Artists</h3>
            <div className="flex flex-col gap-2 text-xs text-white/60">
              <Link href="/for-artists" className="hover:text-brand-accent transition-colors">
                Join SPIIN
              </Link>
              <Link href="/artist-resources" className="hover:text-brand-accent transition-colors">
                Resources
              </Link>
              <Link href="/artist-support" className="hover:text-brand-accent transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Fans */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Fans</h3>
            <div className="flex flex-col gap-2 text-xs text-white/60">
              <Link href="/how-it-works" className="hover:text-brand-accent transition-colors">
                How It Works
              </Link>
              <Link href="/gift-cards" className="hover:text-brand-accent transition-colors">
                Gift Cards
              </Link>
              <Link href="/support" className="hover:text-brand-accent transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex flex-col gap-2 text-xs text-white/60">
              <Link href="https://instagram.com" className="hover:text-brand-accent transition-colors">
                Instagram
              </Link>
              <Link href="https://twitter.com" className="hover:text-brand-accent transition-colors">
                X (Twitter)
              </Link>
              <Link href="https://tiktok.com" className="hover:text-brand-accent transition-colors">
                TikTok
              </Link>
              <Link href="https://youtube.com" className="hover:text-brand-accent transition-colors">
                YouTube
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <div className="flex flex-col gap-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} SPIIN.</span>
              <span className="text-emerald-400/70">Support artists directly.</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-brand-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-brand-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}