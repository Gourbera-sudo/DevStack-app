import React, { useState } from "react";
import type { Itechnology } from "../type";
import { toast } from "react-toastify";
interface ITechnologyCardProps {
  technology: Itechnology;
  technologies: Itechnology[];
}
const TechnologyCard = ({ technology, technologies }: ITechnologyCardProps) => {
  const [buttonText, setButtonText] = useState('Add to Stack');
  const [isSelected, setIsSelected] = useState(false);
    const handleSelectTechnology = () => {
      if(!isSelected){
        setIsSelected(true);
        setButtonText('Added to Stack');
        toast.success(`${technology.name} is purchased successfully`)
}
      else{
      toast.error("You have already purchased this technology")
    }
  };

  const handleUpdateBtn = () => {
    setButtonText('Added to Stack')
  };

  return (
      <div className="w-full max-w-[260px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-5 flex items-start justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-500">
            {technology.badge}
          </span>
        </div>
        <h2 className="mb-2 text-[17px] font-bold text-slate-900">
          {technology.name}
        </h2>
        <p className="mb-4 min-h-[60px] text-[12px] leading-5 text-slate-500">
          {technology.description}
        </p>
        <div className="mb-3 border-t border-slate-100"></div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
            {technology.category}
          </span>
          <span className="text-[10px] font-medium text-slate-500">
            {technology.difficulty}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-medium text-slate-700">
            <span className="text-amber-400">★</span>
            {technology.rating}
          </span>
        </div>
        <button onClick={handleSelectTechnology} disabled={isSelected} className="w-full rounded-lg bg-[#080d1b] py-2.5 text-[12px] font-medium text-white transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed">
          {buttonText}
        </button>
      </div>
  );
};

export default TechnologyCard;
