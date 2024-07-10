import Image from "next/image";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="min-h-[200px] bg-primary-900 flex items-center justify-center text-border-200">
      <div className="container px-5 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 border-b border-gray-200 p-10">
          <div className="col flex items-start justify-center flex-col sm:order-1 lg:order-first">
            <div className=" flex items-start mt-5 gap-5">
              <FaLocationDot className="inline  mt-2" size={20} />
              <address className="not-italic m-0 text-lg font-light">
                Chandler: 158 S Kyrene Rd, Chandler,{" "}
                <br className="hidden lg:block" />
                AZ 85226
              </address>
            </div>
            <div className=" flex items-start mt-5 gap-5">
              <FaLocationDot className="inline mt-2" size={20} />
              <address className="not-italic m-0 text-lg font-light">
                Phoenix: 24416 N 19th Ave Phoenix,
                <br className="hidden lg:block" />
                AZ 85085
              </address>
            </div>
          </div>
          <div className="col text-center flex items-center justify-center order-first ">
            <div className="flex items-center space-x-2">
              <Image
                src="/svg/logoFooterVibrantV2.svg"
                alt=""
                width={273}
                height={334}
              />
            </div>
          </div>
          <div className="col flex items-start justify-center flex-col lg:pl-12 ">
            <div className="flex items-start gap-5">
              <FaPhone className="inline mt-1" size={20} />
              <a className="m-0 text-lg font-light" href="tel:+1-888-201-0688">
                +1 (888) 201-0688
              </a>
            </div>
            <div className="flex items-start mt-5 lg:mt-12 gap-5">
              <IoMdMail className="inline mt-1" size={20} />
              <a
                className="m-0 text-lg font-light"
                href="mailto:portal@medivanthealth.com"
              >
                portal@medivanthealth.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs text-center py-5 cursor-none">
          <p>© 2024 Medivant Healthcare, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
