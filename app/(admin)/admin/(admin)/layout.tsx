"use client";

import "../../../globals.css";

import { useState } from "react";
import useWidth from "@/app/configs/useWidth";
import '../../../../scss/_sidebar.scss'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

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
      <Header
        className={
          width! >= breakpoints.lg
            ? menuCollapsed
              ? "ml-[72px]"
              : "ml-[250px]"
            : ""
        }
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      {(width! >= breakpoints.lg || mobileMenu) && (
        <Sidebar
          menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      <div
        className={
          width! >= breakpoints.lg
            ? menuCollapsed
              ? "ml-[72px]"
              : "ml-[250px]"
            : ""
        }
      >
        <div className="md:pt-6 md:pb-[37px] md:px-6 pt-[15px] px-[15px] pb-24 page-min-height">
          {children}
        </div>
      </div>
    </>
  );
}
