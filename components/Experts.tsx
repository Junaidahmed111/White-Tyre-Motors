import Image from "next/image";
import React from "react";
import experts1 from "@/public/assets/experts1.webp";

const Experts = () => {
  return (
    <section className="w-full">
      <span className=" text-colorText text-3xl flex text-center font-medium justify-center mt-10">
        For service you can trust, rely on Kwik Fits experts
      </span>



      <div className="flex flex-col md:flex-row justify-center items-center mb-10 mt-10 gap-y-6 md:w-[90%]  mx-auto space-x-4">
  <Image
    src={experts1}
    alt="experts"
    width={200}
    height={200}
    className="md:w-300 md:h-300"
  />
  <div>
    <h3 className="text-xl font-semibold text-colorText">
      Highly Trained Technicians
    </h3>
    <span>
      When it comes to safety on the road, its vital to have expert
      technicians working on your car. Our recruitment process includes
      industry-leading, Ofsted-accredited training to ensure that when our
      technicians get out of the academy to start inspecting, servicing,
      and repairing your vehicle, theyre the best in the trade.
    </span>
  </div>
</div>



<div className="flex flex-col md:flex-row justify-center items-center mb-10 gap-y-6 md:w-[90%] mx-auto space-x-4">
  <Image
    src={experts1}
    alt="experts"
    width={200}
    height={200}
    className="md:w-300 md:h-300"
  />
  <div>
    <h3 className="text-xl font-semibold text-colorText">
      Highly Trained Technicians
    </h3>
    <span>
      When it comes to safety on the road, its vital to have expert
      technicians working on your car. Our recruitment process includes
      industry-leading, Ofsted-accredited training to ensure that when our
      technicians get out of the academy to start inspecting, servicing,
      and repairing your vehicle, theyre the best in the trade.
    </span>
  </div>
</div>
<div className="flex flex-col md:flex-row justify-center items-center mb-10 gap-y-6 md:w-[90%] mx-auto space-x-4">
  <Image
    src={experts1}
    alt="experts"
    width={200}
    height={200}
    className="md:w-300 md:h-300"
  />
  <div>
    <h3 className="text-xl font-semibold text-colorText">
      Highly Trained Technicians
    </h3>
    <span>
      When it comes to safety on the road, its vital to have expert
      technicians working on your car. Our recruitment process includes
      industry-leading, Ofsted-accredited training to ensure that when our
      technicians get out of the academy to start inspecting, servicing,
      and repairing your vehicle, theyre the best in the trade
    </span>
  </div>
</div>
    </section>
  );
};

export default Experts;
