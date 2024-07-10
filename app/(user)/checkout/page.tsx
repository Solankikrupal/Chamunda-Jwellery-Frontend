import CheckoutStep from "@/app/components/CheckoutStep";
import TotalPrice from "@/app/components/TotalPrice";
import React from "react";
import { FaHouseUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

// components imports

type Props = {};

const CheckoutPage = (props: Props) => {
  return (
    <div className="py-6 lg:p-6">
      <div className="flex items-center justify-between py-5 border-b border-border-100 mb-10 flex-wrap">
        <h2 className="text-xl md:text-3xl font-medium ">Checkout</h2>
      </div>
      <div className="w-full my-16">
        <CheckoutStep step={3} />
      </div>

      <div className="w-full mt-10 md:mt-32 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
          <div className="md:col-span-2 text-textPrimary-100">
            {/* Shipping Address Start */}
            <div className="grid grid-cols-12">
              <div className="md:col-span-1">
                <div className="hidden md:flex w-[42px] h-[40px] justify-center items-center rounded-full bg-primary-900 mx-auto mt-5">
                  <FaLocationDot className="text-white" size={15} />
                </div>
              </div>
              <div className="col-span-12 md:col-span-11 bg-white ">
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[40px] flex md:hidden justify-center items-center rounded-full bg-primary-900 ">
                      <FaLocationDot className="text-white" size={15} />
                    </div>
                    <h3 className="text-xl font-medium">Shipping Address</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div className="px-4 py-5 bg-gray-100 rounded-md">
                      <div className="flex gap-4 items-center">
                        <input type="radio" name="" id="" className="w-5 h-5" />
                        <p className="text-sm font-medium">Test 4</p>
                      </div>
                      <div className="mt-2 text-[#4F4F4F]">
                        <p className="py-2">
                          301 Hubeny Drive,  Plantsville,  Connecticut, 
                          06479, UNITED STATES.
                        </p>
                        <p>9592129019</p>
                      </div>
                    </div>
                    <div className="px-4 py-5 bg-gray-100 rounded-md">
                      <div className="flex gap-4 items-center">
                        <input type="radio" name="" id="" className="w-5 h-5" />
                        <p className="text-sm font-medium">Test 5</p>
                      </div>
                      <div className="mt-2 text-[#4F4F4F]">
                        <p className="py-2">
                          301 Hubeny Drive,  Plantsville,  Connecticut, 
                          06479, UNITED STATES.
                        </p>
                        <p>9592129019</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-5">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p className="font-normal text-sm">
                      Billing Address is same as Shipping Address
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Shipping Address End */}

            {/* Billing Address Start */}
            <div className="grid grid-cols-12">
              <div className="md:col-span-1">
                <div className="hidden md:flex w-[42px] h-[40px] justify-center items-center rounded-full bg-primary-900 mx-auto mt-5">
                  <FaLocationDot className="text-white" size={15} />
                </div>
              </div>
              <div className="col-span-12 md:col-span-11 bg-white">
                <div className="p-5">
                <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[40px] flex md:hidden justify-center items-center rounded-full bg-primary-900 ">
                      <FaLocationDot className="text-white" size={15} />
                    </div>
                    <h3 className="text-xl font-medium">Billing Address</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div className="px-4 py-5 bg-gray-100 rounded-md">
                      <div className="flex gap-4 items-center">
                        <input type="radio" name="" id="" className="w-5 h-5" />
                        <p className="text-sm font-medium">Test 4</p>
                      </div>
                      <div className="mt-2 text-[#4F4F4F]">
                        <p className="py-2">
                          301 Hubeny Drive,  Plantsville,  Connecticut, 
                          06479, UNITED STATES.
                        </p>
                        <p>9592129019</p>
                      </div>
                    </div>
                    <div className="px-4 py-5 bg-gray-100 rounded-md">
                      <div className="flex gap-4 items-center">
                        <input type="radio" name="" id="" className="w-5 h-5" />
                        <p className="text-sm font-medium">Test 5</p>
                      </div>
                      <div className="mt-2 text-[#4F4F4F]">
                        <p className="py-2">
                          301 Hubeny Drive,  Plantsville,  Connecticut, 
                          06479, UNITED STATES.
                        </p>
                        <p>9592129019</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-5">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p className="font-normal text-sm">
                      I want to include my company name in invoice
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Billing Address End */}

            {/* Company Name Start */}
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <div className="hidden md:flex  w-[42px] h-[40px] justify-center items-center rounded-full bg-primary-900 mx-auto mt-5">
                  <FaHouseUser className="text-white" size={15} />
                </div>
              </div>
              <div className="col-span-12 md:col-span-11 bg-white">
                <div className="p-5">
                <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[40px] flex md:hidden justify-center items-center rounded-full bg-primary-900 ">
                      <FaHouseUser  className="text-white" size={15} />
                    </div>
                    <h3 className="text-xl font-medium">Company Name <span>*</span></h3>
                  </div>
                  <div className="grid grid-cols-1 gap-5 mt-5">
                    <div className="px-4 py-5 bg-gray-100 rounded-md">
                      <div className="flex gap-4 items-center">
                       
                        <p className="text-sm font-medium">Test 4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Company Name End */}

          </div>
          <div className="md:col-span-1 w-full lg:px-10 text-textPrimary-100">
            <TotalPrice
              itemsCount={3}
              subTotal={"4,022.00"}
              totalAmount={"4,022.00"}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 mb-20 flex justify-center">
        <button className="bg-primary-900 text-white py-3 px-10 rounded-full">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
