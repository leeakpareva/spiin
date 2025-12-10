"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingParticles from "@/components/floating-particles";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isCoverPage = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Global floating particles - only render when mounted */}
      {mounted && <FloatingParticles />}

      {!isCoverPage && mounted && <Header />}
      <main className="flex-1 relative z-10">{children}</main>
      {!isCoverPage && mounted && <Footer />}
    </div>
  );
}