import React, {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useState,
} from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ProductT } from "../constants/type";
import Link from "next/link";
import LoadingSpinner from "@/app/components/LoadingSpinner";
type Props = {
  productDetails?: ProductT;
  index?: number;
  handleClick: () => void;
  setProductList: Dispatch<SetStateAction<ProductT[]>>;
  loading: boolean;
};

const ProductCard: React.FC<Props> = ({
  index,
  handleClick,
  productDetails,
  loading,
}) => {
  const [imgLoading, setImgLoading] = useState<boolean>(true); // State for loading indicator

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    const timer = setTimeout(() => {
      setImgLoading(false); // Set loading to false after timeout (simulating data loading)
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const handleImageLoad = () => {
    if (loading) {
      setImgLoading(false); // Update loading state when image is loaded
    }
  };

  return (
    <Link
      href={`/product/${productDetails?._id}`}
      className="rounded overflow-hidden shadow-lg bg-card text-card-foreground"
    >
      <div className="relative">
        {imgLoading ? (
          <div className=" h-80 overflow-hidden">
            <LoadingSpinner />
          </div>
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <div className=" h-80 overflow-hidden">
              <img
                className="w-full h-full transition-opacity object-cover object-center"
                src={`/Image/products/${productDetails?.productImages[0]}.jpeg`}
                alt="Yellow bangle on a gift box"
                onLoad={handleImageLoad}
                style={{
                  opacity: imgLoading ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          </Suspense>
        )}
        {/* Placeholder for image skeleton */}
        {imgLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse opacity-100"></div>
        )}
      </div>
      <div className="px-4 py-2">
        {imgLoading ? (
          <div className="animate-pulse">
            <div className="font-bold font-extrabold text-sm mb-2 text-primary-900 bg-gray-200 h-5 w-1/2"></div>
            <p className="text-xs text-textPrimary-200 bg-gray-200 h-3 w-1/4"></p>
          </div>
        ) : (
          <>
            <div className="font-bold font-extrabold text-sm mb-2 text-primary-900">
              ₹ {productDetails?.grandTotal}
            </div>
            <p className="text-xs text-textPrimary-200">
              SKU: {productDetails?.productCode}
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
