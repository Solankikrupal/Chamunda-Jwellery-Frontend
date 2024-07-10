import React, { Dispatch, SetStateAction, useState } from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ProductT } from "../constants/type";
import Link from "next/link";

type Props = {
  productDetails?: ProductT;
  index?: number;
  handleClick: () => void;
  setProductList: Dispatch<SetStateAction<ProductT[]>>;
};

const ProductCard: React.FC<Props> = ({
  index,
  handleClick,
  productDetails,
}) => {

  const [changeImage,setChangeImage] = useState<boolean>(false)

  return (
    <Link href={'product'} className="w-full mx-auto bg-card text-card-foreground border border-border-100 shadow-sm rounded-sm p-3 overflow-hidden">
    <div className="relative bg-white transition-all cursor-pointer" onMouseEnter={()=>setChangeImage(true)} onMouseLeave={()=>setChangeImage(false)}>
      <Image src="/Image/product01.webp" alt="" width={200} height={200} className={`w-full h-auto transition-all ${changeImage && 'hidden'}`} />
      <Image src="/Image/product02.webp" alt="" width={200} height={200} className={`w-full h-auto transition-all ${!changeImage && 'hidden'}`} />
    </div>
    <div className="p-4">
      {/* <p className="text-destructive text-sm font-semibold">Only 1 left in stock</p> */}
      <h2 className=" text-xs font-semibold mt-2 text-textPrimary-200">Glamorous Floral Diamond Stud Earrings</h2>
      <p className=" text-xs font-semibold mt-1 text-textPrimary-200">₹ 269219</p>
    </div>
  </Link>
  );
};

export default ProductCard;
