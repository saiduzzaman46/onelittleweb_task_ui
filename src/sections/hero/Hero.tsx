import Image from "next/image";
import HeroBackground from "./HeroBackground";
import Button from "@/shared/components/ui/Button";
import DecorationCircle from "@/shared/components/ui/DecorationCircle";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden flex items-center
        h-105 mt-3
        sm:h-120 sm:mt-4
        md:h-132.5 md:mt-5
        lg:h-140 lg:mt-6
        xl:h-147.5 xl:mt-7.25
        2xl:h-168.5
      "
    >
      {/* Grid background — unchanged */}
      <div className="absolute inset-0 -z-10 2xl:right-0.5 2xl:top-0 2xl:bottom-0 2xl:-left-7.5">
        <HeroBackground />
      </div>

      {/* Decorative Circles — matching your images */}
      <DecorationCircle
        color="#34E0A1"
        w="15px"
        h="15px"
        x="left-[57.45%]"
        y="top-[14%]"
        className="hidden lg:block"
      />
      <DecorationCircle
        color="#635BFF"
        w="13px"
        h="13px"
        x="left-[10%]"
        y="top-[20%]"
        className="hidden lg:block"
      />
      <DecorationCircle
        color="#FF5A5F"
        w="13px"
        h="13px"
        x="left-[17.5%]"
        y="top-[55%]"
        className="hidden lg:block"
      />
      <DecorationCircle
        color="#FFEC5A"
        w="7px"
        h="7px"
        x="left-[11%]"
        y="top-[86.2%]"
        className="hidden lg:block"
      />
      <DecorationCircle
        color="#FFEC5A"
        w="13px"
        h="13px"
        x="right-[13.5%]"
        y="top-[32.6%]"
        className="hidden lg:block"
      />
      <DecorationCircle
        color="#0C3B7C"
        w="7px"
        h="7px"
        x="right-[7.8%]"
        y="top-[75.5%]"
        className="hidden lg:block"
      />
      <DecorationCircle
        color="#5AF9FF"
        w="13px"
        h="13px"
        x="left-[50.5%]"
        y="bottom-[10%]"
        className="hidden lg:block"
      />

      {/* ── Floating brand icons ── */}
      {/* Airbnb — top-left */}
      <Image
        src="/icons/airbnb.svg"
        alt="Airbnb"
        width={120}
        height={120}
        style={{ width: "auto", height: "auto" }}
        className="
          hidden sm:block absolute
          -translate-x-1/2 -translate-y-1/2 rotate-[-30deg]
          left-[18%] top-[26%]
          sm:left-[14%] sm:top-[26%]
          md:left-[16%] md:top-[26%]
          lg:left-[17%] lg:top-[26%]
          xl:left-[18%] xl:top-[26%]
          2xl:left-[18%] 2xl:top-[26%]
          w-10 h-10
          sm:w-12 sm:h-12
          md:w-14 md:h-14
          lg:w-18 lg:h-18
          xl:w-25 xl:h-25
        "
      />

      {/* Atlassian — bottom-left */}
      <Image
        src="/icons/atlassian.svg"
        alt="Atlassian"
        width={57}
        height={57}
        style={{ width: "auto", height: "auto" }}
        className="
          hidden sm:block absolute
          -translate-x-1/2 -translate-y-1/2 rotate-[-23deg]
          left-[14%] top-[78%]
          md:left-[16%]
          lg:left-[17%]
          xl:left-[18%]
          2xl:left-[18%]
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          lg:w-11.5 lg:h-11.5
          xl:w-14.25 xl:h-14.25
        "
      />

      {/* Booking — top-right */}
      <Image
        src="/icons/booking.svg"
        alt="Booking"
        width={65}
        height={65}
        style={{ width: "auto", height: "auto" }}
        className="
          hidden sm:block absolute
          translate-x-1/2 -translate-y-1/2 rotate-28
          right-[14%] top-[26%]
          md:right-[16%]
          lg:right-[17%]
          xl:right-[18%]
          2xl:right-[18%]
          w-10 h-10
          sm:w-12 sm:h-12
          md:w-14 md:h-14
          lg:w-13 lg:h-13
          xl:w-16.25 xl:h-16.25
        "
      />

      {/* TripAdvisor — bottom-right */}
      <Image
        src="/icons/tripadvisor.svg"
        alt="TripAdvisor"
        width={63}
        height={63}
        style={{ width: "auto", height: "auto" }}
        className="
          hidden sm:block absolute
          translate-x-1/2 -translate-y-1/2 rotate-33
          right-[14%] top-[78%]
          md:right-[16%]
          lg:right-[17%]
          xl:right-[18%]
          2xl:right-[18%]
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          lg:w-12.5 lg:h-12.5
          xl:w-15.75 xl:h-15.75
        "
      />

      {/* ── Ellipse glass container ────────────────────────────────── */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-14.75 -z-5
          w-[92vw]   h-[calc(100%-59px-30px)]
          sm:w-[78vw]
          md:w-[72vw]
          lg:w-[66vw]
          xl:w-230.75 xl:h-130.75
          2xl:w-245 2xl:h-140
        "
      >
        {/* White-glass blur — color/blur UNCHANGED */}
        <div className="w-full h-full rounded-[50%] bg-white/65 backdrop-blur-[0.6px] flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center max-w-175 px-6 sm:px-8 xl:px-8">
            <h1
              className="
              font-bold leading-tight
              text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px]
            "
            >
              Airbnb Assistants For
            </h1>

            <h2
              className="
              leading-tight font-medium
              text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px]
            "
            >
              Property Management
            </h2>

            <p
              className="
              leading-relaxed
              mt-3 mb-4 text-[12px]
              sm:mt-4 sm:mb-5 sm:text-[13px]
              md:mt-5 md:mb-6
              lg:mt-6 lg:mb-7
              xl:mt-7.75 xl:mb-9.75 xl:text-[14px]
            "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex flex-col items-center gap-4 sm:gap-5 xl:gap-7">
              <Button size="md" icon>
                Schedule A Meeting
              </Button>

              <button
                type="button"
                className="text-[12px] sm:text-[13px] xl:text-[14px] font-medium underline decoration-1 underline-offset-4"
              >
                See Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
