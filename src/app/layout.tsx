import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Figma",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Libre:wght@300;400;700&family=Averia+Sans+Libre:wght@300;400;700&family=Averia+Serif+Libre:wght@300;400;700&family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
