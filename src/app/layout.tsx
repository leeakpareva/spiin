import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PaymentProvider } from "@/lib/payment-context";

export const metadata: Metadata = {
  title: "SPIIN | Discover Music",
  description: "Explore exclusive drops, artists and live experiences on SPIIN. Support artists directly.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-900 text-white">
        <PaymentProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PaymentProvider>
      </body>
    </html>
  );
}