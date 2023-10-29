import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Offers from "@/components/Offers";
import ViewOrder from "@/components/ViewOrder";
import Experts from "@/components/Experts";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Offers />
      <ViewOrder />
      <Experts />
      <Service />
    </main>
  );
}
