'use client'
import Image from "next/image";
import React, { useState } from "react";

type Post = {
  image: string;
  title: string;
  content: string;
  date: string;
};

type PostsData = {
  [key: string]: Post[];
};

const Posts = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Defi");

  const categories = ["Defi", "Airdrops", "Memecoins"];

  const postsData: PostsData = {
    Defi: [
      {
        image: "/news2.svg",
        title: "Latest DeFi Protocol Launch",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 1st"
      },
      {
        image: "/news3.svg",
        title: "DeFi Yields Soar",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 2nd"
      },
      {
        image: "/news4.svg",
        title: "New DeFi Integration",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 3rd"
      }
    ],
    Airdrops: [
      {
        image: "/news2.svg",
        title: "Major Protocol Airdrop",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 4th"
      },
      {
        image: "/news3.svg",
        title: "Community Airdrop Guide",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 5th"
      },
      {
        image: "/news4.svg",
        title: "Upcoming Airdrop Analysis",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 6th"
      }
    ],
    Memecoins: [
      {
        image: "/news2.svg",
        title: "New Memecoin Trends",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 7th"
      },
      {
        image: "/news3.svg",
        title: "Memecoin Market Analysis",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 8th"
      },
      {
        image: "/news4.svg",
        title: "Community Memecoin Event",
        content: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        date: "Dec 9th"
      }
    ]
  };

  return (
    <div className="py-6 px-4 my-8 w-[92%]">
      <h2 className="text-[35px] text-primary font-thin">Building</h2>
      <div className="relative w-full h-[509px] bg-purple_background bg-cover rounded-xl py-4 px-4 my-6">
        <div className="w-[50%] h-[95px] bg-white py-2 px-2 rounded-full absolute -top-12 left-[24%] border border-[#BCD5FF] flex justify-between">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-12 py-2 rounded-full text-[20px] w-[30%] transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#BCD5FF]"
                  : "hover:bg-[#BCD5FF]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 w-full flex items-center justify-evenly">
          {postsData[activeCategory].map((post, index) => (
            <div
              key={index}
              className="w-[30%] h-[400px] rounded-lg bg-white p-4 transition-all duration-500 hover:shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={500}
                className="w-full h-[190px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-3 justify-between my-2">
                <h3 className="text-[18px] font-medium">{post.title}</h3>
                <p className="text-[14px]">{post.content}</p>
                <p className="text-[12px] mt-2">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;