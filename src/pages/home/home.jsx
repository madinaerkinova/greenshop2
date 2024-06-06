import React from "react";
import Slider from "react-slick";

import image from "../../assets/images/images1.png";

import FlowersOption from "../../component/FlowersOption";
import Banners from "../../component/Banners";
import BlogPosts from "../../component/BlogPosts ";
import { useSelector } from "react-redux";
export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "LET'S MAKE A BETTER PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
      images: [image],
    },
    {
      title: "STYLING TRENDS & MUCH MORE",
      description:
        "Discover the latest in styling trends with our wide range of plants. Create your own green space at home!",
      images: [image],
    },
    {
      title: "BRING NATURE INDOORS",
      description:
        "Turn your home into a green paradise with our beautiful and affordable plants. Shop now and bring nature indoors!",
      images: [image],
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-12 px-6">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex  p-8 slide">
              <div className="flex-[.6] pr-8">
                <h1 className="text-[64px] font-bold mb-4 text-secondary">
                  LET'S MAKE A BETTER{" "}
                  <span className=" text-[#46a455]">PLANET</span>
                </h1>
                <p className="text-lg mb-8">{slide.description}</p>
                <button className="bg-primary text-white hover:opacity-85 duration-300 transition-all px-[27px] py-[11px] rounded">
                  Shop Now
                </button>
              </div>
              <div className="flex-[.4] flex justify-center items-center">
                <div className="flex items-end">
                  <img
                    src={slide.images[0]}
                    alt={`Slide ${index + 1} Large`}
                    className="w-[400px] mb-12"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <FlowersOption />
        <Banners />
        <BlogPosts />
      </div>
    </section>
  );
};
