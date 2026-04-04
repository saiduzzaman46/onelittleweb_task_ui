"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const brands = [
  { name: "Airbnb", src: "/icons/airbnbbrand.svg" },
  { name: "Booking.com", src: "/icons/booking.com.svg" },
  { name: "Vrbo", src: "/icons/vrbo.svg" },
  { name: "TripAdvisor", src: "/icons/tripadvisorbrand.svg" },
  { name: "Agoda", src: "/icons/agoda.svg" },
  { name: "Expedia", src: "/icons/ecpedia.svg" },
  { name: "HomeToGo", src: "/icons/home_to_go.svg" },
];

// Triple for seamless infinite loop (same pattern as Review.tsx)
const loopedBrands = [...brands, ...brands, ...brands];

const ITEM_WIDTHS = { sm: 80, md: 108, lg: 125 };
const GAP = 40; // px — matches visible gap between logos

const TrustedBrands = () => {
  const [activeIndex, setActiveIndex] = useState(brands.length);
  const [itemWidth, setItemWidth] = useState(ITEM_WIDTHS.lg);

  // Sync item width with viewport
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemWidth(ITEM_WIDTHS.sm);
      else if (window.innerWidth < 1024) setItemWidth(ITEM_WIDTHS.md);
      else setItemWidth(ITEM_WIDTHS.lg);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Advance one brand every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (brands.length * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Snap back to middle copy — invisible reset (same as Review.tsx)
  useEffect(() => {
    if (activeIndex === brands.length * 2) {
      setTimeout(() => {
        setActiveIndex(brands.length);
      }, 650);
    }
  }, [activeIndex]);

  return (
    <section className="w-full flex flex-col items-center mt-4 sm:mt-5 md:mt-6 lg:mt-9">
      <h3
        className="
          font-semibold text-[#000000] text-center
          text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]
          mb-5 sm:mb-6 md:mb-7 lg:mb-[35px]
          px-4
        "
      >
        Trusted by leaders in 50+ industries
      </h3>

      {/* Step-scroll track */}
      <div className="w-full bg-[#f6f7f8] py-4 sm:py-5 lg:py-[22px] overflow-hidden">
        <div
          className={`flex items-center ${
            activeIndex === brands.length
              ? "transition-none"
              : "transition-transform duration-[600ms] ease-in-out"
          }`}
          style={{
            gap: `${GAP}px`,
            // Centre active item — same formula as Review.tsx
            transform: `translateX(calc(-${activeIndex * (itemWidth + GAP)}px + (50% - ${itemWidth / 2}px)))`,
          }}
        >
          {loopedBrands.map((brand, index) => (
            <div
              key={index}
              style={{ width: `${itemWidth}px` }}
              className="
                relative flex-shrink-0
                h-[28px] sm:h-[30px] md:h-[32px] lg:h-[35px]
              "
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 108px, 125px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
