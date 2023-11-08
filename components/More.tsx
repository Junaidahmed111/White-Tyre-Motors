import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import more from "@/public/assets/More.webp";
import Image from "next/image";
import Link from "next/link";

const More = () => {
  return (
    <div className="flex flex-col bg-colorText text-white text-center items-center justify-center gap-y-6 my-10 py-10 w-[100%]">
      <div className=" font-semibold text-2xl w-[90%]">
        <span>More from White Tyre Motors</span>
      </div>
      <div className="w-[90%] ">
        <span>
          Looking for motoring or driving related information? Winter driving
          tips? Car maintenance advice? Long distance drives? The difference
          between wheel alignment and balancing? Weve got information on
          practically everything on our blog. Heres the latest:
        </span>
      </div>

      <div className="flex flex-col lg:flex-row w-[80%] lg:justify-between justify-center items-center">
        <div className="flex flex-col lg:gap-y-3 items-start justify-start gap-y-5 font-bold hover:scale-105 mb-3 lg:mb-0">
        <Link href="#" className="hover:underline">How often do you clean your car</Link>
          <Image src={more} alt="more" width={300} height={200} />
        </div>
        <div className="flex flex-col gap-y-3 items-start justify-start font-bold hover:scale-105">
          <Link href="#" className="hover:underline">How often do you clean your car</Link>
          <Image src={more} alt="more" width={300} height={200} />
        </div>
        <div className="flex flex-col gap-y-3 items-start justify-start font-bold hover:scale-105">
        <Link href="#" className="hover:underline">How often do you clean your car</Link>
          <Image src={more} alt="more" width={300} height={200} />
        </div>
      </div>

      <div className="">
        <div className=" flex bg-colorButton text-white font-bold items-center justify-center h-12 gap-x-1 px-3">
          <span className="">Read more on our blog</span>
          <BiSolidChevronRight />
        </div>
      </div>
    </div>
  );
};

export default More;
