import React from "react";
import service1 from "@/public/assets/service1.webp";
import Image from "next/image";

const Service = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center my-14">
      <div className="text-colorText text-3xl flex text-center font-medium justify-center">
        <span>Our Services</span>
      </div>

      <div className="flex flex-col md:flex-row w-[100%] justify-center items-center">
        <div className="space-x-4 md:w-[30%] w-[90%] flex flex-col justify-center">
          <div className="flex justify-center items-center w-full">
          <Image
              src={service1}
              alt="experts"
              width={200}
              height={200}
              className="md:w-250 md:h-250"
            />
          </div>
           
            <h3 className="text-xl font-semibold text-colorText">
              Highly Trained Technicians
            </h3>
            <span >
              When it comes to safety on the road, its vital to have expert
              technicians working on your car. Our recruitment process includes
              industry-leading, Ofsted-accredited training to ensure that when
              our technicians get out of the.
            </span>
        </div>

        {/* Add similar adjustments for other service blocks */}
        <div className="space-x-4 md:w-[30%] w-[90%]">
        <div className="flex justify-center items-center w-full">
            <Image
              src={service1}
              alt="experts"
              width={200}
              height={200}
              className="md:w-250 md:h-250"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-colorText">
              Highly Trained Technicians
            </h3>
            <span>
              When it comes to safety on the road, its vital to have expert
              technicians working on your car. Our recruitment process includes
              industry-leading, Ofsted-accredited training to ensure that when
              our technicians get out of the.
            </span>
          </div>
        </div>

        {/* Add similar adjustments for other service blocks */}
        <div className=" space-x-4 md:w-[30%] w-[90%]">
        <div className="flex justify-center items-center w-full">
            <Image
              src={service1}
              alt="experts"
              width={200}
              height={200}
              className="md:w-250 md:h-250"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-colorText">
              Highly Trained Technicians
            </h3>
            <span>
              When it comes to safety on the road, its vital to have expert
              technicians working on your car. Our recruitment process includes
              industry-leading, Ofsted-accredited training to ensure that when
              our technicians get out of the.
            </span>
          </div>
        </div>
      </div>

      {/* div 2 main */}

      <div className="flex flex-col md:flex-row w-[100%] justify-center items-center">
        <div className="md:w-[30%] w-[90%] justify-center items-center">
        <div className="flex justify-center items-center w-full">

          <Image
            src={service1}
            alt="experts"
            width={200}
            height={200}
            className="md:w-250 md:h-250"
          />
          </div>
          <h3 className="text-xl font-semibold text-colorText">
            Highly Trained Technicians
          </h3>

          <span>
            When it comes to safety on the road, its vital to have expert
            technicians working on your car. Our recruitment process includes
            industry-leading, Ofsted-accredited training to ensure that when our
            technicians get out of the.
          </span>
        </div>

        {/* Add similar adjustments for other service blocks */}
        <div className="space-x-4 md:w-[30%] w-[90%]">
        <div className="flex justify-center items-center w-full">
            <Image
              src={service1}
              alt="experts"
              width={200}
              height={200}
              className="md:w-250 md:h-250"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-colorText">
              Highly Trained Technicians
            </h3>
            <span>
              When it comes to safety on the road, its vital to have expert
              technicians working on your car. Our recruitment process includes
              industry-leading, Ofsted-accredited training to ensure that when
              our technicians get out of the.
            </span>
          </div>
        </div>

        {/* Add similar adjustments for other service blocks */}
        <div className=" space-x-4 md:w-[30%] w-[90%]">
        <div className="flex justify-center items-center w-full">
            <Image
              src={service1}
              alt="experts"
              width={200}
              height={200}
              className="md:w-250 md:h-250"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-colorText">
              Highly Trained Technicians
            </h3>
            <span>
              When it comes to safety on the road, its vital to have expert
              technicians working on your car. Our recruitment process includes
              industry-leading, Ofsted-accredited training to ensure that when
              our technicians get out of the.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
