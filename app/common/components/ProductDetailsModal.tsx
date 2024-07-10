import useWidth from "@/app/configs/useWidth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { ProductT } from "../constants/type";

type Props = {
  data: ProductT | undefined;
  toggleModal: () => void;
  collapsed?: string;
  title?: string;
};

const ProductDetailsModal: React.FC<Props> = ({
  toggleModal,
  collapsed,
  title,
  data,
}) => {
  const { width, breakpoints } = useWidth();

  const [quantity, setQuantity] = useState<number>(0);

  const switchHeaderClass = () => {
    if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleInput = (op: string) => {
    setQuantity((prevQuantity) => {
      if (op === "INCREASE") {
        return prevQuantity + 1;
      } else if (op === "DECREASE" && prevQuantity > 0) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  console.log(data);

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto backdrop-blur-[1px] bg-opacity-40 bg-black-500 ${
        width && width > breakpoints.lg ? switchHeaderClass() : ""
      }`}
    >
      <div className="relative w-full max-w-5xl max-h-full">
        <div className="relative animate-slide-down bg-white rounded-lg shadow  mt-[5rem] z-50 pb-10">
          <div className="flex items-start justify-between p-4  rounded-t ">
            <h3 className="text-xl font-semibold text-title  uppercase">
              {title && title}
            </h3>
            <button
              className=" w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center"
              onClick={toggleModal}
            >
              <IoCloseSharp
                size={25}
                className="text-gray-200  cursor-pointer"
              />
            </button>
          </div>

          <div className="flex items-center md:items-start justify-center flex-col md:flex-row gap-10 px-12">
            <div className="flex justify-between items-start ">
              <div className="relative w-[142px] h-[213px]  md:w-[242px] md:h-[313px] lg:w-[342px] lg:h-[413px] bg-gray-100 rounded-xl overflow-hidden">
                <div className="flex justify-between items-center mb-2 absolute top-0 left-0">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 ">
                    5mg/mL 10mL
                  </span>
                </div>
                <Image
                  src="/Image/productImage.png"
                  alt="Bacteriostatic Water for Injection"
                  fill
                  objectFit="contain"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <span className=" bg-primary-800 text-white font-medium text-[15px] px-2 py-1 rounded-sm">
                Non-Returnable
              </span>
              <h2 className="mt-2 text-2xl font-normal text-textPrimary-100">
                {data?.name ? data.name : "--"}
              </h2>
              <div className="mt-2 text-4xl font-bold text-blue-600 pt-4 border-t border-border-200">
                ${data?.basePrice ? data.basePrice : "--"}
              </div>
              <div className="flex items-center gap-5 py-6 border-b border-border-200">
                <div className="flex items-center border border-border rounded-3xl border-border-100">
                  <button
                    className="px-2 py-1 text-border-100 font-semibold"
                    onClick={(e) => {
                      handleInput("DECREASE");
                    }}
                  >
                    -
                  </button>
                  <input
                    id={`inputQty`}
                    value={data?.quantity ? data.quantity : "--"}
                    className="w-8 text-center border-none focus:ring-0"
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      if (!isNaN(newQuantity)) {
                        setQuantity(newQuantity);
                      }
                    }}
                  />
                  <button
                    className="px-2 py-1 text-border-100 font-semibold"
                    onClick={(e) => {
                      handleInput("INCREASE");
                    }}
                  >
                    +
                  </button>
                </div>
                <button className="bg-blue-500 text-xs text-white px-4 py-2 rounded-3xl">
                  ADD TO CART
                  <FaShoppingCart
                    className=" text-white inline mx-2"
                    size={15}
                  />
                </button>
              </div>
              <div className="mt-4 text-sm text-textPrimary">
                <p className="font-medium text-base">
                  You can save money by buying this product in bulk
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {data?.links &&
                    data.links.length > 0 &&
                    data?.links.map((link, i) => (
                      <li className=" text-textPrimary-100 font-normal" key={i}>
                        {link}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
