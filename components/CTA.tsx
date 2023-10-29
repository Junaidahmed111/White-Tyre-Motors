import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

const CTA = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-colorYellow w-[100%]  gap-y-2 p-6">
      <div className="flex flex-col w-[95%] gap-y-2">
        <span className="font-semibold">Exclusive Online Pricing</span>
        <span className="text-sm">
          We are committed to offering customers our most competitive prices on
          tyres and more. Read about our exclusive online pricing.
        </span>
      </div>
      <div className="flex flex-col w-[90%]  gap-y-2">
        <span className="font-semibold">Locate A Center</span>
        <span className="text-sm">
          White Tyre Motors has over 600 centres across the UK including
          Northern Ireland, many of which are open 7 days a week for your
          convenience.
        </span>
      </div>
      <div className="flex flex-col w-[90%]  gap-y-2">
        <span className="font-semibold">FAQs</span>
        <span className="text-sm">
          We offer a series of FAQs to help you learn more about our services or
          your vehicle.
        </span>
      </div>
      <div className="flex flex-col w-[90%]  gap-y-2">
        <span className="font-semibold">Customer Care</span>
        <span className="font-semibold text-sm flex gap-x-1 justify-start items-center text-center">
          {" "}
          <BsTelephoneFill /> 0800 75 76 77
        </span>
        <span className="text-sm">
          You can reach our customer care team 7 days a week from 9:00am to
          6:00pm on Monday and Thursday, 8:30am to 6:00pm Tuesday, Wednesday and
          Friday, 8:30am to 5:00pm Saturday, and 10:00am to 4:00pm on Sundays
          and Bank Holidays.
        </span>
      </div>
    </section>
  );
};

export default CTA;
