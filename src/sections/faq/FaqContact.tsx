import Button from "@/shared/components/ui/Button";

const FaqContact = () => {
  return (
    <div className="w-full bg-[#F9FAFB] rounded-2xl flex flex-col items-center gap-5 sm:gap-6 lg:gap-8 py-6 sm:py-8 lg:py-8 px-4 text-center">
      <div className="flex -space-x-4 ">
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alice&backgroundColor=transparent"
          alt="Avatar"
          className="w-12 h-12 rounded-full bg-[#ABB677] relative"
        />
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bob&backgroundColor=transparent"
          alt="Avatar"
          className="w-14 h-14 rounded-full  bg-[#C7B9DA] border-2 border-white relative -mt-2"
        />
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Charlie&backgroundColor=transparent"
          alt="Avatar"
          className="w-12 h-12 rounded-full bg-[#D9B9BB]"
        />
      </div>

      <h4 className="text-[17px] sm:text-[18px] lg:text-[20px] font-bold text-[#101828]">
        Still have Questions?
      </h4>
      <p className="text-[14px] sm:text-[15px] lg:text-[18px] text-[#9C9C9C] font-normal max-w-100">
        Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
      </p>

      <Button variant="primary" size="sm">
        Get in touch
      </Button>
    </div>
  );
};

export default FaqContact;
