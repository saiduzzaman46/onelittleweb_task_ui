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
    <section id="tools" className="w-full flex flex-col items-center pt-[80px]">
      <div className="w-full bg-white flex flex-col items-center mb-[130px]">
        <div className="text-center max-w-[760px] px-6">
          <SectionHeader
            title="Our"
            highlightText="Tools"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          {/* <h2 className="text-[32px] font-bold text-[#000000] mb-[24px]">
            Our <span className="text-[#ED3C6A]">Tools</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
        </div>
      </div>

      <div className="w-full bg-[#F6F6F6] pt-[38px] pb-[85px] flex justify-center">
        <div className=" w-full px-[220px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[40px] justify-items-center">
          {toolsData.map((tool) => (
            <div
              key={tool.id}
              className="w-full h-[140px] bg-white rounded-[12px] hover:shadow-[0_4px_30px_rgba(255,138,168,0.28)] flex items-center justify-center transition-shadow"
            >
              <div className="relative w-[150px] h-[50px]">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  sizes="150px"
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
