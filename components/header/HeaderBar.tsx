"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/public/assets/nft_logo-modified.png";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidChevronUp } from "react-icons/bi";
import TyreHover from "../TyreHover";
import MOThover from "../MOThover";
import ServicingHover from "../ServicingHover";
import ProductsHover from "../ProductsHover";

const HeaderBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMOTHovering, setIsMOTHovering] = useState(false);
  const [isServicingHovering, setIsServicingHovering] = useState(false);
  const [isProductsHovering, setIsProductsHovering] = useState(false);
  return (
    <div className="fixed top-0 w-full z-[5000]">
      <div className="lg:flex bg-colorText text-white text-sm items-center text-center pl-14 hidden ">
        <Link
          href="#"
          className="border-x-[2.5px] border-headerBorder py-4 px-5 "
        >
          {" "}
          <Image src={logo} alt="logo" width={30} height={50} />
        </Link>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Link
            href="#"
            className="border-r-[2.5px] border-headerBorder py-4 px-5 relative"
          >
            {" "}
            Tyres
          </Link>
          {isHovering && <TyreHover />}
        </div>
        <div
          onMouseEnter={() => setIsMOTHovering(true)}
          onMouseLeave={() => setIsMOTHovering(false)}
        >
          <Link
            href="#"
            className="border-r-[2.5px] border-headerBorder py-4 px-5 "
          >
            {" "}
            MOT
          </Link>
          <div> {isMOTHovering && <MOThover />}</div>
        </div>
        <div
          onMouseEnter={() => setIsServicingHovering(true)}
          onMouseLeave={() => setIsServicingHovering(false)}
        >
          <Link
            href="#"
            className="border-r-[2.5px] border-headerBorder py-4 px-5 "
          >
            {" "}
            Servicing
          </Link>
          <div> {isServicingHovering && <ServicingHover />}</div>
        </div>
        <Link
          href="#"
          className="border-r-[2.5px] border-headerBorder py-4 px-5"
        >
          {" "}
          Brakes
        </Link>
        <Link
          href="#"
          className="border-r-[2.5px] border-headerBorder py-4 px-5"
        >
          {" "}
          Batteries
        </Link>
        <div
          onMouseEnter={() => setIsProductsHovering(true)}
          onMouseLeave={() => setIsProductsHovering(false)}
        >
          <Link
            href="#"
            className="border-r-[2.5px] border-headerBorder py-4 px-5 "
          >
            {" "}
            Other Products
          </Link>
          <div> {isHovering && <ProductsHover />}</div>
        </div>
        <Link
          href="#"
          className="border-r-[2.5px] border-headerBorder py-4 px-5 bg-colorButton"
        >
          {" "}
          Offers
        </Link>
        <Link
          href="#"
          className="border-r-[2.5px] border-headerBorder py-4 px-5"
        >
          {" "}
          Locate A Centre{" "}
        </Link>
        <Link
          href="#"
          className="border-r-[2.5px] border-headerBorder py-4 px-5"
        >
          {" "}
          <FaShoppingCart size={20} />
        </Link>
        <div className=" border-headerBorder py-4 px-7"> </div>
        <Link
          href="#"
          className="border-x-[2.5px] border-headerBorder py-4 px-5"
        >
          {" "}
          <BiSolidChevronUp className="text-colorYellow" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderBar;
