import Image from "next/image";

const brands = [
  { name: "Airbnb", src: "/icons/airbnbbrand.svg" },
  { name: "Booking.com", src: "/icons/booking.com.svg" },
  { name: "Vrbo", src: "/icons/vrbo.svg" },
  { name: "TripAdvisor", src: "/icons/tripadvisorbrand.svg" },
  { name: "Agoda", src: "/icons/agoda.svg" },
  { name: "Expedia", src: "/icons/ecpedia.svg" },
  { name: "HomeToGo", src: "/icons/home_to_go.svg" },
];

const TrustedBrands = () => {
  return (
    <section className="w-full flex flex-col items-center mt-5">
      <h3 className="text-[20px] font-semibold text-[#000000] mb-[35px]">
        Trusted by leaders in 50+ industries
      </h3>

      <div className="w-full bg-[#f6f7f8] py-[22px] flex justify-center">
        <div className="w-full flex justify-center items-center gap-[60px] flex-wrap lg:flex-nowrap">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative h-[35px] w-[105px] md:w-[125px] flex-shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
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
