import React from "react";
import Link from "next/link";
import logo from "@/public/assets/logo2.png";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidChevronUp } from "react-icons/bi";

const HeaderBar = () => {
  return (
    <div className="fixed top-0 w-full">
    <div className="lg:flex bg-colorText text-white text-sm items-center text-center pl-14 hidden">
      <Link
        href="#"
        className="border-x-[2.5px] border-headerBorder py-4 px-5 "
      >
        {" "}
        <Image src={logo} alt="logo" width={80} height={80} />
      </Link>
      <Link
        href="#"
        className="border-r-[2.5px] border-headerBorder py-4 px-5 "
      >
        {" "}
        Tyres
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        MOT
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        Servicing
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        Brakes
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        Batteries
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        Other Products
      </Link>
      <Link
        href="#"
        className="border-r-[2.5px] border-headerBorder py-4 px-5 bg-colorButton"
      >
        {" "}
        Offers
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        Locate A Centre{" "}
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        <FaShoppingCart size={20} />
      </Link>
      <div className=" border-headerBorder py-4 px-7"> </div>
      <Link href="#" className="border-x-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        <BiSolidChevronUp className="text-colorYellow" size={20} />
      </Link>
    </div>
     </div>
  );
};

export default HeaderBar;
