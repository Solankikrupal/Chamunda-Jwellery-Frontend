"use client";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsX } from "react-icons/bs";

import useWidth from "@/app/configs/useWidth";

import logo from "../../../public/Image/logo-no-background.png";
import SidebarMenuItems from "./SidebarMenuItems";
import SimpleBar from "simplebar-react";

type Props = {
  className?: string;
  menuCollapsed: boolean;
  setMenuCollapsed?: Dispatch<SetStateAction<boolean>>;
  mobileMenu?: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({
  menuCollapsed,
  setMenuCollapsed,
  mobileMenu,
  setMobileMenu,
}: Props) => {
  const { width, breakpoints } = useWidth();
  // const scrollableNodeRef = useRef<HTMLDivElement | null>(null);
  // const [scroll,setScroll] = useState<boolean>(false)
  const [menuHover, setMenuHover] = useState<boolean>(false);

  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (scrollableNodeRef?.current && scrollableNodeRef?.current?.scrollTop > 0) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };
  //   scrollableNodeRef?.current?.addEventListener('scroll', handleScroll);
  // }, [scrollableNodeRef]);

  return (
    <div>
      <div
        className={`fixed top-0 h-screen z-[999] bg-slate-600 
          ${menuCollapsed ? "w-[72px]" : "w-[250px]"}
          ${menuHover ? "w-[250px]" : ""}
        `}
        onMouseEnter={() => {
          setMenuHover(true);
        }}
        onMouseLeave={() => {
          setMenuHover(false);
        }}
      >
        <div
          className={`flex justify-between lg:justify-center items-center z-[9] px-4 pt-2 border-none`}
        >
          <Link href="/admin">
            <div className="flex items-center space-x-4">
              <div className="logo-icon">
                <Image src={logo} alt="logo" height={50} />
              </div>
            </div>
          </Link>

          {width! < breakpoints.lg && (
            <div
              className="cursor-pointer "
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <BsX size={22} color="#fff" />
            </div>
          )}
        </div>

        <SimpleBar className="px-4 py-2 h-[calc(100%-80px)]">
          <ul>
            <SidebarMenuItems collapsed={menuCollapsed} menuHover={menuHover} />
          </ul>
        </SimpleBar>
      </div>
    </div>
  );
};

export default Sidebar;
