import Button from "@/shared/components/ui/Button";

const FaqContact = () => {
  return (
    <div className="w-full  bg-[#F9FAFB] rounded-[16px]  flex flex-col items-center gap-[32px] py-[32px]">
      <div className="flex -space-x-4 ">
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alice&backgroundColor=transparent"
          alt="Avatar"
          className="w-[48px] h-[48px] rounded-full bg-[#ABB677] relative"
        />
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bob&backgroundColor=transparent"
          alt="Avatar"
          className="w-[56px] h-[56px] rounded-full  bg-[#C7B9DA] border-[2px] border-white relative -mt-[8px]"
        />
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Charlie&backgroundColor=transparent"
          alt="Avatar"
          className="w-[48px] h-[48px] rounded-full bg-[#D9B9BB]"
        />
      </div>

      <h4 className="text-[20px] font-bold text-[#101828] ">
        Still have Questions?
      </h4>
      <p className="text-[18px] text-[#9C9C9C] font-[400]">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>

      <Button variant="primary" size="sm">
        Get in touch
      </Button>
    </div>
  );
};

export default FaqContact;
