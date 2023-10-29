import React from "react";
import service1 from "@/public/assets/service1.webp";
import Image from "next/image";

const Service = () => {
  return (
    <section className="w-full">
      <span className="text-colorText text-3xl flex text-center font-medium justify-center mt-10">
        Our Services
      </span>

      <div className="flex md:flex-row justify-center items-center mb-10 mt-10 gap-y-6 md:w-4/5 mx-auto space-x-4">
        <div className="flex justify-center items-center">
          <Image
            src={service1}
            alt="experts"
            width={200}
            height={200}
            className="md:w-300 md:h-300"
          />
        </div>
        <div className="md:text-left">
          <h3 className="text-xl font-semibold text-colorText">
            Highly Trained Technicians
          </h3>
          <span>
            When it comes to safety on the road, it's vital to have expert
            technicians working on your car. Our recruitment process includes
            industry-leading, Ofsted-accredited training to ensure that when our
            technicians get out of the academy to start inspecting, servicing,
            and repairing your vehicle, they're the best in the trade.
          </span>
        </div>
      </div>

      {/* Add similar adjustments for other service blocks */}
      <div className="flex md:flex-row justify-center items-center mb-10 gap-y-6 md:w-4/5 mx-auto space-x-4">
        <div className="flex justify-center items-center">
          <Image
            src={service1}
            alt="experts"
            width={200}
            height={200}
            className="md:w-300 md:h-300"
          />
        </div>
        <div className="md:text-left">
          <h3 className="text-xl font-semibold text-colorText">
            Highly Trained Technicians
          </h3>
          <span>
            When it comes to safety on the road, it's vital to have expert
            technicians working on your car. Our recruitment process includes
            industry-leading, Ofsted-accredited training to ensure that when our
            technicians get out of the academy to start inspecting, servicing,
            and repairing your vehicle, they're the best in the trade.
          </span>
        </div>
      </div>

      {/* Add similar adjustments for other service blocks */}
      <div className="flex md:flex-row justify-center items-center mb-10 gap-y-6 md:w-4/5 mx-auto space-x-4">
        <div className="flex justify-center items-center">
          <Image
            src={service1}
            alt ="experts"
            width={200}
            height={200}
            className="md:w-300 md:h-300"
          />
        </div>
        <div className="md:text-left">
          <h3 className="text-xl font-semibold text-colorText">
            Highly Trained Technicians
          </h3>
          <span>
            When it comes to safety on the road, it's vital to have expert
            technicians working on your car. Our recruitment process includes
            industry-leading, Ofsted-accredited training to ensure that when our
            technicians get out of the academy to start inspecting, servicing,
            and repairing your vehicle, they're the best in the trade.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Service;
