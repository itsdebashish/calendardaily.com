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
  metadataBase: new URL("https://calendardaily.vercel.app"),
  title: {
    default: "CalendarDaily",
    template: "%s | CalendarDaily",
  },
  description: "A clean 2026 monthly calendar with date range selection and quick notes.",
  applicationName: "CalendarDaily",
  openGraph: {
    type: "website",
    title: "CalendarDaily",
    description:
      "A clean 2026 monthly calendar with date range selection and quick notes.",
    url: "https://calendardaily.vercel.app",
    siteName: "CalendarDaily",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
