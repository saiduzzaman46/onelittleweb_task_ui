import SectionHeader from "@/shared/components/ui/SectionHeader";
import Image from "next/image";

const toolsData = [
  { id: 1, name: "PriceLabs", image: "/images/pricelabs.png" },
  { id: 2, name: "Wheelhouse", image: "/images/wheelhouse.png" },
  { id: 3, name: "Beyond Pricing", image: "/images/beyondprice.png" },
  { id: 4, name: "Hostfully", image: "/images/hostfully.png" },
  { id: 5, name: "Guesty", image: "/images/guestyhouse.png" },
  { id: 6, name: "Lodgify", image: "/images/lodgify.png" },
  { id: 7, name: "Hostfully", image: "/images/hostfully.png" },
  { id: 8, name: "Guesty", image: "/images/guestyhouse.png" },
  { id: 9, name: "Lodgify", image: "/images/lodgify.png" },
];

const Tools = () => {
  return (
    <section
      id="tools"
      className="w-full flex flex-col items-center pt-10 sm:pt-14 md:pt-16 lg:pt-[80px]"
    >
      {/* Header */}
      <div className="w-full bg-white flex flex-col items-center mb-10 sm:mb-16 md:mb-20 lg:mb-[130px]">
        <div className="text-center max-w-[760px] px-6 ">
          <SectionHeader
            title="Our"
            highlightText="Tools"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>

      {/* Tools grid */}
      <div className="w-full bg-[#F6F6F6] pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-[38px] lg:pb-[85px] flex justify-center px-6 sm:px-6">
        <div
          className="
            w-full max-w-[900px]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-x-4 gap-y-4
            sm:gap-x-5 sm:gap-y-5
            lg:gap-x-[34px] lg:gap-y-[40px]
            justify-items-center
          "
        >
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="
                w-full
                h-[100px] sm:h-[120px] lg:h-[140px]
                bg-white rounded-[12px]
                hover:shadow-[0_4px_30px_rgba(255,138,168,0.28)]
                flex items-center justify-center
                transition-shadow
              "
            >
              <div className="relative w-[110px] h-[38px] sm:w-[130px] sm:h-[44px] lg:w-[150px] lg:h-[50px]">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  sizes="(max-width: 640px) 110px, (max-width: 1024px) 130px, 150px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
