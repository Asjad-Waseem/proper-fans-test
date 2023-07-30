import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Properfans",
  description: "Properfans is a popular social networking app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="proper fans app favicon icon" href="/favicon.ico" />{" "}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
