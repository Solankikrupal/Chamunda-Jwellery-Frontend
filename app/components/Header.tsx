"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const [menuItem, setMenuItem] = useState<boolean>(false);
  const [searchField, setSearchField] = useState<boolean>(false);
  const toggleMenubar = () => setMenuItem((prev) => !prev);
  const toggleSearchBar = () => setSearchField((prev) => !prev);

  // const handleLogout = () => {
  //   doLogout("userSession");
  //   setTimeout(() => {
  //     router.push("/login");
  //   }, 100);
  // };

  return (
    <div className="sticky top-0 z-50 bg-primary-900 text-foreground text-white">
      <div className="container mx-auto px-5 lg:px-32">
        <div className="flex items-center justify-center md:justify-between w-full py-4">
          <div className="flex items-center md:space-x-2 h-14">
            <Link href="/" className="flex items-center md:space-x-2 h-14">
              <Image
                src="/svg/logoVibrantV12.svg"
                alt="Malabar Gold & Diamonds Logo"
                className="w-full h-full"
                width={200}
                height={80}
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 mx-4 md:px-14">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border-b border-border-200 text-border-200 bg-transparent outline-none"
            />
          </div>
          <div className="md:hidden hidden items-center">
            <button
              className="text-2xl text-white focus:outline-none"
              onClick={toggleMenubar}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuItem && (
        <div className="md:hidden bg-primary-900 text-foreground text-white">
          <div className="container mx-auto px-5 py-4">
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <a className="text-white">Home</a>
                </Link>
              </li>
              {/* Add more menu items as needed */}
              {/* {isLoggedIn() ? (
                <li>
                  <button onClick={handleLogout} className="text-white">
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link href="/login">
                    <a className="text-white">Login</a>
                  </Link>
                </li>
              )} */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
