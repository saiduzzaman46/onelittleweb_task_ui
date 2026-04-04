import SectionHeader from "@/shared/components/ui/SectionHeader";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Add requirements & sign up today",
    icon: "/icons/peopleadd.svg",
  },
  {
    id: "02",
    title: "Connect with your CSM & onboarding team",
    icon: "/icons/grouppeople.svg",
  },
  {
    id: "03",
    title: "Meet your STR Assistant next week",
    icon: "/icons/headphone.svg",
  },
];

const GettingStarted = () => {
  return (
    <section
      id="getting-started"
      className="w-full flex flex-col items-center pt-10 sm:pt-12 md:pt-14 lg:pt-17"
    >
      <div className="text-center max-w-187.5 mb-10 sm:mb-12 lg:mb-15.75 px-4 sm:px-6">
        <SectionHeader
          title="Getting Started is Easy"
          highlightText=""
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div
        className="
          w-full max-w-275
          px-12 sm:px-6 md:px-8 lg:px-10 xl:px-12
          grid grid-cols-1 md:grid-cols-3
          gap-8 sm:gap-10 lg:gap-9.5
        "
      >
        {steps.map((step) => (
          <div key={step.id} className="relative pt-6 sm:pt-6.25">
            {/* Step number badge */}
            <div
              className="
                absolute top-0 -left-3 sm:-left-6
                w-14 h-14 sm:w-16.5 sm:h-16.5 lg:w-19 lg:h-19
                rounded-full border-[5px] border-[#ED3C6A] bg-white
                flex items-center justify-center
                text-[20px] sm:text-[24px] lg:text-[29px] font-medium text-black z-10
              "
            >
              {step.id}
            </div>

            <div className="w-full flex flex-col items-center text-center bg-white transition-shadow gap-5 sm:gap-7 lg:gap-8.25">
              {/* Icon box */}
              <div
                className="
                  border-2 border-[#FDEBF0] rounded-[10px]
                  w-full
                  h-37.5 sm:h-42.5 lg:h-48
                  flex items-center justify-center
                "
              >
                <div className="relative w-20 h-20 sm:w-21.25 sm:h-21.25 lg:w-25 lg:h-25">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 70px, (max-width: 1024px) 85px, 100px"
                    className="object-contain"
                  />
                </div>
              </div>

              <h5 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold max-w-62.5">
                {step.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
