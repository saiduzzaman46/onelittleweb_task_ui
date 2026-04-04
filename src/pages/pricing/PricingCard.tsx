import { IPricingPlan } from "@/interfaces/common/pricing.interface";
import Button from "@/shared/components/ui/Button";
import Image from "next/image";

const CheckIcon = () => (
  <Image src="/icons/check.svg" width={16} height={16} alt="Check" style={{ width: "auto", height: "auto" }} />
);
const CrossIcon = () => (
  <Image src="/icons/cross.svg" width={16} height={16} alt="Cross" style={{ width: "auto", height: "auto" }} />
);

const PricingCard = ({
  name,
  description,
  price,
  features,
  isActive,
}: IPricingPlan) => {
  return (
    <div
      className={`font-manrope flex flex-col rounded-[10px] w-full
        px-4 py-6
        sm:px-5 sm:py-8
        md:px-[20px] md:py-[32px]
        lg:px-[24px] lg:py-[40px]
      ${
        isActive
          ? "bg-[#ED3C6A] text-white  border border-transparent"
          : "bg-white text-[#111827] border border-[#FAC4D2]"
      }`}
    >
      {/* Plan name + description */}
      <div className="mb-4 lg:mb-[20px]">
        <h3
          className={`font-bold mb-2 lg:mb-[12px]
            text-[18px] sm:text-[19px] lg:text-[22px]
          `}
        >
          {name}
        </h3>

        <p
          className={`font-manrope! font-[400]!
            text-[13px]! sm:text-[14px]! lg:text-[16px]!
            ${isActive ? "text-white" : "text-[#64748B]"}`}
        >
          {description}
        </p>
      </div>

      {/* Price + CTA */}
      <div className="mt-1 mb-6 lg:mt-[6px] lg:mb-[40px]">
        <div className="flex items-center gap-2 mb-4 lg:mb-[24px]">
          <span
            className={`font-[600] tracking-tighter
              text-[38px] sm:text-[44px] lg:text-[56px]
            `}
          >
            ${price}
          </span>
          <span
            className={`font-[300]
              text-[13px] sm:text-[14px] lg:text-[16px]
              ${isActive ? "text-white" : "text-[#4B5768]"}`}
          >
            / Month
          </span>
        </div>

        {isActive ? (
          <Button
            variant="secondary"
            className="w-full text-[14px] sm:text-[15px] lg:text-[16px] font-semibold rounded-[4px] py-[11px]"
          >
            Get Started Now
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-2 text-[14px] sm:text-[15px] lg:text-[16px] font-semibold rounded-[4px] py-[11px]"
          >
            Get Started Now
          </Button>
        )}
      </div>

      {/* Feature list */}
      <div className="flex flex-col gap-3 lg:gap-[12px] flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 lg:gap-[17px]">
            <div
              className={`flex items-center justify-center rounded-full flex-shrink-0
                w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]
              ${
                feature.included
                  ? isActive
                    ? "bg-[#FAC4D2] text-[#ED3C6A]"
                    : "bg-[#FAC4D2] text-[#ED3C6A]"
                  : isActive
                    ? "bg-white text-[#ED3C6A]"
                    : "bg-[#F7F8F9] text-[#4b5563]"
              }
            `}
            >
              {feature.included ? <CheckIcon /> : <CrossIcon />}
            </div>
            <span
              className={`font-medium
                text-[13px] sm:text-[14px] lg:text-[16px]
              ${isActive ? "text-white" : feature.included ? "text-[#191D23]" : "text-[#A0ABBB]"}
            `}
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
