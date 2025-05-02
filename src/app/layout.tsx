import { Footer } from "@/components/Footer/Footer";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import logo from '@/assets/logo.png'
const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crane",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
