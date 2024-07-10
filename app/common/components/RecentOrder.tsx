"use client";
import Slider from "react-slick";
import React, { useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import ProductCard from "./ProductCard";
import { ProductT } from "../constants/type";
import { PRODUCT_LIST } from "../constants/data";
import ProductDetailsModal from "./ProductDetailsModal";

const RecentOrder = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [productList, setProductList] = useState<ProductT[]>(PRODUCT_LIST);
  const [productData, setProductData] = useState<ProductT | undefined>();

  const toggleModal = () => setShow((prev) => !prev);

  const handleOnClick = (data: ProductT) => {
    setProductData(data);
    toggleModal();
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-3xl font-medium">Recent Orders Products</h2>
      <hr className="h-[2px] border-[#E0E0E0] mt-5" />
      <div className="w-full flex justify-end items-center my-5">
        <div>
          <button
            className="bg-primary-900 p-3 rounded-full mr-2"
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickNext();
              }
            }}
          >
            <FaArrowLeft size={25} color="white" />
          </button>
          <button
            className="bg-primary-900 p-3 rounded-full"
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickPrev();
              }
            }}
          >
            <FaArrowRight size={25} color="white" />
          </button>
        </div>
      </div>

      <div className="mb-20">
        <Slider className="" {...settings} ref={sliderRef}>
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              handleClick={() => handleOnClick(product)}
              productDetails={product}
              setProductList={setProductList}
            />
          ))}
        </Slider>
      </div>

      {show && (
        <ProductDetailsModal toggleModal={toggleModal} data={productData} />
      )}
    </div>
  );
};

export default RecentOrder;
