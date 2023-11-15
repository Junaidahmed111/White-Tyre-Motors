import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineStar,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import { LuTimer } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="lg:flex justify-evenly text-sm text-white bg-colorYellow py-2 hidden">
      <div className="flex justify-center items-center">
        <AiOutlineCalendar />
        <span>Open 7 Days a Week</span>
      </div>
      <div className="flex justify-center items-center">
        <AiOutlineStar />
        <span>Rated 4/5 on TrustPilot</span>
      </div>
      <div className="flex justify-center items-center">
        <LuTimer />
        <span>Same Day Fitting</span>
      </div>
      <div className="flex justify-center items-center">
        <AiFillSafetyCertificate />
        <span>Certified Technician</span>
      </div>
    </section>
  );
};

export default Banner;
