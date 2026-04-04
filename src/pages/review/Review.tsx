"use client";
import { useState, useEffect } from "react";
import SectionHeader from "@/shared/components/ui/SectionHeader";
import ReviewCard from "./ReviewCard";
import { reviews } from "./review.data";

const Review = () => {
  // Duplicate reviews to create an infinite scroll effect
  const extendedReviews = [...reviews, ...reviews, ...reviews];
  const [activeIndex, setActiveIndex] = useState(reviews.length);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (reviews.length * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle snapping back to middle to avoid running out of cards
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
      className="w-full flex flex-col items-center pb-[80px] bg-white pt-[130px] overflow-hidden"
    >
      <div className="text-center max-w-[760px] px-6 mb-[60px]">
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
            transform: `translateX(calc(-${activeIndex * 530}px + (50% - 265px) - ${activeIndex * 24}px))`,
          }}
        >
          {extendedReviews.map((review, index) => (
            <div key={index} className="w-[530px] shrink-0">
              <ReviewCard {...review} isFeatured={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
