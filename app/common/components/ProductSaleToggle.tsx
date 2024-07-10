import React from "react";

type Props = {
  saleProductType: number;
  handleChange: (val:number) => void;
};

const ProductSaleToggle: React.FC<Props> = ({
  saleProductType,
  handleChange,
}) => {
  return (
    <div className="flex items-center justify-between py-5 border-b border-border-100 mb-10 flex-wrap">
      <h1 className="text-xl md:text-3xl font-medium mb-4">{saleProductType === 0 ? 'Available for':'Pre-Book'} Sale Product</h1>
      <div className="flex  justify-end gap-2 mb-4 ">
        <button
          className={`btn text-xs md:text-base p-2  md:py-2 md:px-4 rounded-3xl ${
            saleProductType === 0
              ? "bg-primary-900 text-white "
              : "bg-white border border-gray-200 text-gray-200"
          }`}
          onClick={()=>handleChange(0)}
        >
          AVAILABLE FOR
        </button>
        <button
          className={`btn text-xs md:text-base p-2  md:py-2 md:px-4 rounded-3xl ${
            saleProductType === 1
              ? "bg-primary-900 text-white "
              : "bg-white border border-gray-200 text-gray-200"
          }`}
          onClick={()=>handleChange(1)}
        >
          PRE-BOOK
        </button>
      </div>
    </div>
  );
};

export default ProductSaleToggle;
