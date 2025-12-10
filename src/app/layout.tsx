import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "@/components/conditional-layout";
import { PaymentProvider } from "@/lib/payment-context";
import { AuthProvider } from "@/lib/auth-context";
import { MediaProvider } from "@/lib/media-context";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-brand-900 text-white" suppressHydrationWarning>
        <AuthProvider>
          <MediaProvider>
            <PaymentProvider>
              <ConditionalLayout>
                {children}
              </ConditionalLayout>
            </PaymentProvider>
          </MediaProvider>
        </AuthProvider>
      </body>
    </html>
  );
}