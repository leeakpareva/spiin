"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePayment } from "@/lib/payment-context";
import { useAuth } from "@/lib/auth-context";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cartItems } = usePayment();
  const { user, logout } = useAuth();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-brand-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">
              SPIIN
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              artist experiences
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/explore" className="text-white/80 hover:text-brand-accent transition-colors">
            Explore
          </Link>
          <Link href="/artists" className="text-white/80 hover:text-brand-accent transition-colors">
            Artists
          </Link>
          <Link href="/about" className="text-white/80 hover:text-brand-accent transition-colors">
            About
          </Link>
          <Link href="/library" className="text-white/80 hover:text-brand-accent transition-colors">
            My Library
          </Link>
          <Link href="/cart" className="relative text-white/80 hover:text-brand-accent transition-colors">
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>
          {mounted && user ? (
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/60">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10 transition-all"
              >
                Logout
              </button>
            </div>
          ) : mounted ? (
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-white/80 hover:text-white">
                Log in
              </Link>
              <Link href="/signup" className="rounded-full bg-gradient-to-r from-brand-accent to-emerald-500 px-4 py-1.5 text-xs font-semibold text-black shadow-lg shadow-brand-accent/25 hover:shadow-xl transition-all">
                Sign up
              </Link>
            </div>
          ) : null}
        </nav>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-brand-800/95 backdrop-blur-md">
          <div className="flex flex-col gap-2 px-4 py-3">
            <Link href="/explore" className="py-2 text-sm text-white/80">
              Explore
            </Link>
            <Link href="/artists" className="py-2 text-sm text-white/80">
              Artists
            </Link>
            <Link href="/about" className="py-2 text-sm text-white/80">
              About
            </Link>
            <Link href="/library" className="py-2 text-sm text-white/80">
              My Library
            </Link>
            <Link href="/cart" className="py-2 text-sm text-white/80">
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
            {mounted && user ? (
              <button
                onClick={logout}
                className="py-2 text-sm text-white/80 text-left"
              >
                Logout
              </button>
            ) : mounted ? (
              <>
                <Link href="/login" className="py-2 text-sm text-white/80">
                  Log in
                </Link>
                <Link href="/signup" className="py-2 text-sm text-white/80">
                  Sign up
                </Link>
              </>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
}