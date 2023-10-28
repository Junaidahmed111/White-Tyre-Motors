"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ProductFinder from "./ProductFinder";

const Hero = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center imgBg pt-8">
      {/* div 1 for buttons */}
      <div className="flex flex-col lg:flex-row  justify-center items-center w-[90%] lg:w-[50%] h-[8vh]">
        <div className="flex bg-colorText items-center justify-center w-full h-[50%] gap-x-2">
          <span className=" text-colorBgHero text-lg">search by vehicle</span>
          <AiOutlineSearch color="white" size={20} />
        </div>
        <div className=" flex bg-colorBgHero items-center justify-center w-full h-[50%] gap-x-2">
          <span className="text-colorText text-lg">search by tyre size</span>
          <AiOutlineSearch className="text-colorText" size={20} />
        </div>
      </div>
      {/* ------------------ */}
      <ProductFinder />
    </section>
  );
};

export default Hero;
