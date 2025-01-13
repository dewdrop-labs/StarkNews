"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

interface Event {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
}

interface Category {
  label: string;
  value: string;
  count: number;
}

const CATEGORIES: Category[] = [
  { label: "Ongoing", value: "Ongoing", count: 2 },
  { label: "Upcoming", value: "Upcoming", count: 7 },
  { label: "Past", value: "Past", count: 314 },
];

const eventsData: Record<string, Event[]> = {
  Ongoing: [
    {
      image: "/news2.svg",
      title: "Starknet Global Hackathon 2025",
      description: "Join developers worldwide in building the future of Starknet. Compete for prizes and connect with the community in this virtual hackathon.",
      date: "Jan 10 - Feb 10, 2025",
      location: "Virtual Event",
      type: "Hackathon"
    },
    {
      image: "/news3.svg",
      title: "StarknetCC Amsterdam",
      description: "The largest Starknet conference in Europe. Features keynote speakers, workshops, and networking opportunities with industry leaders.",
      date: "Jan 15 - Jan 17, 2025",
      location: "Amsterdam, Netherlands",
      type: "Conference"
    },
    {
        image: "/news3.svg",
        title: "StarknetCC Amsterdam",
        description: "The largest Starknet conference in Europe. Features keynote speakers, workshops, and networking opportunities with industry leaders.",
        date: "Jan 15 - Jan 17, 2025",
        location: "Amsterdam, Netherlands",
        type: "Conference"
      }
  ],
  Upcoming: [
    {
      image: "/news2.svg",
      title: "Starknet Developer Workshop",
      description: "Intensive workshop covering advanced Cairo programming and smart contract development on Starknet.",
      date: "Feb 20, 2025",
      location: "London, UK",
      type: "Workshop"
    },
    {
      image: "/news3.svg",
      title: "ZK Summit Singapore",
      description: "A premier conference focusing on zero-knowledge proofs and their applications in blockchain technology.",
      date: "March 5-7, 2025",
      location: "Singapore",
      type: "Summit"
    },
    {
      image: "/news4.svg",
      title: "Starknet DeFi Symposium",
      description: "Join leading DeFi projects building on Starknet for discussions on the future of decentralized finance.",
      date: "March 15, 2025",
      location: "Dubai, UAE",
      type: "Symposium"
    },
    {
      image: "/news2.svg",
      title: "Cairo Community Meetup",
      description: "Monthly community meetup for Cairo developers. Share experiences and learn from other builders.",
      date: "March 20, 2025",
      location: "Berlin, Germany",
      type: "Meetup"
    },
    {
      image: "/news3.svg",
      title: "Starknet Ecosystem Summit",
      description: "A comprehensive overview of the Starknet ecosystem with project showcases and panel discussions.",
      date: "April 1-2, 2025",
      location: "New York, USA",
      type: "Summit"
    },
    {
        image: "/news3.svg",
        title: "StarknetCC Amsterdam",
        description: "The largest Starknet conference in Europe. Features keynote speakers, workshops, and networking opportunities with industry leaders.",
        date: "Jan 15 - Jan 17, 2025",
        location: "Amsterdam, Netherlands",
        type: "Conference"
      }
  ],
  Past: [
    {
      image: "/news2.svg",
      title: "StarknetCC Miami",
      description: "The inaugural Starknet conference in Miami brought together developers, investors, and enthusiasts.",
      date: "December 15-17, 2024",
      location: "Miami, USA",
      type: "Conference"
    },
    {
      image: "/news3.svg",
      title: "Cairo Developer Bootcamp",
      description: "An intensive training program for developers looking to build on Starknet using Cairo.",
      date: "December 10, 2024",
      location: "Virtual Event",
      type: "Workshop"
    },
    {
      image: "/news4.svg",
      title: "Starknet Governance Forum",
      description: "Community discussion on the future of Starknet governance and protocol development.",
      date: "December 5, 2024",
      location: "Paris, France",
      type: "Forum"
    }
  ]
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="w-[30%] h-[400px] mb-4 rounded-lg bg-white p-4 transition-all duration-500 hover:shadow-lg">
    <div className="relative">
      <Image
        src={event.image}
        alt={event.title}
        width={500}
        height={500}
        className="w-full h-[190px] object-cover rounded-lg"
      />
      <span className="absolute top-2 right-2 bg-[#BCD5FF] text-white px-2 py-1 rounded text-xs">
        {event.type}
      </span>
    </div>
    <div className="flex flex-col gap-3 justify-between my-2">
      <h3 className="text-lg font-medium">{event.title}</h3>
      <p className="text-sm line-clamp-3">{event.description}</p>
      <div className="mt-auto">
        <p className="text-xs font-medium text-[#BCD5FF]">{event.date}</p>
        <p className="text-xs text-gray-500">{event.location}</p>
      </div>
    </div>
  </div>
);

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORIES[0].value
  );

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="flex flex-col items-center py-6 px-4 mt-32 mb-8 w-[85%]">
        <h2 className="text-4xl text-primary font-thin self-start">Events</h2>
        <div className="relative w-full h-fit border border-[#BCD5FF] bg-white rounded-xl py-4 px-4 my-6">
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
            {eventsData[activeCategory].map((event, index) => (
              <EventCard key={index} event={event} />
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

export default Events;