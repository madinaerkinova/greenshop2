import React from "react";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import post4 from "../assets/images/post4.png";

const BlogPosts = () => {
  const posts = [
    {
      date: "September 12",
      readTime: "Read in 6 minutes",
      title: "Cactus & Succulent Care Tips",
      description:
        "Cacti are succulents are easy care plants for any home or patio.",
      imgSrc: post1,
    },
    {
      date: "September 13",
      readTime: "Read in 2 minutes",
      title: "Top 10 Succulents for Your Home",
      description: "Best in hanging baskets. Prefers medium to high light.",
      imgSrc: post2,
    },
    {
      date: "September 15",
      readTime: "Read in 3 minutes",
      title: "Cacti & Succulent Care Tips",
      description:
        "Cacti and succulents thrive in containers and because most are slow growers...",
      imgSrc: post3,
    },
    {
      date: "September 15",
      readTime: "Read in 2 minutes",
      title: "Best Houseplants Room by Room",
      description: "The benefits of houseplants are endless. In addition to...",
      imgSrc: post4,
    },
  ];

  return (
    <div className="text-center py-12 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Blog Posts</h2>
      <p className="text-gray-600 mb-8">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="flex flex-wrap justify-around gap-3">
        {posts.map((post, index) => (
          <div
            className="bg-spinach rounded-lg overflow-hidden w-72"
            key={index}
          >
            <img src={post.imgSrc} alt={post.title} className="w-full h-auto" />
            <div className="p-4">
              <p className="text-primary">
                {post.date} | {post.readTime}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 my-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a href="#" className="text-green-500 font-bold">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
