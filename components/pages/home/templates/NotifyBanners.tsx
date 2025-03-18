import Image from "next/image";

import Button from "@/components/ui/button";

const NotifyBanners = () => {
  return (
    <section className="container mx-auto mt-15 mb-10 max-2xl:px-6 flex max-xl:flex-col gap-14 xl:gap-6">
      <div className="relative w-full xl:w-3/5 h-[150px] xl:h-[560px] rounded-[10px] bg-linear-30 from-[#5096ff] xl:from-[#3a89ff] to-[#004FC6]">
        <div className="px-5.5 xl:pt-20 xl:pr-15 flex flex-col max-xl:justify-center max-xl:h-full xl:gap-3">
          <div className="flex items-center gap-1">
            <span className="text-white text-2xl xl:text-6xl pt-1.5 xl:pt-5 tracking-tight">
              Vision Pro
            </span>
            <Image
              src="/svg/apple.svg"
              alt="apple"
              width={50}
              height={150}
              className="w-[16px] xl:w-[60px]"
            />
          </div>
          <span className="text-[14px] xl:text-[37px] text-white">
            تجربه دنیای متفاوت
          </span>
          <Button className="bg-white text-[#115BCA] text-[14px] xl:text-[23px] font-semibold w-[104px] xl:w-[153px] h-[29px] xl:h-[43px] rounded-full mt-3">
            خرید کنید
          </Button>
        </div>
        <Image
          src="/images/vision-pro.webp"
          alt="vision pro"
          width={500}
          height={500}
          className="absolute left-4 -bottom-2 xl:bottom-8 w-[178px] xl:w-[377px]"
        />
      </div>
      <div className="relative w-full xl:w-2/5 h-[150px] xl:h-[560px] rounded-[10px] bg-linear-30 from-[#9A5BFF00] to-[#9A5BFF]">
        <div className="py-7 px-5.5 xl:pt-10 flex flex-col xl:items-center">
          <div className="flex items-center xl:flex-col-reverse gap-1">
            <span className="text-white text-2xl xl:text-[40px] pt-1.5 xl:pt-5 tracking-tight">
              iPhone 14 Pro Max
            </span>
            <Image
              src="/svg/apple.svg"
              alt="apple"
              width={50}
              height={150}
              className="w-[16px] xl:w-[40px]"
            />
          </div>
          <span className="text-[14px] xl:text-[27px] text-white">
            فروش ویژه به مدت محدود
          </span>
          <Button className="bg-white text-[#5137F5] text-[14px] xl:text-[23px] font-semibold w-[104px] xl:w-[153px] h-[29px] xl:h-[43px] rounded-full mt-3 xl:mt-5 xl:-mr-37">
            خرید کنید
          </Button>
        </div>
        <Image
          src="/images/purple-iphone.webp"
          alt="iphone"
          width={500}
          height={500}
          className="absolute left-4 bottom-0 w-[110px] sm:w-[160px] xl:w-[256px] max-sm:h-[210px]"
        />
      </div>
    </section>
  );
};

export default NotifyBanners;
