"use client";

import { doLogout } from "@/app/Auth";
import useWidth from "@/app/configs/useWidth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  BiChevronDown,
  BiChevronUp,
  BiLogInCircle,
  BiMenuAltRight,
  BiSolidUser,
} from "react-icons/bi";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import 'simplebar-react/dist/simplebar.min.css';

type Props = {
  className?: string;
  menuCollapsed: boolean;
  setMenuCollapsed: Dispatch<SetStateAction<boolean>>;
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const Header = ({
  className,
  menuCollapsed,
  setMenuCollapsed,
  mobileMenu,
  setMobileMenu,
}: Props) => {
  const { width, breakpoints } = useWidth();
  const router = useRouter();

  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [changeIcon, setChangeIcon] = useState<boolean>(true);

  const handleLogout = () =>{
       doLogout('adminSession');
      // unregister();
      setTimeout(() => {
        router.push('admin/login');
      }, 100);
  }

  return (
    <header className={className + " " + "sticky top-0"}>
      <div className="md:px-6 px-[15px] bg-white py-3 md:mx-0 mx-0 text-black-500 border-b border-gray-400">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center md:space-x-4 space-x-2">
            {width! >= breakpoints.lg && (
              <button
                type="button"
                className="text-xl hover:text-slate-900 hidden lg:block"
                onClick={() => setMenuCollapsed(!menuCollapsed)}
              >
                {menuCollapsed ? (
                  <RiMenuUnfoldLine size={34} />
                ) : (
                  <RiMenuFoldLine size={34} />
                )}
              </button>
            )}
            {/* open mobile menu handler*/}
            {width! < breakpoints.lg && (
              <div
                className="cursor-pointer text-2xl"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <BiMenuAltRight />
              </div>
            )}

            {/* <SearchInput /> */}
          </div>

          {/* Nav Tools  */}
          <div className="nav-tools flex items-center lg:space-x-6 space-x-3">
            {/* Profile */}
            <div className="relative inline-block">
              <div className="block w-full ">
                <div className="label-class-custom">
                  <button
                    type="button"
                    className="p-0 m-0"
                    onClick={() => {
                      dropDownRef?.current?.classList.toggle("hidden");
                      setChangeIcon((prev) => !prev);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
                        <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
                          <Image
                            width={40}
                            height={40}
                            src={"/Image/profile.png"}
                            alt="User"
                            className="block w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex-none text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
                        <span className="overflow-hidden text-ellipsis w-fit block">
                          Admin
                        </span>
                        <span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
                          {changeIcon ? <BiChevronDown /> : <BiChevronUp />}
                        </span>
                      </div>
                    </div>
                  </button>

                  <div
                    className="absolute hidden ltr:right-0 rtl:left-0 origin-top-right border border-slate-100 rounded shadow-lg bg-white z-[5] w-[160px] top-[145%] right-0 transform opacity-100 scale-100"
                    id="user-dropdown"
                    ref={dropDownRef}
                  >
                    <div className="block">
                      <ul aria-labelledby="user-menu-button">
                        <li>
                          <Link
                            href={"/admin/profile"}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                            onClick={() => {
                              dropDownRef?.current?.classList.toggle("hidden");
                              setChangeIcon((prev) => !prev);
                            }}
                          >
                            <BiSolidUser className="inline-block" size={18} />
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                  
                            className="block px-4 py-2 text-sm"
                            onClick={()=>handleLogout()}
                          >
                            <BiLogInCircle className="inline-block" size={18} />
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
