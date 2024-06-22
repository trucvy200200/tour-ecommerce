import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"

import "./globals.css"
import "./global.scss"


const font = Open_Sans({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Booking Now",
  description: "Booking for advanced tour",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
