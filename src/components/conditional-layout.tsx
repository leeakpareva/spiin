"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCoverPage = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      {!isCoverPage && <Header />}
      <main className="flex-1">{children}</main>
      {!isCoverPage && <Footer />}
    </div>
  );
}