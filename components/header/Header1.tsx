import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import Button from "../Button";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Header1 = () => {
  return (
    <section className=" flex flex-col md:h-[12vh] lg:h-[20vh]">
      <div className="md:flex justify-end p-4 gap-x-5 hidden">
        <Button>Contact us</Button>
        <Button>About us</Button>
        <Button>Charity</Button>
        <Button>FAQ</Button>
        <Button>Careers</Button>
        <Button>Blog</Button>
        <Button>Fleet</Button>
        <Button>White Tyre</Button>
      </div>

      <div className="flex px-6 h-[6vh] items-center justify-between ">
        <div className="md:w-[20vw] lg:h-[8vh] w-[120px] h-[10px] ">
          <Image src={logo} alt="logo" className="" />
        </div>
        {/* md:hidden */}
        <div className="flex w-[25%] h-[70%] justify-between md:hidden">
          <div className=" w-[40%] flex items-center justify-center bg-colorButton">
            <AiOutlineShoppingCart size={20} color="white" />
          </div>
          <div className=" bg-colorButton w-[40%] flex items-center justify-center ">
            <AiOutlineMenu size={20} color="white" />
          </div>
        </div>
        {/* -------------- */}
        <div className=" md:flex w-[50%] hidden ">
          <input
            type="text"
            placeholder="Seacrh for..."
            className="border border-green-950 w-[80%] py-2 text-xs pl-3"
          />
          <div className="flex bg-colorButton w-[20%]  text-white text-center justify-center items-center gap-x-1 ">
            <span className="font-bold ">search</span>
            <AiOutlineSearch />
          </div>
        </div>
        <div className="md:flex text-black text-center justify-center items-center gap-x-1 border border-slate-800 py-1 w-[10%] hover:cursor-pointer hidden">
          <span className="text-sm font-medium">Basket</span>
          <BsCart3 size={13} />
        </div>
      </div>
    </section>
  );
};

export default Header1;
