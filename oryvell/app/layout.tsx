import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oryvell — Maison de Parfum",
  description:
    "Discover rare and exquisite fragrances crafted for the senses. Oryvell — where silence holds the weight of petals.",
  keywords: ["perfume", "fragrance", "luxury", "oryvell", "maison de parfum"],
  openGraph: {
    title: "Oryvell — Maison de Parfum",
    description: "Discover rare and exquisite fragrances crafted for the senses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}