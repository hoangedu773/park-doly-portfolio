import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://park-doly.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Park Doly — Fullstack Developer",
    template: "%s — Park Doly",
  },
  description:
    "Park Doly is a fullstack developer and UI/UX designer in Vietnam, building web products and AI chatbots from interface to infrastructure.",
  openGraph: {
    title: "Park Doly — Fullstack Developer",
    description:
      "Fullstack development, UI/UX design, and AI chatbots. Based in Vietnam.",
    url: siteUrl,
    siteName: "Park Doly",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Park Doly — Fullstack Developer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Park Doly — Fullstack Developer",
    description:
      "Fullstack development, UI/UX design, and AI chatbots. Based in Vietnam.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
