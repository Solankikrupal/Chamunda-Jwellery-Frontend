"use client";
import ProductCard from "../common/components/ProductCard";
import { useEffect, useState } from "react";

import { ProductT } from "../common/constants/type";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
  const [data, setData] = useState<ProductT[]>([]);

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
            productDetails={product}
            loading={loading} // Pass loading state to ProductCard
          />
        ))}
      </div>
    </div>
  );
}
