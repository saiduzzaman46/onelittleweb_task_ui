import Image from "next/image";
import { pricingData } from "@/data/pricing.data";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="
        w-full flex flex-col items-center bg-white
        pt-10 sm:pt-12 md:pt-14 lg:pt-18.25
      "
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="text-center px-4">
        <h2
          className="
            font-bold text-[#000000]
            text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px]
            mb-3 lg:mb-3.75
          "
        >
          Airbnb Assistent <span className="text-[#ED3C6A]">pricing</span>
        </h2>

        <span
          className="
            text-[#000000] font-normal
            text-[14px] sm:text-[16px] lg:text-[20px]
          "
        >
          Choose a plan that&apos;s right for you
        </span>

        {/* ── Toggle row — properly centred at every size ──────────── */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-5 lg:mt-6 relative">
          <span className="text-[14px] sm:text-[16px] font-normal text-[#000000]">
            Pay Monthly
          </span>

          <button className="w-11 h-6 bg-[#aeb0b8] rounded-full flex items-center px-0.5 transition-colors shrink-0">
            <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
          </button>

          <span className="text-[14px] sm:text-[16px] font-normal text-[#000000]">
            Pay Yearly
          </span>

          {/* Arrow + Save badge — only shown on md+ so it doesn't overflow */}
          <div className="hidden md:flex relative w-46.25 h-22 shrink-0">
            <div className="absolute top-3 -left-1.5 w-27.5 h-23.75">
              <Image
                src="/icons/arrow2.svg"
                fill
                alt="Arrow Icon"
                sizes="110px"
              />
            </div>
            <span className="text-[#ED3C6A] text-[16px] lg:text-[18px] font-medium absolute top-16.5 left-26 whitespace-nowrap">
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
          w-full max-w-327.5
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
          mt-8 sm:mt-10 lg:mt-11.25
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
