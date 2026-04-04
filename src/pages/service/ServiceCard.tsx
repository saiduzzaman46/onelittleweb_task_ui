import Image from "next/image";
import { IService } from "@/interfaces/common/service.interface";
import Button from "@/shared/components/ui/Button";

interface ServiceCardProps extends IService {
  onClick: () => void;
}

const ServiceCard = ({
  title,
  description,
  icon,
  isActive = false,
  onClick,
}: ServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col rounded-[13px] bg-white cursor-pointer
        pt-6 pb-5 px-5
        sm:pt-8 sm:pb-6 sm:pl-7 sm:pr-5
        md:pt-9 md:pb-6 md:pl-8 md:pr-6
        lg:pt-10 lg:pb-7 lg:pl-8 lg:pr-6
        xl:pt-[53px] xl:pb-[30px] xl:pl-[33px] xl:pr-[25px]
        ${
          isActive
            ? "shadow-[0_4px_90px_rgba(215,205,207,0.47)] border border-transparent"
            : "border border-[#FAC4D2] bg-transparent "
        }
      `}
    >
      <div
        className="
          relative mb-4 sm:mb-5 xl:mb-[32px]
          w-[52px] h-[52px]
          sm:w-[62px] sm:h-[62px]
          md:w-[70px] md:h-[70px]
          xl:w-[80px] xl:h-[80px]
        "
      >
        <Image
          src={icon}
          alt={title.replace("\n", " ")}
          fill
          sizes="(max-width: 640px) 52px, (max-width: 768px) 62px, (max-width: 1280px) 70px, 80px"
          className="object-contain"
        />
      </div>

      <h4
        className="
          font-bold text-[#1E1E1E] whitespace-pre-line leading-[1.3]
          text-[18px] mb-2
          sm:text-[20px] sm:mb-3
          md:text-[22px]
          xl:text-[24px] xl:mb-[14px]
        "
      >
        {title}
      </h4>

      <p className="w-full mb-4 sm:mb-5 xl:mb-[35px]">
        {description}
      </p>

      <Button size="outline" variant="outline">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;

