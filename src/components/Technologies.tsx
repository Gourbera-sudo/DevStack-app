import React, { use, useState } from "react";
import type { Itechnology } from "../type";
import TechnologyCard from "./TechnologyCard";

const Technologies = ({
  techPromise
}: {
  techPromise: Promise<Itechnology[]>
}) => {
  const technologies = use(techPromise);
  console.log(technologies);

  return (
    <div className="ml-[104.5px]">
      <h2 className="font-extrabold text-[36px] text-[#0F172A] mb-2">
        Explore the{" "}
        <span className="font-extrabold text-[36px] bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="font-regular text-[16px] text-[#64748B] mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex gap-25">
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology: Itechnology) => {
            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                technologies={technologies}
              />
            );
          })}
        </div>
        <div>
          <h3 className="font-bold text-[16px] text-[#0F172A] pb-2">
            Your Stack
          </h3>
          <p className="font-regular text-[12px] text-[#94A3B8] pb-3">
            No technologies selected yet.
          </p>
          <div>
            <p className="font-regular text-[12px] text-[#94A3B8] pb-3">Your stack is empty.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Technologies;
