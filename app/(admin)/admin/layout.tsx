"use client";

import "../../globals.css";

import { useState } from "react";
import useWidth from "@/app/configs/useWidth";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { width, breakpoints } = useWidth();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);

  return (
    <>
      <div className="page-min-height">
        {children}
      </div>
    </>
  );
}
