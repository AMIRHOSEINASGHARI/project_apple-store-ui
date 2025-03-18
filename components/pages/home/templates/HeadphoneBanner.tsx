import Image from "next/image";

import Button from "@/components/ui/button";

const HeadphoneBanner = () => {
  return (
    <section className="container mx-auto max-lg:px-6 my-15 lg:my-20">
      <div className="rounded-[10px] overflow-hidden w-full h-[156px] lg:h-[588px] relative">
        <div className="w-full h-full absolute z-10 bg-linear-30 from-[#000000] via-[#00000000] to-[#00000000]" />
        <Image
          src="/images/banner-headphone.webp"
          width={1400}
          height={500}
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-20 bottom-3 left-5 lg:left-20 lg:bottom-10 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-1 -mb-1">
            <span className="text-white text-lg lg:text-[45px] pt-1 lg:pt-4 tracking-tight">
              AirPods Max
            </span>
            <Image
              src="/svg/apple.svg"
              alt="apple"
              width={50}
              height={150}
              className="w-[12px] lg:w-[30px]"
            />
          </div>
          <span className="lg:text-[36px] text-white">متفاوت گوش کن</span>
          <Button className="bg-white text-[#581719] text-[14px] lg:text-[23px] font-semibold w-[104px] lg:w-[153px] h-[29px] lg:h-[43px] rounded-full mt-2">
            خرید کنید
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeadphoneBanner;
