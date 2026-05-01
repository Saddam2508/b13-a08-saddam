import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Providers from "@/helper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "category-A8-Apple",
  description: "A website to showcase a tile gallery.",
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
      <body className="min-h-full flex flex-col px-2">
        <Providers>
          <header>
            <Navbar />
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <Footer />
          </footer>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
