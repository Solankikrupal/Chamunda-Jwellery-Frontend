import { FaUserCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";

type Props = {
  step: number;
};

const CheckoutStep = ({ step }: Props) => {
  return (
    <>
      <ol className="flex items-center max-w-3xl mx-auto">
        <li className="w-full">
          <div
            className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-900 after:border-4 after:inline-block ${
              step === 1 || step === 2 || step === 3
                ? "after:border-primary-900"
                : "after:border-[#E0E0E0]"
            }`}
          >
            <span
              className={`flex items-center justify-center w-12 md:w-20 h-12 md:h-20 rounded-full lg:h-20 lg:w-20 shrink-0 ${
                step === 1 || step === 2 || step === 3
                  ? "bg-primary-900"
                  : "bg-[#4F4F4F66]"
              }`}
            >
              <FaLocationDot className="text-white text-xl md:text-3xl" />
            </span>
          </div>
          <p
            className={`font-normal text-base mt-3 -ml-1 md:ml-2 hidden md:block ${
              step === 1 || step === 2 || step === 3
                ? "text-primary-900"
                : "text-[#4F4F4F66]"
            }`}
          >
            Address
          </p>
        </li>
        <li className="w-full">
          <div
            className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${
              step === 2 || step === 3
                ? "after:border-primary-900"
                : "after:border-[#E0E0E0]"
            }`}
          >
            <span
              className={`flex items-center justify-center w-12 md:w-20 h-12 md:h-20 rounded-full lg:h-20 lg:w-20 shrink-0 ${
                step === 2 || step === 3 ? "bg-primary-900" : "bg-[#4F4F4F66]"
              }`}
            >
              <MdShoppingCartCheckout className="text-white text-xl md:text-3xl" />
            </span>
          </div>
          <p
            className={`font-normal text-base mt-3 -ml-2 md:ml-2 hidden md:block ${
              step === 2 || step === 3 ? "text-primary-900" : "text-[#4F4F4F66]"
            }`}
          >
            Dispatch
          </p>
        </li>
        <li className="">
          <div className="flex items-center">
            <span
              className={`flex items-center justify-center w-12 md:w-20 h-12 md:h-20 rounded-full lg:h-20 lg:w-20 shrink-0 ${
                step === 3 ? "bg-primary-900" : "bg-[#4F4F4F66]"
              }`}
            >
              <FaUserCheck className="text-white text-xl md:text-3xl" />
            </span>
          </div>
          <p
            className={`font-normal text-base mt-3 -ml-20 md:-ml-16 text-nowrap hidden md:block ${
              step === 3 ? "text-primary-900" : "text-[#4F4F4F66]"
            }`}
          >
            Review Order & Make Payment
          </p>
        </li>
      </ol>
    </>
  );
};

export default CheckoutStep;
