"use client";
import React, { useMemo, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import UserForm from "./components/UserForm";
import UserAddress from "./components/UserAddress";
import Table from "@/app/components/Table";
import { CartItems } from "../cart/page";
import { ColumnT } from "@/app/common/constants/type";
import Image from "next/image";

type Props = {};

const ProfilePage = (props: Props) => {
  const [switchProfile, setSwitchProfile] = useState<number>(0);
  const [items, setItems] = useState<CartItems[]>([
    {
      id: 1,
      name: "[814830034-0] Bacteriostatic Water for Injection - 25 vials",
      image: "/Image/cart-prod-img.png",
      quantity: 1,
      isSelected: false,
      basePrice: "109.25",
      price: "109.25",
    },
    {
      id: 2,
      name: "[814830034-0] Bacteriostatic Water for Injection - 25 vials",
      image: "/Image/cart-prod-img.png",
      quantity: 1,
      isSelected: false,
      basePrice: "109.25",
      price: "109.25",
    },
    {
      id: 3,
      name: "[814830034-0] Bacteriostatic Water for Injection - 25 vials",
      image: "/Image/cart-prod-img.png",
      quantity: 1,
      isSelected: false,
      basePrice: "109.25",
      price: "109.25",
    },
    {
      id: 4,
      name: "[814830034-0] Bacteriostatic Water for Injection - 25 vials",
      image: "/Image/cart-prod-img.png",
      quantity: 1,
      isSelected: false,
      basePrice: "109.25",
      price: "109.25",
    },
    {
      id: 5,
      name: "[814830034-0] Bacteriostatic Water for Injection - 25 vials",
      image: "/Image/cart-prod-img.png",
      quantity: 1,
      isSelected: false,
      basePrice: "109.25",
      price: "109.25",
    },
  ]);

  const Columns = useMemo<ColumnT[]>(
    () => [
      {
        header: "Items",
        name: "items",
        value: (cell) => (
          <div className="flex items-center gap-4">
            <Image
              src={cell.image}
              alt="product image"
              width={50}
              height={100}
            />
            <p className="font-normal text-base">{cell.name}</p>
          </div>
        ),
      },
      {
        header: "trays",
        name: "trays",
        value: (cell) => (
          <span className="text-[#4F4F4F] text-base">{cell.quantity}</span>
        ),
      },
      {
        header: "Amount",
        name: "amount",
        value: (cell) => <span>{cell.price}</span>,
      },
    ],
    []
  );

  return (
    <section className="py-6 lg:p-6">
      <div className="flex items-center justify-between py-5 border-b border-border-100 mb-10 flex-wrap">
        <h2 className="text-xl md:text-3xl font-medium ">My Profile</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-1">
          <div className="grid grid-cols-3 gap-3 md:flex md:flex-col">
            <button
              className={`p-0 w-full h-11 flex items-center justify-center md:justify-start gap-5 px-2  ${
                switchProfile === 0
                  ? "bg-primary-900 text-white"
                  : "border text-gray-200 bg-white border-border-100"
              } rounded-md  text-xs md:text-base font-normal`}
              onClick={() => {
                setSwitchProfile(0);
              }}
            >
              <FaUser size={20} />
              <span className="hidden sm:inline"> My Profile</span>
            </button>

            <button
              className={`p-0 w-full h-11 flex items-center justify-center md:justify-start gap-5 px-2  ${
                switchProfile === 1
                  ? "bg-primary-900 text-white"
                  : "border text-gray-200 bg-white border-border-100"
              } rounded-md  text-xs md:text-base font-normal`}
              onClick={() => {
                setSwitchProfile(1);
              }}
            >
              <FaShoppingBag size={20} />
              <span className="hidden sm:inline"> My Orders </span>
            </button>

            <button
              className={`p-0 w-full h-11 flex items-center justify-center md:justify-start gap-5 px-2  ${
                switchProfile === 2
                  ? "bg-primary-900 text-white"
                  : "border text-gray-200 bg-white border-border-100"
              } rounded-md  text-xs md:text-base font-normal`}
              onClick={() => {
                setSwitchProfile(2);
              }}
            >
              <FaLocationDot size={20} />
              <span className="hidden sm:inline">My Addresses</span>
            </button>
          </div>
        </div>
        <div className="w-full md:col-span-3 border border-border-200 h-full p-3 lg:p-10 bg-white min-h-[500px]">
          {switchProfile === 0 && <UserForm />}
          {switchProfile === 1 && (
            <Table
              tableData={items}
              updateData={setItems}
              headerData={Columns}
              showFilterSection={true}
            />
          )}
          {switchProfile === 2 && <UserAddress />}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
