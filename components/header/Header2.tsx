import Link from "next/link";
import React from "react";

const Header2 = () => {
  return (
    <div className="flex bg-colorText text-white text-sm items-center text-center pl-14">
      <Link href="#" className="border-x-[2.5px] border-headerBorder py-4 px-5 "> Tyres</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5"> MOT</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5"> Servicing</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5"> Brakes</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5"> Batteries</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5"> Other Products</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5 bg-colorButton"> Offers</Link>
      <Link href="#" className="border-r-[2.5px] border-headerBorder py-4 px-5"> Locate A Centre </Link>
    </div>
  );
};

export default Header2;
