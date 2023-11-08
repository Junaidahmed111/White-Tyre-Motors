"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import Button from "../Button";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import navList from "@/data/navList";
import SideNavItem from "./SideNavItem";
import logo from "@/public/assets/nft_logo-modified.png"

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Header1 = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  //@ts-ignore
  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };

  const handleBackClick = () => {
    setActiveTitle(null);
  };
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section className="flex flex-col md:h-[12vh] lg:h-[20vh]">
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

      <div className="flex px-6 h-[6vh] items-center justify-between">
        <div className="">
          <Image src={logo} alt="logo" className="" width={50} height={50}/>
        </div>
        {/* md:hidden */}
        <div className="flex w-[25%] h-[70%] justify-between md:hidden">
          <div className=" w-[40%] flex items-center justify-center bg-colorButton">
            <AiOutlineShoppingCart size={20} color="white" />
          </div>
          <div className=" bg-colorButton w-[40%] flex items-center justify-center ">
            <div className="flex order-3 lg:hidden md:order-non">
              <button className="2xl:hidden z-20" onClick={handleMenuToggle}>
                {menuOpen ? (
                  <AiOutlineClose size="30px" color="#fff" />
                ) : (
                  <RxHamburgerMenu size="30px" color="#fff" />
                )}
              </button>
            </div>
            {menuOpen && (
              <div className="lg:hidden absolute text-left inset-0 w-[80%] top-24 h-screen flex flex-col p-4 space-y-1 bg-colorText z-50 ">
                <div className="flex justify-center flex-col text-white">
                  {activeTitle ? (
                    <div>
                      <button onClick={handleBackClick}><IoMdArrowRoundBack size={20}/></button>
                      {navList.map((navItem) => {
                        if (navItem.title === activeTitle) {
                          return navItem.subTitle.map((subItem) => (
                            <div className="">
                              <SideNavItem
                                key={subItem.id}
                                title={subItem.title}
                              />
                            </div>
                          ));
                        }
                        return null;
                      })}
                    </div>
                  ) : (
                    navList.map((navItem) => (
                      <div
                        key={navItem.id}
                        onClick={() => handleTitleClick(navItem.title)}
                      >
                        <SideNavItem title={navItem.title}/>
                      </div>
                    ))
                  )}
                </div>
                <hr />
                <div className="flex justify-stretch flex-col gap-y-5 py-4 items-stretch text-center rounded-xl">
                  <span className="bg-colorB text-white font-bold text-sm rounded-xl items-center content-center cursor-pointer px-5 py-3">
                    © 2023 White Tyre Motors Limited
                  </span>
                </div>
              </div>
            )}
            {/* <AiOutlineMenu size={20} color="white" /> */}
          </div>
        </div>
        {/* -------------- */}
        <div className=" md:flex w-[50%] hidden ">
          <input
            type="text"
            placeholder="Seacrh for..."
            className=" border-[0.9px] border-green-950 w-[80%] py-2 text-xs pl-3"
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
