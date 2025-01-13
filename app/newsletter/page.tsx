import React from "react";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <div className="py-6 px-4 mt-[125px] mb-8 w-[85%] ">
        <h2 className="text-4xl text-primary font-thin">Newsletter</h2>

        <div className="w-full h-[340px] bg-[#BCD5FF] rounded-xl py-8 px-4 my-6">
            <div className="flex gap-2 items-center w-fit mx-auto mt-4">
                  <Image
                    src='/starknet-story.svg'
                    alt='story'
                    width={500}
                    height={500}
                    className="w-[51px] h-[51px] object-cover rounded-md"
                  />
                  <Image
                    src='/starknet.svg'
                    alt='story'
                    width={500}
                    height={500}
                    className="w-[51px] h-[51px] object-cover rounded-md"
                  />
                  <Image
                    src='/starknet-insights.svg'
                    alt='story'
                    width={500}
                    height={500}
                    className="w-[51px] h-[51px] object-cover rounded-md"
                  />
                  <Image
                    src='/starknet-pulse.svg'
                    alt='story'
                    width={500}
                    height={500}
                    className="w-[51px] h-[51px] object-cover rounded-md"
                  />
            </div>


            <div className="flex flex-col mt-4 gap-3 w-fit mx-auto items-center">
                <h1 className="text-black text-[40px] font-medium">
                Join the Community
                </h1>

                <p className="text-black text-[18px] font-medium text-center max-w-[70%]">Join over 6000+ people and contribute to everything Starknet.
                Stay updated with everything Starknet.</p>

                <button className="bg-transparent px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition duration-300">
                    Subscribe
                </button>
            </div>

        </div>
      </div>

      <Sponsors />
      <Footer />
    </div>
  );
};

export default Newsletter;
