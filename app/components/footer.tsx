import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-gradient-to-b from-[#ffffff] to-[#BCD5FF] mt-6 flex  justify-between px-[6rem] py-[4rem]">
      <div className="w-[30%] flex flex-col gap-2">
        <h2 className="text-[15px] font-semibold ">STARKNETNEWS</h2>
        <p>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          News
        </a>
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          Learn
        </a>
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          Prices
        </a>
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          Videos
        </a>
      </nav>

      <nav className="flex flex-col gap-2">
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          About
        </a>
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          Documentation
        </a>
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          Team
        </a>
        <a
          href="#"
          className="text-black px-4 hover:text-blue-400 transition-colors"
        >
          Community
        </a>
      </nav>

      <div className="flex flex-col gap-6">
        <p>Follow</p>

        <div className="flex gap-4">
          <FacebookIcon />
          <YoutubeIcon />
          <XIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
