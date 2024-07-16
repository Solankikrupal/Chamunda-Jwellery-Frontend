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
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
  const [data, setData] = useState<ProductT[]>([]);

  const toggleModal = () => setShow((prev) => !prev);

  const handleToggle = (val: number) => {
    setProductType(val);
  };

  const handleOnClick = (data: ProductT) => {
    setProductData(data);
    toggleModal();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const json = await response.json();
        setData(json);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading state is updated even on error
      }
    }

    fetchData();
  }, []);

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-6">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            handleClick={() => handleOnClick(product)}
            productDetails={product}
            setProductList={setProductList}
            loading={loading} // Pass loading state to ProductCard
          />
        ))}
      </div>

      {show && (
        <ProductDetailsModal data={productData} toggleModal={toggleModal} />
      )}
    </div>
  );
}
