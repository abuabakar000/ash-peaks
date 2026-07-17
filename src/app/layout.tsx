import type { Metadata } from "next";
import { Public_Sans, Meow_Script } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const meowScript = Meow_Script({
  variable: "--font-meow-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Quality Resource - Digital Marketing Agency",
  description: "AI-Driven Digital Marketing Agency where creativity sparks, strategy fuels, and innovation transforms your business into a success story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${meowScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
