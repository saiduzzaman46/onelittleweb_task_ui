import { ReactNode } from "react";
import { cn } from "@/core/utils/TailwinMerge";

interface SectionHeaderProps {
  title: ReactNode;
  highlightText?: string;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader = ({
  title,
  highlightText,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center flex flex-col items-center", className)}>
      <h2
        className={cn(
          "text-[32px] md:text-[40px] font-bold text-[#000000] mb-[15px]",
          titleClassName,
        )}
      >
        {title}{" "}
        {highlightText && (
          <span className="text-[#ED3C6A]">{highlightText}</span>
        )}
      </h2>

      {subtitle && <p> {subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
