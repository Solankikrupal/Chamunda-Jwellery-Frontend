import React from "react";

type Props = {};

const UserAddress = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col bg-gray-100 p-5 rounded-md">
          <div className="flex items-center justify-between">
            <p>Test4</p>
            <button className=" w-20 h-7 text-sm p-0  gap-5 px-2 bg-blue-500 rounded-md  text-center text-white text-md">
              Default
            </button>
          </div>
          <br />
          <address className="not-italic">
            301 Hubeny Hrive Plantsville,Connecticut, <br />
            60479, UNITED STATES. <br />
            9592129019
          </address>
        </div>
        <div className="flex flex-col bg-gray-100 p-5 rounded-md">
          <div className="flex items-center justify-between">
            <p>Test5</p>
            {/* <button className=" w-20 h-7 text-sm p-0 border-2 gap-5 px-2 bg-blue-500 rounded-md  text-center text-white text-md">
              Default
            </button> */}
          </div>
          <br />
          <address className="not-italic">
            301 Hubeny Hrive Plantsville,Connecticut, <br />
            60479, UNITED STATES. <br />
            9592129019
          </address>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
