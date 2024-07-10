import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-zinc-200 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image
            className="m-auto"
            alt="footer-logo"
            src="/Image/logo.png"
            width="253"
            height="75"
          />
        </div>
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold text-zinc-800">OTP</h2>
          <p className="text-sm text-zinc-500">To access Medivant Healthcare</p>
        </div>
        <form className="space-y-4">
          <div className="flex justify-between space-x-2">
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-zinc-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;