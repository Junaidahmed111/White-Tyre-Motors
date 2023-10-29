import Link from "next/link";
import React from "react";
import payment1 from "@/public/assets/payment1.webp";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import fb from "@/public/assets/facebook.webp";
import insta from "@/public/assets/insta.webp";
import x from "@/public/assets/x.webp";
import youtube from "@/public/assets/youtube.webp";
import firelin from "@/public/assets/firelli.webp";
import mechalin from "@/public/assets/michelin.webp";
import goodYear from "@/public/assets/goodyear.webp";
import gpay from "@/public/assets/Gpay.webp";
import paypal from "@/public/assets/paypal.webp";
import pypalcredit from "@/public/assets/paypalCredit.webp";
import visa from "@/public/assets/visa.webp";
import masterCard from "@/public/assets/mastercard.webp";
import bumper from "@/public/assets/bumper.png";

const Footer = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row bg-colorText text-footerTextColor lg:[w-100%] lg:p-6">
        <div className=" flex flex-col gap-y-2 m-3 w-[25%]">
          <span className="font-medium text-md text-white">Book Online</span>
          <Link href="#" className="text-sm">
            {" "}
            Tyre Search
          </Link>
          <Link href="#" className="text-sm">
            {" "}
            Mobile Tyre Fitting
          </Link>
          <Link href="#" className="text-sm">
            Book an MOT
          </Link>
          <Link href="#" className="text-sm">
            Book a Service{" "}
          </Link>
          <Link href="#" className="text-sm">
            Air can Recharge
          </Link>
          <Link href="#" className="text-sm">
            {" "}
            Batteries{" "}
          </Link>
          <Link href="#" className="text-sm">
            Exhausts
          </Link>
          <Link href="#" className="text-sm">
            Brakes
          </Link>
        </div>
        <div className=" flex flex-col gap-y-2 m-3 w-[25%]">
          <span className="font-medium text-md text-white">Information</span>
          <Link href="#" className="text-sm">
            Fleet Services
          </Link>
          <Link href="#" className="text-sm">
            {" "}
            Mobile Tyre Fitting
          </Link>
          <Link href="#" className="text-sm">
            Book an MOT
          </Link>
          <Link href="#" className="text-sm">
            Book a Service{" "}
          </Link>
          <Link href="#" className="text-sm">
            Air can Recharge
          </Link>
          <Link href="#" className="text-sm">
            {" "}
            Batteries{" "}
          </Link>
          <Link href="#" className="text-sm">
            Exhausts
          </Link>
          <Link href="#" className="text-sm">
            Brakes
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 m-3 w-[25%]">
          <span className="font-medium text-md text-white">Customer Care</span>
          <Link href="#" className="text-sm">
            Contact us
          </Link>
          <Link href="#" className="text-sm">
            {" "}
            Mobile Tyre Fitting
          </Link>
          <Link href="#" className="text-sm">
            Book an MOT
          </Link>
          <Link href="#" className="text-sm">
            Book a Service{" "}
          </Link>
          <Link href="#" className="text-sm">
            Air can Recharge
          </Link>
          <Link href="#" className="text-sm">
            {" "}
            Batteries{" "}
          </Link>
          <Link href="#" className="text-sm">
            Exhausts
          </Link>
          <Link href="#" className="text-sm">
            Brakes
          </Link>
        </div>

        <div className="flex flex-col gap-y-2 m-3 lg:w-[25%] w-[90%]">
          <span className="font-medium text-md text-white">
            Secure Online Payments
          </span>
          <Link href="#" className="text-sm">
            Contact us
          </Link>
          <div className="flex flex-col gap-y-4 ">
            <div className="flex gap-x-8 ">
              <Image src={visa} alt="payment" width={100} height={100} className="" />
              <Image src={masterCard} alt="payment" width={100} height={100} />
            </div>
            <div className="flex gap-x-8 ">
              <Image src={paypal} alt="payment" width={100} height={100} className="pr-3"  />
              <Image src={pypalcredit} alt="payment" width={100} height={100} />
            </div>
            <div className="flex gap-x-8 ">
              <Image src={payment1} alt="payment" width={100} height={100} className="pr-3"  />
              <Image src={gpay} alt="payment" width={100} height={100} />
            </div>
            <div className="flex gap-x-8 ">
              <Image src={bumper} alt="payment" width={100} height={100} />
            </div>
          </div>
          <span className="text-xs">
            Finance provided by PayPal Credit. Subject to status. Terms and
            conditions apply. Credit subject to status. UK residents only.
            KWIK-FIT (GB) LIMITED acts as a broker and offers credit solely from
            PayPal (Europe) S.à rl et Cie, S.C.A, 22-24 Boulevard Royal, L-2449,
            Luxembourg.
          </span>
        </div>
      </section>

      <div className="flex w-[100%] items-center justify-center bg-colorText">
        <div className="lg:flex w-[20%] hidden">
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={50}
            className="bg-cover"
          />
        </div>
        <div className="lg:flex gap-x-3 w-[40%] hidden">
          <Image src={firelin} alt="logo" width={120} height={50} />
          <Image src={mechalin} alt="logo" width={120} height={50} />
          <Image src={goodYear} alt="logo" width={120} height={50} />
        </div>
        <div className="flex lg:w-[20%] w-[95%]  lg:gap-x-3 gap-x-6 lg:justify-end justify-start">
          <Image src={fb} alt="logo" width={40} height={30} />
          <Image src={x} alt="logo" width={40} height={50} />
          <Image src={insta} alt="logo" width={40} height={50} />
          <Image src={youtube} alt="logo" width={40} height={50} />
        </div>
      </div>

      <div className="flex w-[100%] bg-colorText text-footerTextColor text-xs justify-center text-center py-4">
        <span className="w-[90%]">
          *All tyre discounts exclude charges for fitting, balancing, valve and
          disposal. Premium tyre range as of 25/07/2023 includes Bridgestone,
          Continental, Goodyear, Hankook, Michelin, Pirelli and Yokohama.
          Promotional codes cannot be used in conjunction with any other offer,
          discount or promotion unless otherwise stated
        </span>
      </div>
      <div className="flex bg-black text-[#a3a6a9] text-sm pl-14 py-2">
        <span>© 2023 White Tyre Motors Limited</span>
      </div>
    </>
  );
};

export default Footer;
