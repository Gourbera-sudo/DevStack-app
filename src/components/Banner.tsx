import React from "react";
import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex justify-between container mx-auto items-center py-5 ml-[104.5px]">
      <div>
        <h1 className="font-extrabold text-[60px] mb-2">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="font-regular text-[18px] text-[#475569]">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>
        <div className="mb-2 mt-6">
          <button className="bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-sm transition-all px-3 py-2 rounded-[10px] cursor-pointer">
            Explore Technologies
          </button>
          <button className="font-regular text-[14px] shadow-sm transition-all text-[#374151] px-8.75 py-3 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="min-h-100 mr-[104.5px]">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
