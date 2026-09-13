import React from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between container mx-auto items-center py-5">
        <div className="ml-[104.5px]">
          <img src={Logo} alt="" />
        </div>

        <ul className="flex gap-7.25 items-center ">
          <li className="font-semibold text-[14px] text-[#DB2777]">Home</li>
          <div className="flex gap-7.25 font-medium text-[14px] text-[#475569]">
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </div>
        </ul>
        <div className="flex gap-2.5 mr-[104.5px]">
          <button className="font-medium text-[14px] text-[#334155] px-2 py-1 cursor-pointer">Sign In</button>
          <button className="font-semibold text-[14px] text-[#FFFFFF] bg-[#D91B7E] px-2 py-1 rounded-[16px] cursor-pointer">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
