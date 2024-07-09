import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import WhatsApp from "@/components/WhatsApp";
import MyMarquee from "@/components/Marquee";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mass Gizmos",
  description:
    "Mass Gizmos is a leading online store for gadgets and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <WhatsApp />
        <MyMarquee />
      </body>
    </html>
  );
}
