'use client'
import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

interface LearnResource {
  image: string;
  title: string;
  content: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

const learningResources: LearnResource[] = [
  {
    image: "/news2.svg",
    title: "Introduction to Starknet",
    content: "Start your journey into Starknet development. Learn the fundamental concepts, architecture, and how Starknet is revolutionizing blockchain scalability.",
    difficulty: "Beginner",
    duration: "30 mins"
  },
  {
    image: "/news3.svg",
    title: "Cairo Programming Language",
    content: "Master Cairo, the native programming language of Starknet. This comprehensive guide covers syntax, smart contracts, and best practices.",
    difficulty: "Beginner",
    duration: "2 hours"
  },
  {
    image: "/news4.svg",
    title: "Building DApps on Starknet",
    content: "Learn how to build decentralized applications on Starknet. Covers development environment setup, testing, and deployment.",
    difficulty: "Intermediate",
    duration: "3 hours"
  },
  {
    image: "/news2.svg",
    title: "Smart Contract Security",
    content: "Deep dive into security considerations when developing on Starknet. Learn about common vulnerabilities and how to protect against them.",
    difficulty: "Advanced",
    duration: "2.5 hours"
  },
  {
    image: "/news3.svg",
    title: "Zero-Knowledge Proofs",
    content: "Understand the mathematics and implementation of ZK-proofs in Starknet. Essential knowledge for advanced developers.",
    difficulty: "Advanced",
    duration: "4 hours"
  },
  {
    image: "/news4.svg",
    title: "Starknet Integration Guide",
    content: "Learn how to integrate existing applications with Starknet. Perfect for developers looking to leverage Layer 2 scaling.",
    difficulty: "Intermediate",
    duration: "1.5 hours"
  }
];

const LearnCard: React.FC<{ resource: LearnResource }> = ({ resource }) => (
  <div className="w-[30%] h-[400px] rounded-lg bg-white p-4 transition-all duration-500 hover:shadow-lg">
    <div className="relative">
      <Image
        src={resource.image}
        alt={resource.title}
        width={500}
        height={500}
        className="w-full h-[190px] object-cover rounded-lg"
      />
      <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs text-white ${
        resource.difficulty === "Beginner" ? "bg-green-500" :
        resource.difficulty === "Intermediate" ? "bg-blue-500" :
        "bg-purple-500"
      }`}>
        {resource.difficulty}
      </span>
    </div>
    <div className="flex flex-col gap-3 justify-between my-2">
      <h3 className="text-lg font-medium">{resource.title}</h3>
      <p className="text-sm line-clamp-3">{resource.content}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs text-gray-500">
          ⏱️ {resource.duration}
        </span>
      </div>
    </div>
  </div>
);

const Learn = () => {
  return (
    <div className="flex flex-col items-center w-full">
        <Navbar />

    <div className="py-6 px-4 mt-[125px] mb-8 w-[85%] ">
      <h2 className="text-4xl text-primary font-thin">Learn</h2>
      <div className="w-full h-fit bg-purple_background bg-cover rounded-xl py-8 px-4 my-6">
        <div className="w-full flex flex-wrap gap-8 items-start justify-center">
          {learningResources.map((resource, index) => (
            <LearnCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>

    <Sponsors />
    <Footer />
    </div>
  );
};

export default Learn;