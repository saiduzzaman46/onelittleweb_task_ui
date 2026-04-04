"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/data/services.data";
import SectionHeader from "@/shared/components/ui/SectionHeader";

const Services = () => {
  const [activeCardId, setActiveCardId] = useState<string | number>(
    servicesData[0].id,
  );

  return (
    <section
      id="services"
      className="
        w-full flex flex-col items-center
        pt-10 sm:pt-12 md:pt-14 xl:pt-[56px]
      "
    >
      <div
        className="
          text-center max-w-[740px]
          mb-8 sm:mb-10 md:mb-12 xl:mb-[54px]
          px-4 sm:px-6
        "
      >
        <SectionHeader
          title="Our"
          highlightText="Service"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div
        className="
          w-full max-w-[1340px]
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-4 sm:gap-5 xl:gap-[24px]
          px-8 sm:px-6 md:px-8 lg:px-10 xl:px-[50px]
        "
      >
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            isActive={service.id === activeCardId}
            onClick={() => setActiveCardId(service.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
