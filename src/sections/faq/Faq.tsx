"use client";

import { useState } from "react";
import SectionHeader from "@/shared/components/ui/SectionHeader";
import { faqData } from "@/data/faq.data";
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
        pb-8 sm:pb-12 lg:pb-18.5
        pt-8 sm:pt-10 lg:pt-14.5
        px-4 sm:px-6 md:px-8 lg:px-25
      "
    >
      {/* FAQ accordion card */}
      <div
        className="
          w-full bg-[#F9FAFB] rounded-2xl
          px-4 sm:px-10 md:px-16 lg:px-30 xl:px-59
          py-8 sm:py-12 lg:py-18.75
          flex flex-col items-center mb-4 lg:mb-4.75
        "
      >
        <div className="w-full max-w-3xl mb-10 sm:mb-14 lg:mb-20 text-center">
          <h1
            className="
              font-semibold text-[#101828]
              text-[22px] sm:text-[26px] lg:text-[32px]
              mb-3 sm:mb-4
            "
          >
            Frequently Asked <span className="text-[#ED3C6A]">Questions</span>
          </h1>
          <p className="text-[15px]! sm:text-[17px]! lg:text-[20px]! font-normal! mt-3 sm:mt-5">
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
