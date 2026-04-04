import { cn } from "@/core/utils/TailwinMerge";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="#ED3C6A" strokeWidth="1.5" />
    <path
      d="M12 7V17M7 12H17"
      stroke="#ED3C6A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="#ED3C6A" strokeWidth="1.5" />
    <path
      d="M7 12H17"
      stroke="#ED3C6A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="w-full border-t border-[#BF214A]/28 first:border-t-0 py-[32px] first:pt-0">
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none gap-4 group"
        onClick={onClick}
      >
        <h4 className="text-[18px] font-bold text-[#000000] ">{question}</h4>
        <div className="flex-shrink-0 ml-4 transition-transform duration-300">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[200px] mt-[12px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className=" text-[#667085] text-[16px]! font-[400]!">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
