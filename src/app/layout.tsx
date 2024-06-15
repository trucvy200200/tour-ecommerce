import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import "./global.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking Now",
  description: "Booking for advanced tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
