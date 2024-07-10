import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md border border-blue-500 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Image
            className="m-auto"
            alt="footer-logo"
            src="/Image/logo.png"
            width="253"
            height="75"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">Forgot Password</h2>
        <p className="text-muted-foreground mb-4">
          To access Medivant Healthcare
        </p>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700"
        >
          Enter email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email Address"
          className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default page;
