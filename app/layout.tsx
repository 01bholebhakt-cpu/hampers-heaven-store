
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hampers Heaven | Luxury Gifting",
  description:
    "Discover beautiful gift hampers, chocolates, flowers and thoughtful gifts for every special occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
