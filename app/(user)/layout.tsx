import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./../globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen bg-bgColor-100 ">
        <div className="container mx-auto px-5 lg:px-32">{children}</div>
      </main>
      <Footer />
    </>
  );
}
