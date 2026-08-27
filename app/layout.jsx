import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Kaileb Hammontree — Music & Full-Stack Development",
  description:
    "Choose your adventure: explore Kaileb Hammontree's music or Hammontree Full-Stack Solutions web & app development services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
