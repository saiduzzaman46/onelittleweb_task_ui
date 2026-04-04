import Image from "next/image";
import { pricingData } from "./pricing.data";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="
        w-full flex flex-col items-center bg-white
        pt-10 sm:pt-12 md:pt-14 lg:pt-[73px]
      "
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="text-center px-4">
        <h2
          className="
            font-bold text-[#000000]
            text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px]
            mb-3 lg:mb-[15px]
          "
        >
          Airbnb Assistent <span className="text-[#ED3C6A]">pricing</span>
        </h2>

        <span
          className="
            text-[#000000] font-[400]
            text-[14px] sm:text-[16px] lg:text-[20px]
          "
        >
          Choose a plan that&apos;s right for you
        </span>

        {/* ── Toggle row — properly centred at every size ──────────── */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-5 lg:mt-6 relative">
          <span className="text-[14px] sm:text-[16px] font-[400] text-[#000000]">
            Pay Monthly
          </span>

          <button className="w-[44px] h-[24px] bg-[#aeb0b8] rounded-full flex items-center px-[2px] transition-colors flex-shrink-0">
            <div className="w-[20px] h-[20px] bg-white rounded-full shadow-sm" />
          </button>

          <span className="text-[14px] sm:text-[16px] font-[400] text-[#000000]">
            Pay Yearly
          </span>

          {/* Arrow + Save badge — only shown on md+ so it doesn't overflow */}
          <div className="hidden md:flex relative w-[185px] h-[88px] flex-shrink-0">
            <div className="absolute top-[12px] -left-[6px] w-[110px] h-[95px]">
              <Image
                src="/icons/arrow2.svg"
                fill
                alt="Arrow Icon"
                sizes="110px"
              />
            </div>
            <span className="text-[#ED3C6A] text-[16px] lg:text-[18px] font-medium absolute top-[66px] left-[104px] whitespace-nowrap">
              Save 25%
            </span>
          </div>

          {/* Compact badge on small screens */}
          <span className="md:hidden text-[#ED3C6A] text-[13px] font-medium bg-pink-50 px-2 py-0.5 rounded-full">
            Save 25%
          </span>
        </div>
      </div>

      {/* ── Cards grid ─────────────────────────────────────────────── */}
      <div
        className="
          w-full max-w-[1310px]
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
          mt-8 sm:mt-10 lg:mt-[45px]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-[24px]">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
