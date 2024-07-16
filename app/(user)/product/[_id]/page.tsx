"use client";

import { ProductT } from "@/app/common/constants/type";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ImageMagnifier from "@/app/components/MagnifierImage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaPhoneAlt, FaStamp, FaWhatsapp } from "react-icons/fa";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type Props = {};

const ProductPage = ({ params }: { params: { _id: string } }) => {
  const [data, setData] = useState<ProductT[]>([]);
  const [mainImage, setMainImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/products.json");
      const json: ProductT[] = await response.json();
      const getProductDetail = json.find(
        (product) => product?._id === Number(params?._id)
      );
      if (getProductDetail) {
        setData([getProductDetail]);
        setMainImage(getProductDetail.productImages[0]);
        setLoading(false); // Set loading to false after data is fetched
      }
    }

    fetchData();
  }, [params]);

  return (
    <>
      <div className="md:p-4 bg-card text-card-foreground mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 md:p-2 py-2">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Suspense fallback={<LoadingSpinner />}>
                {loading ? ( // Show skeleton loading if loading
                  <div className="animate-pulse bg-gray-200 rounded-lg h-96 w-full"></div>
                ) : (
                  <ImageMagnifier
                    src={`/Image/products/${mainImage}.jpeg`}
                  />
                )}
              </Suspense>
            </div>
            <div className="flex mt-2 space-x-2 overflow-x-auto">
              {data[0]?.productImages.map((item, index) => (
                <img
                  key={index}
                  src={`/Image/products/${item}.jpeg`}
                  alt={`Gold bangle thumbnail ${index + 1}`}
                  className={`w-12 h-12 rounded-lg cursor-pointer transition-all ${
                    mainImage === item && "border-2 border-primary-900"
                  }`}
                  onClick={() => setMainImage(item)}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:p-2 py-2">
            {loading ? (
              // Skeleton loading while data is fetching
              <div className="animate-pulse bg-gray-200 rounded-lg pb-6 h-28 md:h-48 w-full"></div>
            ) : (
              // Actual content when data is loaded
              <>
                <h1 className="text-xl font-semibold">
                  Chamunda Bangle {data[0]?.productCode}
                </h1>
                <p className="text-muted-foreground text-sm font-light text-textPrimary-200">
                  Product Code: {data[0]?.productCode}
                </p>
                <p className="mt-1 text-xs text-green-600">
                  Availability: In stock
                </p>
                <div className="mt-3">
                  <span className="text-lg font-bold text-primary-900">
                    ₹ {data[0]?.grandTotal}
                  </span>
                </div>
                <div className="mt-4 flex space-x-4"></div>
                <div className="mt-1">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="border-b border-muted p-2 border-border-200 text-sm text-textPrimary-100">
                          Gold
                        </th>
                        <th className="border-b border-muted p-2 border-border-200 text-sm text-textPrimary-100">
                          Making
                        </th>
                        <th className="border-b border-muted p-2 border-border-200 text-sm text-textPrimary-100">
                          Tax
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-muted p-2 border-border-200 text-sm text-textPrimary-100">
                          ₹ {data[0]?.goldPrice}
                        </td>
                        <td className="border-b border-muted p-2 border-border-200 text-sm text-textPrimary-100">
                          ₹ {data[0]?.makingCharges}
                        </td>
                        <td className="border-b border-muted p-2 border-border-200 text-sm text-textPrimary-100">
                          ₹ {data[0]?.gst}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link
                  href={`https://wa.me/${9714314397}`}
                  className="mt-4 w-full md:w-1/2 xl:w-1/3 bg-green-700 text-white flex items-center  justify-center gap-3 py-2 rounded-xs"
                >
                  <FaWhatsapp size={20} className="text-white" /> Enquiry on
                  Whatsapp
                </Link>
                <div className="flex justify-between items-center flex-col xl:flex-row sm:gap-5 xl:gap-10 xl:p-4 border-b border-border-200 text-xs md:text-sm mt-12">
                  <div className="flex md:items-center justify-between w-full gap-10 md:gap-5  md:space-x-2 text-xs md:text-sm">
                    <span className="text-muted-foreground ">
                      Any Questions ? <br className="hidden md:block" /> Please
                      contact us at
                    </span>
                    <div className="flex items-center space-x-2 ">
                      <FaPhoneAlt />
                      <a
                        href="tel:9714314397"
                        className="text-primary font-semibold"
                      >
                        +91 9714314397
                      </a>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                    <FaPhoneAlt />
                      <span className="text-primary font-semibold">
                        +91 9167780916
                      </span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between w-full space-x-4 text-xs my-5 md:my-0">
                    <div className="text-center">
                      <span className="text-primary font-semibold">
                        100% Certified by
                      </span>
                      <br />
                      <span className="text-primary font-semibold">
                        International Standards
                      </span>
                    </div>
                    <Image
                      src="/svg/BIS-icon.svg"
                      alt="Hall mark BIS"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {loading ? (
        // Skeleton loading while data is fetching
        <div className="animate-pulse bg-gray-200 rounded-lg pb-6 h-28 md:h-48 w-full"></div>
      ) : (
        <div className="pb-6 md:p-6 bg-card text-card-foreground">
          <div className="mb-6 bg-gray-100 p-5 text-sm">
            <h2 className="text-center text-xl font-semibold mb-4">
              Product Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold mb-2">Basic Information</h3>
                <ul>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Product Type</span>
                    <span>Bangle</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Brands</span>
                    <span>Chamunda Jewellers</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Item package quantity</span>
                    <span>{data[0]?.quantity}</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Gender</span>
                    <span>Women</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Metal Information</h3>
                <ul>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Metal Purity</span>
                    <span>22 KT (916)</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Metal Colour</span>
                    <span className=" capitalize">{data[0]?.colour}</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Gross Weight (g)</span>
                    <span>8.653</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Net Weight (g)</span>
                    <span>1.430</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Weight Range</span>
                    <span>0.2-0.3 Grams</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Certification Details</h3>
                <ul>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Gold Certification</span>
                    <span>BIS Hallmark 916</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span className="font-medium">Hallmark License No</span>
                    <span>HMC-7790174629</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-popover text-popover-foreground p-6 bg-gray-100 p-5 text-sm">
            <div className="text-center mb-6">
              <h2 className="text-center text-xl font-semibold mb-4">
                Chamunda Jewellers Promise
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <VscWorkspaceTrusted size={45} />
                <p>Lifetime Maintenance</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <BsCalendar2DateFill size={45} />
                <p>14 Days Return Policy</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <HiDocumentMagnifyingGlass size={45} />
                <p>Complete Transparency</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <FaStamp size={45} />
                <p>BIS 916 Hallmarked</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
