import React from "react";

type Props = {
  subTotal: string;
  itemsCount: number;
  totalAmount: string;
};

const TotalPrice = ({ subTotal, itemsCount, totalAmount }: Props) => {
  return (
    <div className="border border-[#DDDDDD] py-6 rounded-lg bg-white">
      <div className="flex justify-between items-start px-4">
        <div>
          <h3 className=" text-xl xl:text-2xl font-normal">Subtotal</h3>
          <p className="text-[#4F4F4F]">({itemsCount} items)</p>
        </div>
        <div className="flex items-center">
          <p className=" text-primary-900 text-xl xl:text-2xl  font-semibold">${subTotal}</p>
        </div>
      </div>
      <hr className="h-[1] border-[#DDDDDD] mt-10" />
      <div className="px-6">
        <p className="text-[#4F4F4F] font-normal text-base text-center mt-2">
          Shipping and taxes will be calculated at checkout
        </p>
      </div>
      <hr className="h-[1] border-[#DDDDDD] mt-10" />
      <div className="flex justify-between px-6 pt-2">
        <div>
          <h3 className="text-xl xl:text-2xl font-normal">Total</h3>
        </div>
        <div className="flex items-center">
          <p className="text-primary-900 text-xl xl:text-2xl font-semibold">
            ${totalAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
