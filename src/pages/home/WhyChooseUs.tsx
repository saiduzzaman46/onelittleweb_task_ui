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
      className="
        w-full flex justify-center
        px-4 sm:px-6 md:px-10 lg:px-[100px]
        pt-10 sm:pt-14 md:pt-16 lg:pt-[84px]
      "
    >
      <div className="relative w-full bg-[#FDEBF0] rounded-[28px] sm:rounded-[38px] lg:rounded-[48px] flex flex-col lg:flex-row items-center">
        {/* Left Side */}
        <div
          className="
            z-10 flex-1
            px-6 pt-8 pb-8
            sm:px-10 sm:pt-10
            lg:ml-[90px] lg:mt-[75px] lg:mb-[83px] lg:px-0 lg:pt-0 lg:pb-0
          "
        >
          <h2
            className="
              leading-[1.2] font-bold text-black mb-4 lg:mb-6
              text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]
            "
          >
            Few Reasons Why you <br />
            <span>Choose us?</span>
          </h2>

          <p
            className="
              font-semibold! mb-6 lg:mb-10
              max-w-full lg:max-w-[460px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <div className="space-y-3 lg:space-y-[14px] mb-7 lg:mb-11">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] rounded-full bg-[#FAC4D2] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/icons/check.svg"
                    alt="check"
                    width={12}
                    height={12}
                    className="text-[#EE4D7B]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <span className="font-bold text-[14px] sm:text-[15px] lg:text-[16px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Button size="md" icon>
            Schedule A Meeting
          </Button>
        </div>

        {/* Right Side  */}
        <div className="flex relative w-full lg:w-[670px]  h-[360px] sm:h-[420px] xl:h-[511px]  mt-2 mb-8 lg:mt-[80px] lg:mb-[38px] lg:mr-[38px] items-end justify-center flex-shrink-0">
          {/* Ellipse */}
          <div className="absolute bottom-0 xl:bottom-[74px] left-[15%] right-[15%] lg:left-[102px] lg:right-auto w-[80%] lg:w-[570px] h-[60%] lg:h-[337px]  bg-[#FAC4D2] rounded-full z-10" />

          {/* Man Image  */}
          <div className="absolute bottom-0 xl:bottom-[74px] right-[10%] left-[25%] lg:right-[140px] lg:left-[205px] w-[50%] lg:w-[330px] h-full lg:h-[435px] z-10 flex items-end justify-center">
            <Image
              src="/images/smiling-male-office-worker.png"
              alt="Smiling Male Office Worker"
              width={500}
              height={550}
              className="object-contain drop-shadow-2xl"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Floating Card 1: Property Info (Room) */}
          <div className="absolute top-[5%] left-[2%] sm:left-[5%] md:left-[10%] lg:top-[34px] lg:left-[66px] bg-white p-2 sm:p-3 rounded-[12px] sm:rounded-[17px] shadow-[-16px_28px_38.4px_-10px_rgba(191,33,74,0.28)] z-20 px-[6px] py-[8px] sm:px-[9px] sm:py-[10px] animate-bounce-subtle flex flex-row items-start gap-2 scale-[0.8] sm:scale-95 lg:scale-100">
            <div className="w-[70px] h-[55px] sm:w-[90px] sm:h-[65px] lg:w-[121px] lg:h-[86px] rounded-[7px] overflow-hidden relative">
              <Image
                src="/images/room.png"
                alt="Room"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-1 sm:gap-2 pt-1">
              <div className="flex flex-col gap-[3px] sm:gap-[6px] pb-1">
                <div className="w-[60px] sm:w-[80px] lg:w-[103px] h-[4px] sm:h-[5px] bg-[#D9D9D9] rounded-[11px]"></div>
                <div className="w-[40px] sm:w-[52px] lg:w-[66px] h-[4px] sm:h-[5px] bg-[#D9D9D9] rounded-[11px]"></div>
                <div className="w-[30px] sm:w-[42px] lg:w-[54px] h-[4px] sm:h-[5px] bg-[#D9D9D9] rounded-[11px]"></div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((s) => (
                  <Image
                    key={s}
                    src="/icons/star.svg"
                    alt="star"
                    width={8}
                    height={8}
                    className="shrink-0 w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]"
                  />
                ))}
              </div>
              <p className="text-[12px]! sm:text-[15px]! font-medium! text-[#ED3C6A]!">
                $75
                <span className="text-[8px] sm:text-[10px] font-medium text-[#000000]">
                  /night
                </span>
              </p>
            </div>
          </div>

          {/* Floating Card 2: Brands */}
          <div className="absolute top-[0%] right-[2%] sm:right-[5%] md:right-[10%] lg:top-[18px] lg:right-[16px] bg-white px-3 py-3 sm:px-4 sm:py-4 lg:px-[22px] lg:py-[20px] rounded-[12px] sm:rounded-[17px] shadow-[-15px_21px_38.4px_0px_rgba(191,33,74,0.28)] z-20 grid grid-cols-2 gap-1 sm:gap-2 animate-float scale-[0.8] sm:scale-95 lg:scale-100">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] lg:w-[53px] lg:h-[53px] rounded-[5px] flex items-center justify-center"
              >
                <Image
                  src={brand.icon}
                  alt="brand"
                  width={20}
                  height={20}
                  className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>

          {/* Floating Card 3: Calendar */}
          <div className="absolute bottom-[-5%] left-[2%] sm:left-[5%] md:left-[8%] lg:bottom-0 lg:left-0 bg-white p-2 sm:p-3 lg:p-5 rounded-[12px] sm:rounded-[17px] shadow-[29px_21px_38.4px_0px_rgba(191,33,74,0.28)] z-20 overflow-hidden animate-bounce-subtle scale-[0.7] sm:scale-90 lg:scale-100">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={120}
              height={120}
              className="object-cover w-[100px] sm:w-[140px] lg:w-[211px] h-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
