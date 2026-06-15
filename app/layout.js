import "./globals.css";
import { Nunito, Baloo_2 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hand = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata = {
  title: "ByAstro — Every dog deserves a couch to nap on",
  description:
    "A centralized dog adoption & fostering platform for shelter dogs across the UAE. Browse, connect, and bring home your new best friend — built in memory of Astro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${hand.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
