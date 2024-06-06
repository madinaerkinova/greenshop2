import React from "react";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import { FaArrowRight } from "react-icons/fa";

export const Banners = () => {
  return (
    <div className="flex justify-center items-center mb-10 space-x-10">
      <div className="flex items-center mx-4 space-x-6">
        <div className="flex-shrink-0">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-left ml-6">
          <h2 className="text-2xl text-gray-800 font-bold">
            SUMMER CACTUS & SUCCULENTS
          </h2>
          <p className="text-gray-600 my-2">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button className="bg-[green] text-white px-4 py-2 rounded mt-4 flex items-center">
            Find More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex items-center mx-4 space-x-6">
        <div className="flex-shrink-0">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-left ml-6">
          <h2 className="text-2xl text-gray-800 font-bold">
            STYLING TRENDS & MUCH MORE
          </h2>
          <p className="text-gray-600 my-2">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <button className="bg-[green] text-white px-4 py-2 rounded mt-4 flex items-center">
            Find More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
