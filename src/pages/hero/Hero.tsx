import Image from "next/image";
import HeroBackground from "./HeroBackground";
import Button from "@/shared/components/ui/Button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden h-[590px] flex items-center mt-[29px]">
      <div className="absolute right-[2px] top-0 bottom-0 -left-[30px] -z-10">
        <HeroBackground />
      </div>

      <div className=" flex items-center justify-center bg-amber-400">
        <Image
          src="/icons/airbnb.svg"
          alt="Airbnb"
          width={90}
          height={90}
          className="absolute left-[260px] top-[150px] -translate-x-1/2 -translate-y-1/2  rotate-[-30deg] "
        />
        <Image
          src="/icons/atlassian.svg"
          alt="Atlassian"
          width={57}
          height={57}
          className="absolute left-[305px] top-[454px] -translate-x-1/2 -translate-y-1/2  rotate-[-23deg] "
        />
        <Image
          src="/icons/booking.svg"
          alt="Booking"
          width={65}
          height={65}
          className="absolute left-[1072px] top-[140px] -translate-x-1/2 -translate-y-1/2  rotate-[28deg] "
        />
        <Image
          src="/icons/tripadvisor.svg"
          alt="TripAdvisor"
          width={63}
          height={63}
          className="absolute left-[1068px] top-[460px] -translate-x-1/2 -translate-y-1/2  rotate-[33deg] "
        />

        <div className="absolute left-[calc(50%-9.5px)] top-[59px] -translate-x-1/2 w-[923px] h-[523px] -z-5">
          {/* Added flex and justify-center to vertically and horizontally center contents */}
          <div className="w-full h-full rounded-[50%]  bg-white/65 backdrop-blur-[0.6px] flex flex-col items-center justify-center">
            <div className="text-center flex flex-col items-center max-w-[700px] px-8">
              <h1 className="text-[48px] font-bold leading-tight">
                Airbnb Assistants For
              </h1>

              <h2 className="text-[38px] leading-tight font-medium">
                Property Management
              </h2>

              <p className="leading-relaxed mt-[31px] mb-[39px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="flex flex-col items-center gap-7">
                <Button size="md" icon>
                  Schedule A Meeting
                </Button>

                <button className="text-[14px] font-medium underline decoration-1 underline-offset-4 ">
                  See Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
