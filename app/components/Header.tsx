"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaChevronDown, FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { doLogout, isLoggedIn } from "../Auth";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const [menuItem, setMenuItem] = useState<boolean>(false);
  const [searchField, setSearchField] = useState<boolean>(false);
  const toggleMenubar = () => setMenuItem((prev) => !prev);
  const toggleSearchBar = () => setSearchField((prev) => !prev);

  const handleLogout = () => {
    doLogout("userSession");
    // unregister();
    setTimeout(() => {
      router.push("/login");
    }, 100);
  };

  return (
    <div className="flex flex-col bg-primary-900 text-foreground text-white">
      <div className="container mx-auto px-5 lg:px-32">
        <div className="bg-primary text-primary-foreground">
          <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center space-x-2 h-14">
              <Image
                src="/svg/logoVibrantV10.svg"
                alt="Malabar Gold & Diamonds Logo"
                className="w-full h-full" 
                width={200}
                height={80}
                objectFit="cover"
              />
              </Link>
            <div className="flex-1 mx-4 px-14">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border-b border-border-200 text-border-200 bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center justify-end space-x-1 mx-5 mr-auto">
                <FaHeart size={18} />
              </a>
            </div>
            <div className="flex items-center gap-5 space-x-4">
              <a href="#" className="flex items-center justify-end space-x-1 mx-5 mr-auto">
                <FaMapLocationDot size={18} />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center justify-end space-x-1 mx-5 mr-auto">
                <FaUser size={18} />
              </a>
            </div>
          </div>
          <div className="bg-secondary text-secondary-foreground ">
            <div className="container mx-auto flex justify-around space-x-4 pt-3 ">
              <a href="#" className="text-sm font-light w-full text-center h-full border-b-8 border-primary-900  transition-all pb-2 hover:border-white">
                Category 01
              </a>
              <a href="#" className="text-sm font-light w-full text-center h-full border-b-8 border-primary-900  transition-all pb-2 hover:border-white">
              Category 02
              </a>
              <a href="#" className="text-sm font-light w-full text-center h-full border-b-8 border-primary-900  transition-all pb-2 hover:border-white">
              Category 03
              </a>
              <a href="#" className="text-sm font-light w-full text-center h-full border-b-8 border-primary-900  transition-all pb-2 hover:border-white">
              Category 04
              </a>
              <a href="#" className="text-sm font-light w-full text-center h-full border-b-8 border-primary-900  transition-all pb-2 hover:border-white">
              Category 05
              </a>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Header;
