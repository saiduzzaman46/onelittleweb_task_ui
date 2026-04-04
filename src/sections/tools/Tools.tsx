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
      className="w-full flex flex-col items-center pt-10 sm:pt-14 md:pt-16 lg:pt-20"
    >
      {/* Header */}
      <div className="w-full bg-white flex flex-col items-center mb-10 sm:mb-16 md:mb-20 lg:mb-32.5">
        <div className="text-center max-w-1906 ">
          <SectionHeader
            title="Our"
            highlightText="Tools"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>

      {/* Tools grid */}
      <div className="w-full bg-[#F6F6F6] pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-9.5 lg:pb-21.25 flex justify-center px-6 sm:px-6">
        <div
          className="
            w-full max-w-225
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-x-4 gap-y-4
            sm:gap-x-5 sm:gap-y-5
            lg:gap-x-8.5 lg:gap-y-10
            justify-items-center
          "
        >
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="
                w-full
                h-25 sm:h-30 lg:h-35
                bg-white rounded-xl
                hover:shadow-[0_4px_30px_rgba(255,138,168,0.28)]
                flex items-center justify-center
                transition-shadow
              "
            >
              <div className="relative w-27.5 h-9.5 sm:w-32.5 sm:h-11 lg:w-37.5 lg:h-12.5">
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
