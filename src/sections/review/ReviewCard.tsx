import Image from "next/image";

const ReviewCard = ({
  reviewerName,
  reviewerAvatar,
  comment,
  rating,
  isFeatured,
}: IReview) => {
  return (
    <div
      className={`relative flex flex-col justify-center rounded-[11px] transition-all duration-300 border-2
        gap-4 px-5 py-6 min-h-55
        md:gap-5 md:px-8 md:py-8 md:min-h-50
        lg:gap-7.5 lg:px-10 lg:py-8
        ${
          isFeatured
            ? "bg-white shadow-[0px_4px_77.4px_0px_rgba(136,136,136,0.41)] border-white"
            : "bg-[#F6F6F6] border-transparent"
        }`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 lg:gap-7.5 text-center md:text-left">
        {/* Avatar */}
        <div
          className="
            relative shrink-0 rounded-full overflow-hidden
            w-17.5 h-17.5
            sm:w-20 sm:h-20
            lg:w-25 lg:h-25
          "
        >
          <Image
            src={reviewerAvatar}
            alt={reviewerName}
            fill
            sizes="(max-width: 640px) 70px, (max-width: 1024px) 80px, 100px"
            className="object-cover"
          />
        </div>

        {/* Text content */}
        <div className="min-w-0 flex-1 flex flex-col items-center md:items-start">
          <h4
            className="
              font-bold
              text-[16px] mb-1
              md:text-[18px] md:mb-1.25
              lg:text-[20px]
            "
          >
            {reviewerName}
          </h4>

          <p
            className="
              leading-snug
              text-[12px]
              sm:text-[13px]
              lg:text-[14px]
              line-clamp-4 md:line-clamp-3
            "
          >
            {comment}
          </p>

          <div className="flex items-center gap-1 lg:gap-1.25 mt-3">
            {Array.from({ length: rating }, (_, index) => (
              <Image
                key={index}
                src="/icons/star.svg"
                alt="Star"
                width={13}
                height={13}
                className="shrink-0 w-2.75 h-2.75 lg:w-3.25 lg:h-3.25"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

