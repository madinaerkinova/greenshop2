import React from "react";
import Cactus1 from "../assets/images/cactus1.jpg"; 
import Cactus2 from "../assets/images/cactus2.jpg";

const FooterTop = () => {
  return (
    <div className="mt-[100px] bg-[#FBFBFB] py-5 flex justify-between items-center">
      <div className="px-8 border-r-2 border-tail-300 transition-transform transform hover:scale-105">
        <img src={Cactus1} alt="cactus1" className="mb-4" />
        <h4 className="font-semibold text-[18px] py-2">Garden Care</h4>
        <p className="text-gray-500 mb-4">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="px-8 border-r-2 border-tail-300 transition-transform transform hover:scale-105">
        <img src={Cactus1} alt="cactus1" className="mb-4" />
        <h4 className="font-semibold text-[18px] py-2">Plant Renovation</h4>
        <p className="text-gray-500 mb-4">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="px-8 mr-[50px] transition-transform transform hover:scale-105">
        <img src={Cactus2} alt="cactus2" className="mb-4" />
        <h4 className="font-semibold text-[18px] py-2">Watering Garden</h4>
        <p className="text-gray-500 mb-4">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="px-8 transition-transform transform hover:scale-105">
        <h4 className="font-semibold text-[20px] pb-2 text-start">
          Would you like to join newsletters?
        </h4>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="w-[270px] px-5 py-4 rounded-l-lg outline-none"
            placeholder="Enter your email address.."
          />
          <button className="px-5 py-4 rounded-r-lg bg-green-600 text-white">
            Join
          </button>
        </div>
        <p className="text-gray-500 mb-2">
          We usually post offers and challenges in the newsletter. We’re your
          online houseplant destination. We offer a wide range of houseplants
          and accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
