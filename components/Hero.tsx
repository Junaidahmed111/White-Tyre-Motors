"use client";
import React from "react";
import bg from "@/public/assets/bg-Hero.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import DropdownMenu from "./DropdownMenu";

const Hero = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center imgBg">
      {/* div 1 for buttons */}
      <div className="flex flex-col justify-center items-center w-[90%] h-[8vh]">
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
      <div className="bg-colorBgHero flex flex-col w-[90%] items-center justify-center mt-4">
        <div className="text-colorText w-[95%]">
          <span className="text-3xl font-medium w-[95%]">Product Finder</span>
        </div>
        {/* inner 4 divs */}
        <div className="flex flex-col w-[95%]">
          <div className="w-[100%] flex flex-col">
            <span className="font-bold">what are you looking for?</span>
            <DropdownMenu />
          </div>
          <div className="w-[100%]">
            <span className="font-bold">Vehicle Registration</span>
            <div className="w-[100%] flex">
              <div className="w-[20%]  bg-blue-800">
                <span className="text-white">UK</span>
              </div>
              <div className="w-[80%] ">
                <input type="text" className="w-[100%] bg-colorButton" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <span className="font-bold">Postcode</span>
            <input type="text" />
          </div>
          <div className="flex bg-colorButton text-white text-center justify-center items-center gap-x-1 w-[100%]">
            <span className="font-bold">search</span>
            <AiOutlineSearch />
          </div>
        </div>
        <div>
          <span>
            Please enter your postcode to see availability information from your
            local Kwik Fit centre.{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
