"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingParticles from "@/components/floating-particles";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCoverPage = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Global floating particles */}
      <FloatingParticles />

      {!isCoverPage && <Header />}
      <main className="flex-1 relative z-10">{children}</main>
      {!isCoverPage && <Footer />}
    </div>
  );
}