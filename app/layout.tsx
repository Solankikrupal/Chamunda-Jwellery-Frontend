import type { Metadata } from "next";
import "./globals.css";
// import { Nunito_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Nunito_Sans } from "next/font/google";
import Head from "next/head";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Chamunda Jewellers Diu",
  description:
    "We make all kinds of DESIGNER gold & silver jewellery 100% BIS hallmarked jewellery government approved ( just order )in business since 1991.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: 'fM01WlfuhaX63tO9hwRcnhmV8BdFSE08pIy5Fn7mrp4' ,
    },
};

<meta name="google-site-verification" content="fM01WlfuhaX63tO9hwRcnhmV8BdFSE08pIy5Fn7mrp4" />


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="fM01WlfuhaX63tO9hwRcnhmV8BdFSE08pIy5Fn7mrp4" />
      </Head>
      <body className={nunitoSans.className}>
      <ToastContainer position='top-right' theme='colored' autoClose={2000} />
      {children}</body>
    </html>
  );
}
