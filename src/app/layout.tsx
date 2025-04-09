import { Footer } from "@/components/Footer/Footer";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crane",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={font.className}>{children}</body>
      <Footer />
    </html>
  );
}
