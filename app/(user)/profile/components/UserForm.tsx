'use client';
import Image from "next/image";
import React, { useState } from "react";
import AddEditUser from "./AddEditUser";
import AddEditPasswordChange from "./AddEditPasswordChange";

type Props = {};

const UserForm = (props: Props) => {
    const [formType, setFormType] = useState<number>(0);
    const handleToggle = (val:number) => {
        setFormType(val);
      };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="w-32 h-32 overflow-hidden">
            <Image
              src="/Image/userAvatar.jpeg"
              width={119}
              height={125}
              className=""
              alt="User Image"
            />
          </div>
          <h5 className="flex text-xl font-medium">Shawn C</h5>
        </div>
        <div className="flex items-end mx-5">
          <button className="p-0  w-24 h-10 gap-5 px-2 bg-blue-500 rounded-full text-white text-md">
            Edit
          </button>
        </div>
      </div>
      <div className="mt-14 flex gap-8 border-b-2  border-gray-100">
        <button className={` text-base mb-2 ${formType === 0 ? 'text-blue-500':'text-gray-200' }`} onClick={()=>setFormType(0)}>Account Detail</button>
        <button className={` text-base mb-2 ${formType === 1 ? 'text-blue-500':'text-gray-200' }`}  onClick={()=>setFormType(1)}>Change Password</button>
      </div>
      <div className="w-full h-full mt-4">
       {formType === 0 && <AddEditUser/>}
       {formType === 1 && <AddEditPasswordChange/>}
      </div>
    </>
  );
};

export default UserForm;
