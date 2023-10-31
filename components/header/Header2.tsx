import Link from "next/link";
import React, { useState } from "react";
import TyreHover from "../TyreHover";
import MOThover from "../MOThover";
import ServicingHover from "../ServicingHover";
import ProductsHover from "../ProductsHover";

const Header2 = () => {
  const [isTyresHovering, setIsTyresHovering] = useState(false);
  const [isMOTHovering, setIsMOTHovering] = useState(false);
  const [isServicingHovering, setIsServicingHovering] = useState(false);
  const [isProductsHovering, setIsProductsHovering] = useState(false);

  return (
    <div className="lg:flex bg-colorText text-white text-sm items-center text-center pl-14 hidden">
      <div
        onMouseEnter={() => setIsTyresHovering(true)}
        onMouseLeave={() => setIsTyresHovering(false)}
      >
        <Link
          href="#"
          className="border-x-[2.5px] border-headerBorder py-4 px-5 "
        >
          {" "}
          Tyres
        </Link>
        <div> {isTyresHovering && <TyreHover />}</div>
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
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
        {" "}
        Brakes
      </Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5">
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
        <div> {isProductsHovering && <ProductsHover />}</div>
      </div>
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
    </div>
  );
};

export default Header2;
