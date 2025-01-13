"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

interface Video {
  thumbnail: string;
  title: string;
  description: string;
  duration: string;
  date: string;
}

interface Category {
  label: string;
  value: string;
  count: number;
}

const CATEGORIES: Category[] = [
  { label: "Latest", value: "Latest", count: 20 },
  { label: "Documentaries", value: "Documentaries", count: 3 },
  { label: "Interviews", value: "Interviews", count: 34 },
];

const videosData: Record<string, Video[]> = {
  Latest: [
    {
      thumbnail: "/news2.svg",
      title: "Getting Started with Starknet Development",
      description:
        "Learn the fundamentals of building on Starknet. This comprehensive guide covers everything from basic concepts to advanced development techniques.",
      duration: "15:24",
      date: "2 days ago",
    },
    {
      thumbnail: "/news3.svg",
      title: "Starknet's Latest Protocol Updates",
      description:
        "A detailed walkthrough of the newest features and improvements in the Starknet ecosystem. Stay up to date with the latest developments.",
      duration: "10:15",
      date: "4 days ago",
    },
    {
      thumbnail: "/news4.svg",
      title: "Building DeFi Applications on Starknet",
      description:
        "Discover how to create powerful DeFi applications using Starknet's robust infrastructure. Perfect for both beginners and advanced developers.",
      duration: "22:30",
      date: "1 week ago",
    },
    {
      thumbnail: "/news2.svg",
      title: "Smart Contract Security Best Practices",
      description:
        "Essential security considerations when developing smart contracts on Starknet. Learn from industry experts about common pitfalls and how to avoid them.",
      duration: "18:45",
      date: "1 week ago",
    },
    {
      thumbnail: "/news3.svg",
      title: "Optimizing Gas Usage on Starknet",
      description:
        "Learn advanced techniques for optimizing your smart contracts and reducing gas costs on Starknet. Perfect for developers looking to improve efficiency.",
      duration: "12:20",
      date: "2 weeks ago",
    },
    {
      thumbnail: "/news4.svg",
      title: "Zero-Knowledge Proofs Explained",
      description:
        "A comprehensive introduction to ZK-proofs and their implementation in Starknet. Understand the technology behind the platform.",
      duration: "25:15",
      date: "2 weeks ago",
    },
  ],
  Documentaries: [
    {
      thumbnail: "/news2.svg",
      title: "The Story of Starknet",
      description:
        "An in-depth look at the history and development of Starknet, featuring interviews with key team members and early contributors.",
      duration: "45:30",
      date: "1 month ago",
    },
    {
      thumbnail: "/news3.svg",
      title: "Future of Layer 2 Scaling",
      description:
        "Explore how Starknet is revolutionizing blockchain scaling and what the future holds for Layer 2 solutions.",
      duration: "38:15",
      date: "2 months ago",
    },
    {
      thumbnail: "/news4.svg",
      title: "Building the ZK Ecosystem",
      description:
        "A documentary about the growing ecosystem of zero-knowledge applications and their impact on blockchain technology.",
      duration: "42:50",
      date: "3 months ago",
    },
  ],
  Interviews: [
    {
      thumbnail: "/news2.svg",
      title: "Interview with Starknet Core Developers",
      description:
        "An exclusive interview with the core development team discussing the future roadmap and technical challenges.",
      duration: "28:45",
      date: "5 days ago",
    },
    {
      thumbnail: "/news3.svg",
      title: "Community Builders Spotlight",
      description:
        "Meet the passionate developers and community members who are building the future of Starknet.",
      duration: "32:10",
      date: "1 week ago",
    },
    {
      thumbnail: "/news4.svg",
      title: "DeFi Innovators on Starknet",
      description:
        "Leading DeFi projects share their experiences and insights about building on Starknet.",
      duration: "35:20",
      date: "2 weeks ago",
    },
  ],
};

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
  <div className="w-[30%] h-[400px] mb-4 rounded-lg bg-white p-4 transition-all duration-500 hover:shadow-lg">
    <div className="relative">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={500}
        height={500}
        className="w-full h-[190px] object-cover rounded-lg"
      />
      <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
        {video.duration}
      </span>
    </div>
    <div className="flex flex-col gap-3 justify-between my-2">
      <h3 className="text-lg font-medium">{video.title}</h3>
      <p className="text-sm line-clamp-3">{video.description}</p>
      <p className="text-xs text-gray-500">{video.date}</p>
    </div>
  </div>
);

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORIES[0].value
  );

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="flex flex-col items-center py-6 px-4 mt-32 mb-8 w-[85%]">
        <h2 className="text-4xl text-primary font-thin self-start">Videos</h2>
        <div className="relative w-full h-fit bg-[#BCD5FF] rounded-xl py-4 px-4 my-6">
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
            {videosData[activeCategory].map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
        <button className="px-4 py-3 my-6 rounded-full border-2 border-[#BCD5FF] text-[#BCD5FF] bg-white mx-auto font-semibold">
          Show more
        </button>
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Videos;
