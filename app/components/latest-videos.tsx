import { ArrowDownRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const LatestVideos = () => {
  return (
    <div className="w-[90%] px-8 bg-[#F1F6FF] rounded-lg py-4 flex flex-col items-center gap-8">
      <h2 className="text-primary text-[36px] font-thin self-start ml-12 mt-8">
        Latest Videos
      </h2>
      <div className="w-full h-full flex items-center justify-center gap-8 ">
        <div className="flex items-center pr-6 gap-4 h-full w-[45%] border-r border-[#BCD5FF]">
          <div className=" w-[200%] h-full relative">
            <Image
              src="/news1.svg"
              alt="news"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <PlayCircle className="absolute top-[40%] text-white left-[40%] w-12 h-12" />
          </div>

          <div className="flex flex-col gap-6">
            <p>“I might Sell Starknet soon who knows” - ELI BEN-SASSON</p>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <button className="text-primary flex border border-primary rounded-lg px-4 py-2 w-fit">
              Read More
              <ArrowDownRight />
            </button>
          </div>
        </div>

        <div className="w-[45%] flex flex-col gap-4 ">
          <div className="flex items-center gap-8 h-[119px] w-full border-b border-[#BCD5FF] p-4">
            <Image
              src="/news1.svg"
              alt="news"
              width={500}
              height={500}
              className="w-[103px] h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-6">
              <p>“I might Sell Starknet soon who knows” - ELI BEN-SASSON</p>
              <p>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 h-[119px] w-full border-b border-[#BCD5FF] p-4">
            <Image
              src="/news1.svg"
              alt="news"
              width={500}
              height={500}
              className="w-[103px] h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-6">
              <p>“I might Sell Starknet soon who knows” - ELI BEN-SASSON</p>
              <p>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 h-[119px] w-full p-4">
            <Image
              src="/news1.svg"
              alt="news"
              width={500}
              height={500}
              className="w-[103px] h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-6">
              <p>“I might Sell Starknet soon who knows” - ELI BEN-SASSON</p>
              <p>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
