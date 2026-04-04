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
        flex flex-col pt-[53px] pb-[30px] pl-[33px] pr-[25px] rounded-[13px] bg-white cursor-pointer
        ${
          isActive
            ? "shadow-[0_4px_90px_rgba(215,205,207,0.47)] border border-transparent"
            : "border border-[#FAC4D2] bg-transparent "
        }
      `}
    >
      <div className="w-[80px] h-[80px] relative mb-[32px]">
        <Image
          src={icon}
          alt={title.replace("\n", " ")}
          fill
          className="object-contain"
        />
      </div>
      <h4 className="text-[24px] leading-[1.3] font-bold text-[#1E1E1E] mb-[14px] whitespace-pre-line">
        {title}
      </h4>

      <p className="w-[306px] mb-[35px]">{description}</p>

      <Button size="outline" variant="outline">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;
