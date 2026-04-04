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
      className={`relative flex flex-col justify-center gap-4 px-10 py-8 min-h-[200px] rounded-[11px] transition-all duration-300 border-2 ${
        isFeatured
          ? "bg-white shadow-[0px_4px_77.4px_0px_rgba(136,136,136,0.41)] border-white"
          : "bg-[#F6F6F6] border-transparent"
      }`}
    >
      <div className="flex items-center gap-[30px]">
        <div className="relative shrink-0 w-[100px] h-[100px] rounded-full overflow-hidden">
          <Image
            src={reviewerAvatar}
            alt={reviewerName}
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-[20px] font-bold mb-[5px]">{reviewerName}</h4>
          <p>{comment}</p>
          <div className="flex items-center gap-[5px] mt-[12px]">
            {Array.from({ length: rating }, (_, index) => (
              <Image
                key={index}
                src="/icons/star.svg"
                alt="Star"
                width={13}
                height={13}
                className="shrink-0 w-[13px] h-[13px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
