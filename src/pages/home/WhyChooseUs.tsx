import Button from "@/shared/components/ui/Button";
import Image from "next/image";

const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have experts in our team",
];

const brands = [
  { icon: "/icons/airbnb.svg" },
  { icon: "/icons/atlassian.svg" },
  { icon: "/icons/booking.svg" },
  { icon: "/icons/tripadvisor.svg" },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className=" w-full px-[100px]  flex justify-center pt-[84px]"
    >
      <div className="relative w-full bg-[#FDEBF0] rounded-[48px] flex flex-col md:flex-row items-center ">
        {/* Left Side */}
        <div className="z-10 ml-[90px] mt-[75px] mb-[83px] ">
          <h2 className="text-[36px] leading-[1.2] font-bold text-black mb-6">
            Few Reasons Why you <br />
            <span className="">Choose us?</span>
          </h2>
          <p className="font-semibold! mb-10 max-w-[460px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <div className="space-y-[14px] mb-11">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[32px] h-[32px] rounded-full bg-[#FAC4D2] flex items-center justify-center">
                  <Image
                    src="/icons/check.svg"
                    alt="check"
                    width={12}
                    height={12}
                    className="text-[#EE4D7B]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <span className=" font-bold text-[16px]">{feature}</span>
              </div>
            ))}
          </div>

          <Button size="md" icon>
            Schedule A Meeting
          </Button>
        </div>

        {/* Right Side*/}
        <div className="relative w-[670px] h-[511px] mt-[80px] mb-[38px] mr-[38px] flex items-end justify-center">
          {/*Ellipse */}
          <div className="absolute bottom-[74px] top-[100px] left-[102px] w-[570px] h-[337px] bg-[#FAC4D2] rounded-full z-10" />

          {/* Man Image */}
          <div className="absolute bottom-[74px] right-[140px] left-[205px] w-[330px] h-[435px] z-10 flex items-end justify-center">
            <Image
              src="/images/smiling-male-office-worker.png"
              alt="Smiling Male Office Worker"
              width={500}
              height={550}
              className="object-contain drop-shadow-2xl"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Floating Card 1: Property Info */}
          <div className="absolute top-[34px] left-[66px] bg-white p-3 rounded-[17px] shadow-[-16px_28px_38.4px_-10px_rgba(191,33,74,0.28)] z-20 px-[9px] py-[10px] animate-bounce-subtle flex flex-row items-start gap-2">
            <div className="w-[121px] h-[86px] rounded-[7px] overflow-hidden relative">
              <Image
                src="/images/room.png"
                alt="Room"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-2 pt-1.5 ">
              <div className="flex flex-col gap-[6px] pb-1">
                <div className="w-[103px] h-[5px] bg-[#D9D9D9] rounded-[11px]"></div>
                <div className="w-[66px] h-[5px] bg-[#D9D9D9] rounded-[11px]"></div>
                <div className="w-[54px] h-[5px] bg-[#D9D9D9] rounded-[11px]"></div>
              </div>

              <div className="flex gap-1 ">
                {[1, 2, 3, 4].map((s) => (
                  <Image
                    key={s}
                    src="/icons/star.svg"
                    alt="star"
                    width={10}
                    height={10}
                    className="shrink-0 w-[10px] h-[10px]"
                  />
                ))}
              </div>
              <p className="text-[15px]! font-medium! text-[#ED3C6A]!">
                $75
                <span className="text-[10px] font-medium  text-[#000000]">
                  /night
                </span>
              </p>
            </div>
          </div>

          {/* Floating Card 2: Brands */}
          <div className="absolute top-[18px] right-[16px] bg-white px-[22px] py-[20px] rounded-[17px] shadow-[-15px_21px_38.4px_0px_rgba(191,33,74,0.28)] z-20 grid grid-cols-2 gap-2 animate-float gap-x-[8px] gap-y-[12px]">
            {brands.map((brand, index) => (
              <div key={index} className="w-[53px] h-[53px] rounded-[5px] ">
                <Image
                  src={brand.icon}
                  alt="brand"
                  width={24}
                  height={24}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>

          {/*Calendar */}
          <div className="absolute bottom-0 left-0 bg-white p-5 rounded-[17px] shadow-[29px_21px_38.4px_0px_rgba(191,33,74,0.28)] z-20 overflow-hidden animate-bounce-subtle">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={211}
              height={170}
              className="object-cover"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
