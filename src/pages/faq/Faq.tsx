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
      className="w-full flex flex-col items-center pb-[74px] pt-[58px] px-[100px]"
    >
      <div className="w-full  bg-[#F9FAFB] rounded-[16px] px-[236px] py-[75px] flex flex-col items-center mb-[19px]">
        <div className="w-[768px] mb-[80px] text-center">
          <h1 className="text-[32px] font-semibold text-[#101828]">
            Frequently Asked <span className="text-[#ED3C6A]">Questions</span>
          </h1>
          <p className="text-[20px]! font-[400]!  mt-5">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="w-full flex flex-col ">
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
