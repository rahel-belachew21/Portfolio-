import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahel-belachew.dev"),
  title: {
    default: "Rahel Belachew | Computer Science & Engineering Graduate",
    template: "%s | Rahel Belachew",
  },
  description:
    "Portfolio of Rahel Belachew, a Computer Science and Engineering graduate showcasing projects, technical skills, experience, and digital solutions.",
  openGraph: {
    title: "Rahel Belachew | Computer Science & Engineering Graduate",
    description:
      "Portfolio showcasing projects, technical skills, experience, and digital solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahel Belachew | Computer Science & Engineering Graduate",
    description:
      "Portfolio showcasing projects, technical skills, experience, and digital solutions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
