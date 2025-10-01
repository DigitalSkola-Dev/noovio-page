import { Footer, Navbar } from "@/components/partials";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Noovio",
  description: "Noovio | Digital Skola",
  icons: {
    icon: ["/icons/favicon.ico?v=4"],
    apple: ["/icons/apple-touch-icon.png?v=4"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Noovio",
    description: "Noovio | Digital Skola",
    url: siteUrl,
    siteName: "Noovio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noovio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noovio",
    description: "Noovio | Digital Skola",
    images: ["/icons/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Noovio" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className={cn(onest.className)} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
