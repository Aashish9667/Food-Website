import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import AOSInit from "./AOS/aos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mvBoli = localFont({
  src: './fonts/mvboli.ttf',
  variable: '--font-mv-boli',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Food Website",
  description: "Delicious food delivered to you",
  icons: {
    icon: "/foodLogo.webp", 
    shortcut: "/foodLogo.webp",
    apple: "/foodLogo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  ${mvBoli.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AOSInit/>
        {children}
        </body>
    </html>
  );
}
