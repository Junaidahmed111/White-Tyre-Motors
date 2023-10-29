import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Offers from "@/components/Offers";
import ViewOrder from "@/components/ViewOrder";
import Experts from "@/components/Experts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Offers />
      <ViewOrder />
      <Experts />
    </main>
  );
}
