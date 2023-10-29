import React from "react";
import { BsChevronRight } from "react-icons/bs";

const ViewOrder = () => {
  return (
    <section className="flex items-center justify-center text-center w-[100%] p-4 hover:cursor-pointer bg-colorBgHero">
      <div className=" flex bg-colorButton text-white items-center justify-center gap-x-1 w-[50%] lg:w-[15%] h-12 ">
        <span>View All Orders</span>
        <BsChevronRight />
      </div>
    </section>
  );
};

export default ViewOrder;
