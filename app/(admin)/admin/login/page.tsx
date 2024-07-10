"use client";
import { doLogin, loginFilepath } from "@/app/Auth";
import { AxiosPost } from "@/app/configs/common/axiosService";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-toastify";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await AxiosPost("/api/auth/login", { email, password ,fcmToken: 'FknxclkvkClksjfksdfMshfdsjkdfhToken', deviceType: 'web'});
      if (response && typeof response !== 'string' && response.statusCode === 200 ) {
        if(response?.data[0]?.role?.roleName === 'Admin'){
          console.log('response====>', response)
          await loginFilepath(response?.filePath);
          await doLogin(response.data[0],'adminSession'); // Perform login
          router.push('/admin'); // Redirect to the home page
          toast.success(`${response.message}`, { autoClose: 2000 }); // Show success toast
        }else{
          toast.error(`Admin login only`, { autoClose: 2000 }); // Show success toast
        }
      }
    } catch (error) {
      console.log("error", error);
      toast.error('Something Went Wrong', { toastId: 'nodata', autoClose: 1000 }); // Show error toast
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-blue-200">
        <div className="flex justify-center mb-6">
          <Image
            className="m-auto"
            alt="footer-logo"
            src="/Image/logo.png"
            width="253"
            height="75"
          />
        </div>
        {/* <h2 className="text-2xl font-bold text-left mb-2">Welcome Back</h2> */}
        <p className="text-left text-zinc-600 mb-6">
          To access ADMIN only
        </p>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-700 mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="test@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-zinc-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="xxxxxxxxxxxx"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            SIGN IN
          </button>
        </form>
        {/* <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
