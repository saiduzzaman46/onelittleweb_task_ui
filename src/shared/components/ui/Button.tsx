import { cn } from "@/core/utils/TailwinMerge";
import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "outline";
  icon?: boolean;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading,
  className,
  ...props
}: ButtonProps & { className?: string }) => {
  const baseStyles =
    "inline-flex items-center justify-center transition-all disabled:cursor-not-allowed gap-[10px]";

  const variants = {
    primary: "bg-[#ED3C6A] text-white  border",
    secondary: "bg-white text-[#ED3C6A] ",
    outline: "border-1 border-[#ED3C6A] text-[#ED3C6A] ",
  };

  const sizes = {
    sm: "px-[18px] py-[10px] text-[16px] rounded-[8px] font-[500] h-[44px]",
    md: "px-[22px] py-[18px] text-[14px] rounded-[5px] font-[700] h-[50px]",
    outline:
      "px-[24px] py-0 text-[14px] rounded-[44px] font-medium h-[38px] w-fit",
  };
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isLoading && "opacity-50",
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      <span>{children}</span>
      {icon && iconPosition === "left" && (
        <span className="relative block w-2.5 h-2.25">
          <Image
            src="/icons/arrow_forword.svg"
            fill
            sizes="10px"
            alt="Icon"
          />
        </span>
      )}
    </button>
  );
};

export default Button;
