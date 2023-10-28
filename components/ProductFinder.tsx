import React from "react";
import DropdownMenu from "./DropdownMenu";
import { AiOutlineSearch } from "react-icons/ai";

const ProductFinder = () => {
  return (
    <div className="bg-colorBgHero flex flex-col w-[90%] items-center justify-center pt-6 mb-8 mt-8">
      <div className="text-colorText w-[95%] mb-4">
        <span className="text-3xl font-medium w-[95%]">Product Finder</span>
      </div>
      {/* inner 4 divs */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-[95%] h-auto space-y-4">
        {/* div 1 */}
        <div className="w-full flex flex-col lg:w-[25%] ">
          <span className="font-bold">What are you looking for?</span>
          <DropdownMenu />
        </div>
        {/* div 2 */}
        <div className="w-full lg:w-[25%] h-14 flex items-center">
          <div className="w-1/5 bg-colorText flex items-center justify-center h-12">
            <span className="text-white">UK</span>
          </div>
          <div className="w-4/5">
            <input type="text" className="w-full h-12 bg-colorButton" />
          </div>
        </div>
        {/* div 3 */}
        <div className="w-full flex flex-col lg:w-[25%] ">
          <span className="font-bold">What are you looking for?</span>
          <input type="text" className="w-full h-12" />
        </div>
        {/* div 4 */}
        <div className="flex bg-colorButton text-white items-center justify-center gap-x-1 w-full lg:w-[25%] h-12">
          <span className="font-bold">Search</span>
          <AiOutlineSearch />
        </div>
      </div>
      <div className="mt-4 w-[95%] h-12">
        <span>
          Please enter your postcode to see availability information from your
          local Kwik Fit centre.
        </span>
      </div>
    </div>
  );
};

export default ProductFinder;
