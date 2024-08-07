/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";


const Header = ({count}) => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white">
    <div className=" flex justify-between p-5 text-[18px] font-semibold drop-shadow-sm border-b relative">
      <div>
        <p>
          Yumi<span className="text-[#fbc531]">Food</span>
        </p>
      </div>
      <div className="">
        <ul className="sm:flex  gap-10 hidden  cursor-pointer   ">
          <Link to="/">
            <li className="hover:text-[#fbc531]">Home</li>
          </Link>
          <Link to="/AboutUs">
            <li className="hover:text-[#fbc531]">About Us</li>
          </Link>
          <Link to="/Ourfood">
            <li className="hover:text-[#fbc531]">Our Food</li>
          </Link>
          <Link to="/Signin">
            <li className="hover:text-[#fbc531]">Sing in</li>
          </Link>
        </ul>
      </div>
      {sideNav ? (
        <div className="bg-[#f5f6fa] flex justify-center items-center  absolute w-[300px] top-0 right-0 h-[100vh] z-10">
          <RxCross2
            className=" absolute top-3 right-3 size-7 "
            onClick={() => {
              setSideNav(!sideNav);
            }}
          />
          <ul className="flex  gap-10   cursor-pointer flex-col  ">
            <Link to="/">
              <li
                className="hover:text-[#fbc531] "
                onClick={() => {
                  setSideNav(!sideNav);
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/AboutUs">
              <li
                className="hover:text-[#fbc531]"
                onClick={() => {
                  setSideNav(!sideNav);
                }}
              >
                About Us
              </li>
            </Link>
            <Link to="/Ourfood">
              <li
                className="hover:text-[#fbc531]"
                onClick={() => {
                  setSideNav(!sideNav);
                }}
              >
                Our Food
              </li>
            </Link>
            <Link to="/Signin">
              <li
                className="hover:text-[#fbc531]"
                onClick={() => {
                  setSideNav(!sideNav);
                }}
              >
                Sing in
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        " "
      )}
      <div className=" gap-3 items-center">
        <p>
          <GiHamburgerMenu
            className="cursor-pointer block sm:hidden"
            size={25}
            onClick={() => {
              setSideNav(!sideNav);
            }}
          />
        </p>
        <p>
          {count}
          <IoCartSharp size={25} />
        </p>
      </div>
    </div>
    </div>
  );
};

export default Header;
