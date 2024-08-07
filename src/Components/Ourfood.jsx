/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { mealData } from "../Data/data";

const Ourfood = ({ handelAdd }) => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-[100px]">
        <div>
          <h2 className="text-center text-[#fbc531] text-3xl font-bold py-5">
            Our Food{" "}
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6">
          {mealData.map((meal) => (
            <div
              className="flex justify-center flex-col items-center "
              key={meal.id}
            >
              <div>
                <img
                  src={meal.image}
                  alt=""
                  className="w-[200px] h-[200px] rounded-md object-cover"
                />
              </div>
              <div className="flex justify-center py-2 px-4 flex-col items-center">
                <p className="text-xl font-semibold uppercase">{meal.name}</p>
                <p className="text-xl font-semibold uppercase">{meal.price}</p>
                <button
                  className="bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531] font-samibold"
                  onClick={handelAdd}
                >
                  Add to Cart{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ourfood;
