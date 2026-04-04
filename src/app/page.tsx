import Hero from "@/pages/hero/Hero";
import TrustedBrands from "@/pages/home/TrustedBrands";
import Services from "@/pages/service/Services";
import Pricing from "@/pages/pricing/Pricing";
import Tools from "@/pages/tools/Tools";
import Faq from "@/pages/faq/Faq";
import Review from "@/pages/review/Review";
import GettingStarted from "@/pages/home/GettingStarted";
import WhyChooseUs from "@/pages/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBrands />
      <Services />
      <Pricing />
      <Tools />
      <GettingStarted />
      <WhyChooseUs />
      <Review />
      <Faq />
    </main>
  );
}
