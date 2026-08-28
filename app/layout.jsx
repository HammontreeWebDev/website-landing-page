import "./globals.css";
import { Righteous, Nunito, Space_Grotesk, Inter } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-music-display",
  weight: ["400"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-music-body",
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-dev-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dev-body",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Kaileb Hammontree — Music & Full-Stack Development",
  description:
    "Choose your path: explore Kaileb Hammontree's music or Hammontree Full-Stack Solutions premium web & app development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${nunito.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
