"use client";
import ProductCard from "../common/components/ProductCard";
import ProductDetailsModal from "../common/components/ProductDetailsModal";
import ProductSaleToggle from "../common/components/ProductSaleToggle";
import { useEffect, useState } from "react";
import { PRODUCT_LIST } from "../common/constants/data";
import { ProductT } from "../common/constants/type";

export default function Home() {
  const [productList, setProductList] = useState<ProductT[]>(PRODUCT_LIST);
  const [productData, setProductData] = useState<ProductT | undefined>();
  const [saleProductType, setProductType] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const toggleModal = () => setShow((prev) => !prev);

  const handleToggle = (val: number) => {
    setProductType(val);
  };

  const handleOnClick = (data: ProductT) => {
    setProductData(data);
    toggleModal();
  };

  // async function handleSubmit() {
    
  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     console.log('response', response)
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log('first',data.message);
  //   } catch (error) {
  //     console.error('Failed to fetch the message:', error);
  //   }
  // }

  // useEffect(()=>{
  //   handleSubmit();
  // },[])

  return (
    <div className="py-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-6">
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            handleClick={() => handleOnClick(product)}
            productDetails={product}
            setProductList={setProductList}
          />
        ))}
      </div>

      {show && (
        <ProductDetailsModal data={productData} toggleModal={toggleModal} />
      )}
    </div>
  );
}
