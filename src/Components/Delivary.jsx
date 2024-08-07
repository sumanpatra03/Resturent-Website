/* eslint-disable no-unused-vars */
import React from "react";

const Delivary = () => {
  return (
    <div className="w-full py-16 px-4  mt-7">
      <h3 className="text-[#fbc531] font-bold text-2xl text-center mt-3">
        Quick App Delivery
      </h3>
      <div className="grid grid-cols-2 w-[70%] mx-auto my-10 gap-10">
        <img
          className="w-[650px]"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-green-500 lg:text-[30px] sm:text-[15px] md:text-[20px] ">
            Get the App
          </p>
          <h2 className=" sm:text-2xl md:text-3xl lg:text-5xl py-2 font-bold">
            Limitless Convenience on Demands
          </h2>
          <button className="bg-black lg:w-[150px]  md:w-[125px] sm:w-[100px] text-white rounded-md py-4 sm:text-[15px] lg:text-[20px] md:text-[17px] hover:text-[#fbc531] font-samibold">
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivary;
