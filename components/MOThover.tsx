import Link from "next/link";
import React from "react";
import tyre from "@/public/assets/offer1.webp";
import Image from "next/image";

const MOThover = () => {
  return (
    <div className={"absolute w-fit left-11 z-[499]"}>
      <div className="flex !w-[100%] shadow-2xl px-10 py-5 justify-between gap-x-5 bg-white relative top-4">
        {/* 1 */}
        <div className=" flex flex-col flex-1">
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-lg text-hoverHeading">MOT</span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Book Your MOT
            </Link>
            <Link href="#" className="hover:underline text-colorText">
              When is my MOT due?
            </Link>
          </div>
          <div className="flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              MOT & Service
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Book A Combined Service And MOT
            </Link>
          </div>
          <div className="flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              MOT Information
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              MOT failure and retest
            </Link>
            <Link href="#" className="hover:underline text-colorText">
              MOT test checks
            </Link>
            <Link href="#" className="hover:underline text-colorText">
              Pre-MOT Checks
            </Link>
            <Link href="#" className="hover:underline text-colorText">
              Driving With No MOT
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className=" flex flex-col flex-1">
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              Reminder Service
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Most reminder Service
            </Link>
          </div>
          <div className="flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              white Tyre Fit Club
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Subscribe and Save
            </Link>
          </div>
        </div>
        {/* 3 */}
        <div className=" flex flex-col flex-1">
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              Servicing{" "}
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Book Your Service
            </Link>
          </div>
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              MOT and Service{" "}
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Book Your Service
            </Link>
          </div>
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              MOT Information{" "}
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Book Your Service
            </Link>
          </div>
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              Servicing{" "}
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              Book Your Service
            </Link>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col flex-1">
          <div className=" flex flex-col gap-y-1 text-start">
            <span className="font-bold text-hoverHeading text-lg">
              Tyre Offers
            </span>
            <hr className="h-[3px] bg-colorText" />
            <Link href="#" className="hover:underline text-colorText">
              <Image src={tyre} alt="tyre" width={250} height={100} />
            </Link>
            <Link href="#" className="hover:underline text-colorText">
              10% Off 2 or more Michelin CrossClimate tyres plus claim a free
              Smart Bottle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOThover;
