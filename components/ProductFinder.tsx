import React from "react";
import DropdownMenu from "./DropdownMenu";
import { AiOutlineSearch } from "react-icons/ai";

const ProductFinder = () => {
  return (
    <div className="bg-colorBgHero flex flex-col w-[90%] items-center justify-center pt-3 mb-8 mt-8">
      <div className="text-colorText w-[95%] mb-4">
        <span className="text-3xl font-medium w-[95%]">Product Finder</span>
      </div>
      {/* inner 4 divs */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-[95%] h-auto lg:h-[15vh] space-y-4">
        {/* div 1 */}
        <div className="w-full flex flex-col lg:w-[25%] h-[10vh]">
          <span className="font-bold">What are you looking for?</span>
          <DropdownMenu />
        </div>
        {/* div 2 */}
        <div className="w-[100%] lg:w-[25%] h-14 flex items-center lg:h-[10vh]">
          <div className="w-[100%] lg:w-[90%] flex flex-col">
            <div>
              <span className="font-bold">Vehicle registration</span>
            </div>
            <div className="flex lg:w-[100%]">
  <div className="w-[20%] bg-colorText flex items-center justify-center h-12">
    <span className="text-white">UK</span>
  </div>
  <div className="w-[80%]">
    <input
      type="text"
      className="w-full h-12 bg-yellow-500 text-lg text-gray-00 pl-8"
      placeholder="Enter reg"
    />
  </div>
</div>

          </div>
        </div>
        {/* div 3 */}

        <div className="w-full lg:w-[25%] h-14 flex flex-col lg:h-[12vh] ">
          <div>
            <span className="font-bold">Postcode</span>
          </div>
          <div className="w-full flex flex-col lg:w-[80%] ">
            <input type="text" className="w-full h-12" />
          </div>
        </div>
        {/* div 4 */}
        <div className="flex items-center justify-center gap-x-1 w-full lg:w-[25%] h-12 lg:h-[8vh] ">
          <button className="flex gap-x-2 bg-colorButton text-white  justify-center items-center text-center py-1 px-2 font-medium w-[100%] h-[93%] mt-7">
            <span>Search</span>
            <AiOutlineSearch />
          </button>
        </div>
        {/* <div className="flex bg-colorButton text-white items-center justify-center gap-x-1 w-full lg:w-[25%] h-12 lg:h-[8vh] mt-4">
          <span className="font-bold">Search</span>
          <AiOutlineSearch />
        </div> */}
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
