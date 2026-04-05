import dynamic from "next/dynamic";
import Hero from "@/sections/hero/Hero";
import TrustedBrands from "@/sections/home/TrustedBrands";
import Services from "@/sections/service/Services";

const Pricing = dynamic(() => import("@/sections/pricing/Pricing"));
const Tools = dynamic(() => import("@/sections/tools/Tools"));
const Faq = dynamic(() => import("@/sections/faq/Faq"));
const Review = dynamic(() => import("@/sections/review/Review"));
const GettingStarted = dynamic(() => import("@/sections/home/GettingStarted"));
const WhyChooseUs = dynamic(() => import("@/sections/home/WhyChooseUs"));


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

