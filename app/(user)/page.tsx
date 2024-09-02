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
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const json = await response.json();
        setData(json);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading state is updated even on error
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-primary-900 text-primary-50 h-[100vh]">
        <div className="md:w-1/2 flex flex-col justify-center px-8">
          <h2 className="text-xl font-normal text-primary font-baskervville">
            MAGICAL BEAUTY
          </h2>
          <h1 className="text-7xl text-primary mt-2 font-baskervville">
            DREAM <br /> COLLECTION
          </h1>
          <p className="text-muted-foreground mt-4 font-baskervville">
            The dream collection is jewelry that emphasizes our individuality
            and exudes beauty and style.
          </p>
          <a
            href="/product"
            className="mt-6 inline-block w-1/3 text-primary-900 text-center bg-primary-50 text-secondary-foreground hover:bg-secondary/80 px-4 py-2 font-baskervville"
          >
            FIND OUT MORE
          </a>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 h-full">
          <img
            src="/Image/hero2.jpg"
            alt="Dream Collection Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <section className="bg-primary-50 text-primary-900 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">MEET US</h2>
        <p className="text-muted-foreground mb-6 w-[50%] m-auto">
          We are an exclusive jewelry store that offers the unusual and handmade
          works of art. Our passion for jewelry is visible in every product we
          present. We carefully select the highest quality materials to ensure
          not only the aesthetics, but also the durability of our products.
        </p>
        <a
          href="/product"
          className="bg-primary-900 text-primary-50 hover:bg-primary/80 px-4 py-2 "
        >
          FIND OUT MORE
        </a>
      </section>
      <div className="flex flex-col gap-3 md:flex-row bg-background">
        <div className="md:w-1/2 ">
          <img
            src="/Image/hero1.jpg"
            alt="Elegant woman with jewelry"
            className="w-full h-auto "
          />
        </div>
        <div className="md:w-1/2  flex items-center justify-center">
          <img
            src="/Image/here-section.jpg"
            alt="Gold necklace on a marble surface"
            className="w-full h-auto "
          />
        </div>
      </div>
      <div className="bg-background p-8">
        <h2 className="text-3xl font-bold mb-6">NEW ERA INSPIRATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.slice(0,4).map((item,index)=>(
            <div key={index} className="bg-card p-4 shadow-md">
            <img
              className="w-full h-48 object-cover"
              src={`/Image/products/${item?.productImages[0]}.jpeg`}
              alt="W.Kruk gold necklace"
            />
            {/* <h3 className="text-lg font-semibold mt-2">W.Kruk gold necklace</h3> */}
            <p className="text-muted-foreground mt-3">SKU: {item?.productCode}</p>
            <p className="font-bold font-extrabold text-sm mb-2 text-primary-900">₹ {item?.grandTotal}</p>
          </div>))}
        </div>
      </div>
      {/* <div className="bg-background p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          PEARL COLLECTION
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative">
            <img
              src="https://placehold.co/300x400?text=Model"
              alt="Model showcasing jewelry"
              className="w-full h-auto  shadow-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70 ">
              <p className="text-lg font-semibold">
                Gold necklace with pearls and diamonds
              </p>
              <p className="text-xl font-bold">$45 990</p>
            </div>
          </div>
          <div className="bg-card  p-4 shadow-md">
            <img
              src="https://placehold.co/300x300?text=Necklace"
              alt="Gold necklace with pearls"
              className="w-full h-auto  mb-2"
            />
            <p className="text-lg font-semibold">
              Gold earrings on a chain with pearls
            </p>
            <p className="text-xl font-bold">$899</p>
          </div>
          <div className="bg-card  p-4 shadow-md">
            <img
              src="https://placehold.co/300x300?text=Earrings"
              alt="Gold earrings"
              className="w-full h-auto  mb-2"
            />
            <p className="text-lg font-semibold">
              Cascading gold necklace with pearls
            </p>
            <p className="text-xl font-bold">$899</p>
          </div>
          <div className="bg-card  p-4 shadow-md">
            <img
              src="https://placehold.co/300x300?text=Earrings"
              alt="Earrings"
              className="w-full h-auto  mb-2"
            />
            <p className="text-lg font-semibold">Gold earrings with pearls</p>
            <p className="text-xl font-bold">$899</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
