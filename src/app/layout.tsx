import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Dhruv Panchal | Secure Full-Stack Developer",
  description: "Portfolio of Dhruv Panchal, a full-stack developer specializing in secure, scalable applications with a focus on clean architecture and user-centric design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-950">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
