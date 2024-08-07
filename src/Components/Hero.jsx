/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa";

const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setSlider] = useState(0);

  const handelPlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handelMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const slideclear = setInterval(() => {
      handelPlus();
    }, 2000);

    return () => clearInterval(slideclear);
  }, [slider]);
  return (
    <div className="mt-[100px]">
      <div className="w-[90%] mx-auto h-[70vh] my-5 relative">
        {imgData.map((item, i) => (
          <div key={i} className={`${slider == i ? "block" : "hidden"}`}>
            <img
              src={item.url}
              alt=""
              className="w-full h-[80vh] rounded-2xl object-cover"
            />
          </div>
        ))}

        <div className="w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl"></div>
        <p className="absolute top-[50%] text-center  w-full font-semibold text-white text-[20px] md:text-3xl">
          Welcome to the world of Testy & Fresh Food
          </p>

        <div className="flex justify-between w-full px-5 absolute top-[50%] text-white">
          <FaChevronLeft
            size={30}
            className="cursor-pointer"
            onClick={handelPlus}
          />
          <FaAngleRight
            size={35}
            className="cursor-pointer"
            onClick={handelMinus}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
