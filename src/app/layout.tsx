import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const defaultTitle = `${site.brandName} | Software Development`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.brandName}` },
  description: site.seoDescription,
  applicationName: site.brandName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    site.brandName,
    site.name,
    "Software Developer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Laravel Developer",
    "Backend Developer",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "West Bengal",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.brandName,
    title: defaultTitle,
    description: site.seoDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060b17" },
  ],
};

/**
 * Applies the saved (or system) theme before first paint to avoid a flash of
 * the wrong theme. Kept tiny and dependency-free on purpose.
 */
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
