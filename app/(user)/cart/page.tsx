"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";

// components imports
import Table from "@/app/components/Table";
import TotalPrice from "@/app/components/TotalPrice";
import RecentOrder from "@/app/common/components/RecentOrder";
import { ColumnT } from "@/app/common/constants/type";
import { FaTrash } from "react-icons/fa";

type Props = {};

export type CartItems = {
  id: number;
  name: string;
  image: string;
  isSelected: boolean;
  quantity: number;
  basePrice: string;
  price: string;
};

const CartPage = (props: Props) => {
  const router = useRouter();

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(0);

  // TODO: remove the dummy data
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

  // ! function for calculating total price
  const calculateTotalPrice = () => {
    let sum = 0;
    items.forEach((item) => (sum += parseFloat(item.price)));
    setTotalPrice(sum);
  };

  // ! function for calculating total cart items
  const countTotalItems = () => {
    let count = 0;
    items.forEach((item) => (count += item.quantity));
    setItemCount(count);
  };

  useEffect(() => {
    calculateTotalPrice();
    countTotalItems();
  }, []);

  // ! function for check all the check box
  const handleCheckAll = () => {
    const allSelected = items.every((item) => item.isSelected);
    const updatedItems = items.map((item) => ({
      ...item,
      isSelected: !allSelected,
    }));
    setItems(updatedItems);
  };

  // ! function for single check box
  const handleCheckItem = (id: number) => {
    const updatedTableData = items.map((item) => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setItems([...updatedTableData]);
  };

  // ! function for increment cart quantity
  const incrementQuantity = (id: number) => {
    const updatedTableData = items.map((item) => {
      if (item.id === id) {
        item.quantity++;
        item.price = String(parseFloat(item.basePrice) * item.quantity);
      }
      return item;
    });
    setItems([...updatedTableData]);
    calculateTotalPrice();
    countTotalItems();
  };

  // ! function for decrement cart quantity
  const decrementQuantity = (id: number) => {
    const updatedTableData = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
        item.price = String(parseFloat(item.basePrice) * item.quantity);
      }
      return item;
    });
    setItems([...updatedTableData]);
    calculateTotalPrice();
    countTotalItems();
  };

  // ! Table columns
  const Columns = useMemo<ColumnT[]>(
    () => [
      {
        header: (
          <input
            onChange={() => handleCheckAll()}
            type="checkbox"
            name=""
            id=""
            className="h-5 w-5 my-auto"
          />
        ),
        name: "name",
        value: (cell) => (
          <input
            type="checkbox"
            checked={cell.isSelected}
            name=""
            id=""
            className="h-5 w-5 my-auto"
            onChange={() => handleCheckItem(cell.id)}
          />
        ),
      },
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
          <div className="border border-[#D9D9D9] flex items-center justify-between py-3 px-5 gap-3 rounded-full">
            <button onClick={() => decrementQuantity(cell.id)}>
              <FaMinus className="text-[#D9D9D9] -ml-2" size={20} />
            </button>
            <span className="text-[#4F4F4F] text-base">{cell.quantity}</span>
            <button onClick={() => incrementQuantity(cell.id)}>
              <FaPlus className="text-[#D9D9D9] -mr-2" size={20} />
            </button>
          </div>
        ),
      },
      {
        header: "Amount",
        name: "amount",
        value: (cell) => <span>${cell.price}</span>,
      },
      {
        header: "Remove",
        name: "remove",
        value: () => (
          <Image
            alt="delete"
            src={"/svg/Delete.svg"}
            width={20}
            height={20}
            className="mx-auto"
          />
        ),
      },
    ],
    [handleCheckAll]
  );

  return (
    <div className="py-6 lg:p-6">
      <div className="flex items-center justify-between py-5 border-b border-border-100 mb-10 flex-wrap">
        <h2 className="text-xl md:text-3xl font-medium ">Your cart</h2>
        <div className="flex items-center gap-2 uppercase hover:cursor-pointer">
          <FaTrash size={15} />
          <p className="font-normal text-base">Clear Cart</p>
        </div>
      </div>

      <div className="w-full mt-10">
        <div className="lg:grid lg:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <Table tableData={items} headerData={Columns} />
          </div>
          <div className="mt-5 lg:mt-0 lg:col-span-1">
            <TotalPrice
              itemsCount={itemCount}
              subTotal={totalPrice.toString()}
              totalAmount={totalPrice.toString()}
            />
          </div>
        </div>
        <div className="mt-10 mb-20 md:grid md:grid-cols-3">
          <div className="md:col-span-2 flex justify-end">
            <button
              className="bg-primary-900 text-white py-3 px-10 rounded-full uppercase"
              onClick={() => router.push("/checkout")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <RecentOrder />
      </div>
    </div>
  );
};

export default CartPage;
