import React from "react";
import more from "@/public/assets/More.webp";
import Image from "next/image";
import Link from "next/link";
import link1 from "@/public/assets/link1.webp";
import link2 from "@/public/assets/link2.jpg";
import link3 from "@/public/assets/link3.webp";

const Links = () => {
  return (
    <div className="flex w-[100%] justify-center items-center text-colorText bg-colorBgHero">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-y-6 py-10 w-[90%] ">
        <div className="flex flex-col lg:gap-y-3 items-center justify-center gap-y-5 font-bold hover:scale-105 mb-3 lg:mb-0">
          <Link href="#">Mobie Fitting - We Come To You</Link>
          <Image
            src={link1}
            alt="more"
            width={350}
            height={200}
            className="border-4 border-white"
          />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center font-bold hover:scale-105">
          <Link href="#">Exlusive Online Pricing</Link>
          <Image
            src={link2}
            alt="more"
            width={350}
            height={200}
            className="border-4 border-white"
          />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center font-bold hover:scale-105">
          <Link href="#">Bike Repair and Servicing</Link>
          <Image
            src={link3}
            alt="more"
            width={350}
            height={200}
            className="border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Links;
