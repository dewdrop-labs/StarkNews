'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const cards = [
    {
      image: "/starknet-insights.svg",
      text: "starknet insights",
      color: "#FF0B7D",
      title: "Stay Ahead with Starknet Insights",
      description: "Get the latest updates, deep dives, and breaking news from the Starknet ecosystem — all in one place. Stay informed, stay empowered."
    },
    {
      image: "/starknet-story.svg",
      text: "Starknet’s Evolving Story",
      color: "#8D00AF",
      title: "Discover Starknet’s Evolving Story",
      description: "From protocol upgrades to ecosystem milestones—stay connected with every chapter of Starknet's growth."
    },
    {
      image: "/starknet-pulse.svg",
      text: "Unlock the Pulse",
      color: "#4F1029",
      title: "STARKNETNEWS, Curated for You",
      description: "Access reliable, up-to-date, and actionable insights on Starknet’s ecosystem. Stay informed, stay relevant."
    },
    {
      image: "/starknet.svg",
      text: "What is Starknet?",
      color: "#382DCC",
      title: "What is Starknet?",
      description: "Starknet is a Layer 2 scaling solution for Ethereum using zk-STARKs to enable fast, low-cost, and secure transactions."
    }
  ];

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setActiveIndex(0);
    }, 0);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      const nextIndex = (activeIndex + 1) % cards.length;
      const timer = setTimeout(() => {
        setActiveIndex(nextIndex);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeIndex, cards.length]);

  return (
    <header className="mt-[10rem] flex w-full items-center justify-center gap-8 px-12 py-8">
      <div className="w-[48%] h-[450px] flex flex-col self-start items-start justify-center relative overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              absolute 
              top-1/3
              left-0 
              w-full 
              transition-all 
              duration-100
              ${index === activeIndex 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'}
            `}
          >
            <h1 className="text-[35px] text-primary font-bold mb-4">
              {card.title}
            </h1>
            <p className="text-primary text-[18px]">
              {card.description}
            </p>
          </div>
        ))}
         <div className="border border-primary rounded-xl w-[160px] text-primary px-4 py-3 mt-[12rem] font-medium">
                Join Community
            </div>
      </div>
      
      <div className="w-[45%] h-[650px] relative overflow-hidden">
        <div className="flex items-center gap-4 w-full justify-center py-[5rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                relative 
                rounded-xl
                transition-all
                duration-700
                ease-in-out
                ${index === activeIndex ? 'w-[330px] h-[450px]' : 'w-[90px] h-[330px]'}
              `}
            >
              <div className={`
                absolute 
                inset-0 
                transition-opacity 
                duration-500
                ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
              `}>
                {index === activeIndex && (
                  <Image
                    src={card.image}
                    alt={card.text}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}
              </div>
              
              <div 
                className={`
                  w-full 
                  transition-all 
                  duration-700
                  rounded-xl 
                  absolute 
                  ${index === activeIndex ? 'h-[60px] bottom-0' : 'h-[450px] -top-[3.5rem]'}
                `}
                style={{ backgroundColor: card.color }}
              >
                <p className={`
                  text-white 
                  text-center
                  text-[18px]
                  font-semibold
                  transition-all
                  duration-500
                  whitespace-nowrap
                  absolute
                  w-full
                  ${index === activeIndex 
                    ? 'rotate-0 bottom-[20px]' 
                    : '-rotate-90 left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2'}
                `}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;