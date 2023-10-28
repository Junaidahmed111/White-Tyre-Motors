import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
const HeaderMobile = () => {
  return (
    <section className="flex px-6 h-[6vh] items-center justify-between ">
      <div>
        <Image src={logo} alt="logo" width={120} height={70} />
      </div>
      <div className="flex w-[25%] h-[70%] justify-between">
        <div className="  w-[40%] flex items-center justify-center bg-colorButton">
          <AiOutlineShoppingCart size={20} color="white" />
        </div>
        <div className=" bg-colorButton w-[40%] flex items-center justify-center ">
          <AiOutlineMenu size={20} color="white" />
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
