import { specialOfferTimers } from "@/constants";

const SpecialOfferTimers = () => {
  return (
    <div className="container mx-auto flex justify-between gap-6 max-2xl:px-6">
      <div className="flex items-center gap-6 w-full h-fit mt-1.5 2xl:mt-3">
        <span className="whitespace-nowrap text-[15px] 2xl:text-[30px] text-primary font-bold 2xl:font-semibold">
          پیشنهاد شگفت انگیر
        </span>
        <div className="w-full h-[0.5px] bg-[#FF510C69] max-sm:hidden" />
      </div>
      <div className="flex flex-row-reverse items-center gap-2 2xl:gap-5">
        {specialOfferTimers.map(({ number, text, isActive }) => (
          <div key={text} className="flex flex-col items-center gap-3">
            <div
              className={`size-8 2xl:size-[70px] rounded-[8.67px] flex items-center justify-center font-bold text-[13px] 2xl:text-[21.68px] ${
                isActive ? "bg-primary text-white" : "bg-[#FFF1EB] text-primary"
              }`}
            >
              {number}
            </div>
            <span
              className={`text-[10px] 2xl:text-[15px] font-semibold ${
                isActive ? "text-primary" : ""
              }`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferTimers;
