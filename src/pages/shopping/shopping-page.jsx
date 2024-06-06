import React, { useState } from "react";
import { Data } from "../../../data";
import Slider from "react-slick";
import { CardMain } from "../../component/card-main";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom"; 
import plant1 from "../../assets/images/plant1.png";
import plant2 from "../../assets/images/plant2.png";
import post1 from "../../assets/images/post1.png";
import post4 from "../../assets/images/post4.png";

export const ShoppingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const newData = Data.slice(1, 15);

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(plant1);
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    console.log("Item added to cart with quantity:", quantity);
    
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const product = {
    name: "Barberton Daisy",
    price: "$119.00",
    reviews: 19,
    shortDescription:
      "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
    sizes: ["S", "M", "L", "XL"],
    sku: "1995751877966",
    categories: ["Potter Plants"],
    tags: ["Home", "Garden", "Plants"],
    images: [plant1, plant2, post4, post1],
  };

  return (
    <>
      <section className="pt-[100px] pb-[80px]">
        <div className="container mx-auto flex">

          <div className="flex-1 gap-4 flex  items-center">
            <div className="flex flex-col items-center mb-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-20 h-20 mb-2 cursor-pointer ${mainImage === image ? 'border-2 border-green-500' : ''}`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
            <div>
              <img src={mainImage} alt={product.name} className="w-96 h-96 object-cover" />
            </div>
          </div>

          <div className="flex-1 ml-6">
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-lg mb-1">{product.price}</p>
            <p className="text-sm mb-4 text-yellow-500">
              ★★★★☆ {product.reviews} Customer Review{product.reviews > 1 ? "s" : ""}
            </p>
            <p className="mb-4">{product.shortDescription}</p>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Size:</h4>
              <div className="flex">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-4 py-2 mr-2 rounded text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <button
                onClick={decrementQuantity}
                className="bg-green-500 text-white px-3 py-1 rounded-l"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={incrementQuantity}
                className="bg-green-500 text-white px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
            <div className="flex mb-4">
              <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white hover:opacity-85 duration-300 transition-all px-6 py-2 rounded mr-4"
              >
                Buy Now
              </button>
              <button
                onClick={()=>navigate('/checkout') }
                className="bg-green-500 text-white hover:opacity-85 duration-300 transition-all px-6 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
            <div className="mb-4">
              <p className="text-sm">
                <strong>SKU:</strong> {product.sku}
              </p>
              <p className="text-sm">
                <strong>Categories:</strong> {product.categories.join(", ")}
              </p>
              <p className="text-sm">
                <strong>Tags:</strong> {product.tags.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-8">
          <h2 className="text-xl font-bold text-primary mb-4">Product Description</h2>
          <p className="mb-4">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla neque nec est tristique auctor. Donec non est et libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
          <p className="mb-4">
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
          </p>
          <h3 className="text-lg font-bold mb-2">Living Room</h3>
          <p className="mb-4">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h3 className="text-lg font-bold mb-2">Dining Room</h3>
          <p className="mb-4">
            The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
          </p>
          <h3 className="text-lg font-bold mb-2">Office</h3>
          <p className="mb-4">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section className="pt-[100px] pb-[80px]">
        <div className="container">
          <h2 className="text-base font-bold text-primary mb-[11px]">
            Related Products
          </h2>
          <span className="block h-[1px] bg-primary mb-10 w-full"></span>
          <Slider {...settings} className="gap-5">
            {newData.map((item) => (
              <div key={nanoid()} className="pr-4 mb-6">
                <CardMain {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
