import Image from "next/image";
import { pricingData } from "./pricing.data";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full flex flex-col items-center  bg-white pt-[73px]"
    >
      <div className="text-center relative">
        <h2 className="text-[40px] font-bold text-[#000000] mb-[15px]">
          Airbnb Assistent <span className="text-[#ED3C6A]">pricing</span>
        </h2>
        <span className="text-[20px] text-[#000000]  font-[400]">
          Choose a plan that's right for you
        </span>

        <div className="flex items-center justify-center gap-[24px] pl-[210px] relative  ">
          <span className="text-[16px] font-[400] text-[#000000]">
            Pay Monthly
          </span>

          <button className="w-[44px] h-[24px] bg-[#aeb0b8] rounded-full flex items-center px-[2px] transition-colors">
            <div className="w-[20px] h-[20px] bg-white rounded-full shadow-sm" />
          </button>

          <span className="text-[16px] font-[400] text-[#000000]">
            Pay Yearly
          </span>

          <div className="relative flex flex-col gap-3 w-[185px] h-[88px]">
            <div className="absolute top-[12px] -left-[6px] w-[110px] h-[95px]">
              <Image src="/icons/arrow2.svg" fill alt="Arrow Icon" />
            </div>
            <span className="text-[#ED3C6A] text-[18px] font-medium absolute top-[66px] left-[104px]">
              Save 25%
            </span>
          </div>
        </div>
      </div>

      <div className="w-full justify-center px-[125px] mt-[45px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
