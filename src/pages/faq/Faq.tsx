"use client";

import { useState } from "react";
import SectionHeader from "@/shared/components/ui/SectionHeader";
import { faqData } from "./faq.data";
import FaqItem from "./FaqItem";
import FaqContact from "./FaqContact";

const Faq = () => {
  const [openId, setOpenId] = useState<string | number | null>(1);

  const handleToggle = (id: string | number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="
        w-full flex flex-col items-center
        pb-8 sm:pb-12 lg:pb-[74px]
        pt-8 sm:pt-10 lg:pt-[58px]
        px-4 sm:px-6 md:px-8 lg:px-[100px]
      "
    >
      {/* FAQ accordion card */}
      <div
        className="
          w-full bg-[#F9FAFB] rounded-[16px]
          px-4 sm:px-10 md:px-16 lg:px-[120px] xl:px-[236px]
          py-8 sm:py-12 lg:py-[75px]
          flex flex-col items-center mb-4 lg:mb-[19px]
        "
      >
        <div className="w-full max-w-[768px] mb-10 sm:mb-14 lg:mb-[80px] text-center">
          <h1
            className="
              font-semibold text-[#101828]
              text-[22px] sm:text-[26px] lg:text-[32px]
              mb-3 sm:mb-4
            "
          >
            Frequently Asked <span className="text-[#ED3C6A]">Questions</span>
          </h1>
          <p className="text-[15px]! sm:text-[17px]! lg:text-[20px]! font-[400]! mt-3 sm:mt-5">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="w-full flex flex-col">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>

      <FaqContact />
    </section>
  );
};

export default Faq;
