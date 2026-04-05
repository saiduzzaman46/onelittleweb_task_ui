import dynamic from "next/dynamic";
import Hero from "@/sections/hero/Hero";
import TrustedBrands from "@/sections/home/TrustedBrands";
import Services from "@/sections/service/Services";
import Pricing from "@/sections/pricing/Pricing";
import Tools from "@/sections/tools/Tools";
import Faq from "@/sections/faq/Faq";
import Review from "@/sections/review/Review";
import GettingStarted from "@/sections/home/GettingStarted";
import WhyChooseUs from "@/sections/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <Services />
      <Pricing />
      <Tools />
      <GettingStarted />
      <WhyChooseUs />
      <Review />
      <Faq />
    </>
  );
}
