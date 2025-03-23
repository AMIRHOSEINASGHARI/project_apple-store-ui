import { twMerge } from "tailwind-merge";

const AdvertisingNavbar = ({ className }: { className?: string }) => {
  return (
    <section
      className={twMerge(
        "bg-primary w-full h-13 2xl:h-17.5 flex items-center justify-center",
        className
      )}
    >
      <p className="text-center text-white text-[13px] 2xl:text-[17px]">
        تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون
      </p>
    </section>
  );
};

export default AdvertisingNavbar;
