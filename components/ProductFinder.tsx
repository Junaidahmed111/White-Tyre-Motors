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
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start w-[95%] h-auto lg:h-[10vh] gap-x-4">
        {/* div 1 */}
        <div className="w-full flex flex-col lg:w-[25%] h-[10vh]">
        <div>
          <span className="font-bold">What are you looking for?</span>
        </div>
        <div className="w-full">
          <DropdownMenu />
        </div>
        </div>
        {/* div 2 */}
        <div className="w-[100%] lg:w-[25%] flex flex-col items-start h-auto lg:h-[10vh]">
            <div>
              <span className="font-bold">Vehicle registration</span>
            </div>
            <div className="flex w-full">
              <div className="w-[13%] bg-colorText flex items-center justify-center h-12">
                <span className="text-white">UK</span>
              </div>
              <div className="w-[87%]">
                <input
                  type="text"
                  className="w-full h-12 bg-yellow-500 text-lg text-gray-00 pl-8"
                  placeholder="Enter reg"
                />
              </div>
            </div>
        </div>
        {/* div 3 */}

        <div className="w-full lg:w-[25%] h-14 flex flex-col lg:h-[12vh] lg:ml-8 ">
          <div>
            <span className="font-bold">Postcode</span>
          </div>
          <div className="w-full flex flex-col lg:w-[80%] ">
            <input type="text" className="w-full h-12" />
          </div>
        </div>
        {/* div 4 */}
        <div className="flex items-center justify-center w-full lg:w-[25%] h-12 lg:h-[5.5vh] xl:h-[8.5vh] mt-2 ">
          <button className="flex bg-colorButton text-white  justify-center items-center text-center px-2 font-medium w-[100%] h-[93%] mt-7">
            <span>Search</span>
            <AiOutlineSearch />
          </button>
        </div>
        {/* <div className="flex bg-colorButton text-white items-center justify-center gap-x-1 w-full lg:w-[25%] h-12 lg:h-[8vh] mt-4">
          <span className="font-bold">Search</span>
          <AiOutlineSearch />
        </div> */}
      </div>
      <div className="mt-4 w-[95%] h-full">
        <span>
          Please enter your postcode to see availability information from your
          local Kwik Fit centre.
        </span>
      </div>
    </div>
  );
};

export default ProductFinder;
