import { IPricingPlan } from "@/interfaces/common/pricing.interface";
import Button from "@/shared/components/ui/Button";
import Image from "next/image";

const CheckIcon = () => (
  <Image src="/icons/check.svg" width={16} height={16} alt="Check" />
);
const CrossIcon = () => (
  <Image src="/icons/cross.svg" width={16} height={16} alt="Cross" />
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
      className={`font-manrope flex flex-col px-[24px] py-[40px] rounded-[10px] w-full 
      ${
        isActive
          ? "bg-[#ED3C6A] text-white  border border-transparent"
          : "bg-white text-[#111827] border border-[#FAC4D2]"
      }`}
    >
      <div className="mb-[20px]">
        <h3 className={`text-[22px] font-bold mb-[12px] "}`}>{name}</h3>

        <p
          className={`font-manrope! text-[16px]! font-[400]! ${isActive ? "text-white" : "text-[#64748B]"}`}
        >
          {description}
        </p>
      </div>

      <div className="mt-[6px] mb-[40px]">
        <div className="flex items-center gap-2 mb-[24px]">
          <span className={`text-[56px] font-[600] tracking-tighter "}`}>
            ${price}
          </span>
          <span
            className={`text-[16px]  font-[300] ${isActive ? "text-white" : "text-[#4B5768]"}`}
          >
            / Month
          </span>
        </div>

        {isActive ? (
          <Button
            variant="secondary"
            className="w-full text-[16px] font-semibold rounded-[4px] py-[11px]"
          >
            Get Started Now
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-2 text-[16px] font-semibold rounded-[4px] py-[11px]"
          >
            Get Started Now
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-[12px] flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-[17px]">
            <div
              className={`flex items-center justify-center w-[32px] h-[32px] rounded-full flex-shrink-0
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
              className={`text-[16px] font-medium
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
