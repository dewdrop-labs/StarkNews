'use client'

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

interface Post {
  image: string;
  title: string;
  content: string;
  date: string;
}

interface Category {
  label: string;
  value: string;
  count: number;
}

const CATEGORIES: Category[] = [
  { label: "Ongoing", value: "Ongoing", count: 6 },
  { label: "Upcoming", value: "Upcoming", count: 15 },
  { label: "Closed", value: "Closed", count: 23 }
];

const postsData: Record<string, Post[]> = {
  Ongoing: [
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
    },
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
  Upcoming: [
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
    },
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
  Closed: [
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
    },
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
  ]
};

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="w-[30%] h-[400px] mb-4 rounded-lg bg-white p-4 transition-all duration-500 hover:shadow-lg">
    <Image
      src={post.image}
      alt={post.title}
      width={500}
      height={500}
      className="w-full h-[190px] object-cover rounded-lg"
    />
    <div className="flex flex-col gap-3 justify-between my-2">
      <h3 className="text-lg font-medium">{post.title}</h3>
      <p className="text-sm">{post.content}</p>
      <p className="text-xs mt-2">{post.date}</p>
    </div>
  </div>
);

const Hackathons = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].value);

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="py-6 px-4 mt-32 mb-8 w-[85%]">
        <h2 className="text-4xl text-primary font-thin">Hackathons</h2>
        <div className="relative w-full h-fit bg-purple_background bg-cover rounded-xl py-4 px-4 my-6">
          <div className="w-1/2 h-24 bg-white py-2 px-2 rounded-full absolute -top-12 left-1/4 border border-[#BCD5FF] flex justify-between">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-12 py-2 rounded-full text-xl w-[30%] transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-[#BCD5FF]"
                    : "hover:bg-[#BCD5FF]/20"
                }`}
              >
                {`${category.label} (${category.count})`}
              </button>
            ))}
          </div>

          <div className="mt-12 w-full flex flex-wrap gap-4 items-center mb-12 justify-evenly">
            {postsData[activeCategory].map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Hackathons;