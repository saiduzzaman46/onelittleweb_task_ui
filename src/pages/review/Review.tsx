"use client";
import { useState, useEffect } from "react";
import SectionHeader from "@/shared/components/ui/SectionHeader";
import ReviewCard from "./ReviewCard";
import { reviews } from "./review.data";

const CARD_WIDTHS = {
  sm: 280,
  md: 380,
  lg: 530,
};

const Review = () => {
  const extendedReviews = [...reviews, ...reviews, ...reviews];
  const [activeIndex, setActiveIndex] = useState(reviews.length);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTHS.lg);
  const GAP = 24;

  // Update card width based on viewport
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardWidth(CARD_WIDTHS.sm);
      else if (window.innerWidth < 1024) setCardWidth(CARD_WIDTHS.md);
      else setCardWidth(CARD_WIDTHS.lg);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (reviews.length * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Snap back to middle
  useEffect(() => {
    if (activeIndex === reviews.length * 2) {
      setTimeout(() => {
        setActiveIndex(reviews.length);
      }, 700);
    }
  }, [activeIndex]);

  return (
    <section
      id="reviews"
      className="
        w-full flex flex-col items-center bg-white overflow-hidden
        pb-10 sm:pb-14 lg:pb-[80px]
        pt-14 sm:pt-20 md:pt-24 lg:pt-[130px]
      "
    >
      <div className="text-center max-w-[760px] px-4 sm:px-6 mb-10 sm:mb-12 lg:mb-[60px]">
        <SectionHeader
          title="Check Our Clients "
          highlightText="Review"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />
      </div>

      <div className="w-full flex justify-center">
        <div
          className={`flex gap-6 ${activeIndex === reviews.length ? "transition-none" : "transition-transform duration-700 ease-in-out"}`}
          style={{
            transform: `translateX(calc(-${activeIndex * (cardWidth + GAP)}px + (50% - ${cardWidth / 2}px)))`,
          }}
        >
          {extendedReviews.map((review, index) => (
            <div
              key={index}
              style={{ width: `${cardWidth}px` }}
              className="shrink-0"
            >
              <ReviewCard {...review} isFeatured={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
