import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Offers from "@/components/Offers";
import ViewOrder from "@/components/ViewOrder";
import Experts from "@/components/Experts";
import Service from "@/components/Service";
import CTA from "@/components/CTA";
import More from "@/components/More";
import Gif from "@/components/Gif";
import Links from "@/components/Links";
import TyreHover from "@/components/TyreHover";

export default function Home() {
  return (
    <main>
      {/* <TyreHover/> */}
      {/* <Hero /> */}
      <Banner />
      <Offers />
      <ViewOrder />
      <Experts />
      <Links/>
      <Service />
      <More />
      <Gif />
      <CTA />
    </main>
  );
}
