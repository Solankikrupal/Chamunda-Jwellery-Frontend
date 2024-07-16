import Image from "next/image";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="min-h-[200px] bg-primary-900 flex items-center justify-center text-border-200">
      <div className="container px-5 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 border-b border-gray-200 py-5 xl:p-10">
          <div className="col flex items-start justify-center flex-col sm:order-1 lg:order-first">
            <p className=" text-justify">
              We make all kinds of DESIGNER gold & silver jewellery 100% BIS
              hallmarked jewellery government approved ( just order )in business
              since 1991.
            </p>
          </div>
          <div className="col text-center flex items-center justify-center order-first ">
            <div className="flex items-center space-x-2">
              <Image
                src="/svg/logoFooterVibrantV3.svg"
                alt=""
                width={103}
                height={134}
              />
            </div>
          </div>
          <div className="col flex items-start justify-center flex-col gap-5">
            <div className=" flex items-start gap-5 text-sm">
              <FaLocationDot className="inline" size={25} />
              <address className="not-italic m-0  font-light capitalize text-justify">
                Sanghdiya street, zapa road, nearby sukhnath mahadev temple,
                <br className="hidden lg:block" />
                Diu, Dadra and Nagar Haveli and Daman and Diu 362520
              </address>
            </div>
          </div>

          
            <div className=" col-span-3 flex items-center justify-between">
              <div className="flex items-start gap-5">
                <FaPhone className="inline mt-1" size={20} />
                <a
                  className="m-0 text-sm font-light"
                  href="tel:+1-888-201-0688"
                >
                  +91 9714314397
                </a>
              </div>
              <div className="flex items-start gap-5">
                <IoMdMail className="inline mt-1" size={20} />
                <a
                  className="m-0 text-sm font-light"
                  href="mailto:chamundajewellersdiu@gmail.com"
                >
                  chamundajewellersdiu@gmail.com
                </a>
              </div>
            </div>
          
        </div>
        <div className="text-xs text-center py-5 cursor-none">
          <p>© 2024 Chamunda Jewellers Diu, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
