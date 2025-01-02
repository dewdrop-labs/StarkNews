'use client'
import Image from "next/image";
import React from "react";

type LearnItem = {
  image: string;
  title: string;
  content: string;
  date: string;
};

const Learn = () => {
  const learnData: LearnItem[] = [
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
  ];

  return (
    <div className="py-6 px-4 my-8 w-[92%]">
      <h2 className="text-[35px] text-primary font-thin">Learn</h2>
      <div className="relative w-full h-[509px] bg-purple_background bg-cover rounded-xl py-4 px-4 my-6">
        <div className="mt-12 w-full flex items-center justify-evenly">
          {learnData.map((post, index) => (
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

export default Learn;