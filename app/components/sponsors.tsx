import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <div className="w-full gap-4 flex flex-col items-center justify-center my-6">
      <h2 className="text-[12px]">Proudly Sponsored by:</h2>
      <div className="flex items-center gap-12">
        <Image
          src="/sponsor-1.svg"
          alt="sponsor"
          width={500}
          height={500}
          className="w-[62.93px] h-[59px]"
        />
        <Image
          src="/sponsor-2.svg"
          alt="sponsor"
          width={500}
          height={500}
          className="w-[82px] h-[82px]"
        />
        <Image
          src="/starknet.png"
          alt="sponsor"
          width={500}
          height={500}
          className="w-[83.91px] h-[83.91px]"
        />
      </div>
    </div>
  );
};

export default Sponsors;
