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
      className="w-full flex flex-col items-center pt-[68px] "
    >
      <div className="text-center max-w-[750px] mb-[63px]">
        <SectionHeader
          title="Getting Started is Easy"
          highlightText=""
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="w-full px-[250px] grid grid-cols-1 md:grid-cols-3 gap-[38px]">
        {steps.map((step) => (
          <div key={step.id} className="relative pt-[25px]">
            <div className="absolute top-0 -left-[24px] w-[76px] h-[76px] rounded-full border-[5px] border-[#ED3C6A] bg-white flex items-center justify-center text-[29px] font-medium text-black z-10">
              {step.id}
            </div>
            <div className="w-full  flex flex-col items-center text-center bg-white transition-shadow gap-[33px]">
              <div className="border-[2px] border-[#FDEBF0] rounded-[10px] w-[285px] h-[192px] flex items-center justify-center">
                <div className="relative w-[100px] h-[100px] ">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    sizes="100px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h5 className="text-[20px]  font-semibold  max-w-[250px]">
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
