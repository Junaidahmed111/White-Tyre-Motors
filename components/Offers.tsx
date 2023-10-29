import React from "react";
import offer1 from "@/public/assets/offer1.webp";
import Image from "next/image";

const Offers = () => {
  return (
    <section className="bg-colorBgHero">
      <div className=" flex justify-center text-center items-center py-5">
        <span className="text-colorText font-medium text-3xl">
          Offers and Promotions
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-6 md:w-[100%]">
        <div className="flex flex-col justify-start md:justify-center w-[85%] md:w-[30%] p-2">
          <Image src={offer1} alt="" width={400} height={400} />
          <span className="text-colorText ">
            Free Smart Bottle - Plus 10% off 2 or more CrossClimate Tyres
          </span>
        </div>
        <div className="flex flex-col justify-start w-[85%] md:w-[30%] p-2">
          <Image src={offer1} alt="" width={400} height={400} />
          <span className="text-colorText">
            Free Smart Bottle - Plus 10% off 2 or more CrossClimate Tyres
          </span>
        </div>
        <div className="flex flex-col justify-start w-[85%] md:w-[30%] p-2">
          <Image src={offer1} alt="" width={400} height={400} />
          <span className="text-colorText">
            Free Smart Bottle - Plus 10% off 2 or more CrossClimate Tyres
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-y-6 md:w-[100%]">
        <div className="flex flex-col justify-start w-[85%] md:w-[30%] p-2">
          <Image src={offer1} alt="" width={400} height={400} />
          <span className="text-colorText">
            Free Smart Bottle - Plus 10% off 2 or more CrossClimate Tyres
          </span>
        </div>
        <div className="flex flex-col justify-start w-[85%] md:w-[30%] p-2">
          <Image src={offer1} alt="" width={400} height={400} />
          <span className="text-colorText">
            Free Smart Bottle - Plus 10% off 2 or more CrossClimate Tyres
          </span>
        </div>
        <div className="flex flex-col justify-start w-[85%] md:w-[30%] p-2">
          <Image src={offer1} alt="" width={400} height={400} />
          <span className="text-colorText">
            Free Smart Bottle - Plus 10% off 2 or more CrossClimate Tyres
          </span>
        </div>
      </div>
      
    </section>
  );
};

export default Offers;
