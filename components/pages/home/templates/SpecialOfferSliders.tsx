"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { sliderPagination, specialOfferSliders } from "@/constants";

import Button from "@/components/ui/button";

const SpecialOfferSliders = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={sliderPagination}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {specialOfferSliders.map((item) => (
        <SwiperSlide key={item.image} className="py-15">
          <div className="relative flex flex-col 2xl:flex-row items-center justify-center 2xl:justify-end">
            <Image
              src={item.image}
              priority
              alt={item.title}
              width={500}
              height={500}
              className="shadow-2xl absolute w-full 2xl:w-[428px] max-2xl:h-[258px] 2xl:h-[428px] -top-10 right-0 object-cover rounded-[21px] overflow-hidden"
            />
            <div className="bg-lightGray rounded-xl p-5 2xl:pr-70 w-full 2xl:w-[1090px] max-2xl:h-[437px] 2xl:h-[444px] flex flex-col max-2xl:justify-end 2xl:justify-center gap-2 2xl:gap-10">
              <p className="font-semibold text-xl 2xl:text-[37px]">
                {item.title}
              </p>
              <div className="flex flex-col 2xl:flex-row-reverse 2xl:items-start 2xl:justify-end gap-2 2xl:gap-5">
                <span className="text-primary font-bold text-xl 2xl:text-[33.51px]">
                  قیمت:{" "}
                  {Number(item.discountedPrice)
                    .toLocaleString("fa-ir")
                    .split("٬")
                    .join("/")}
                </span>
                <span className="2xl:text-[25.07px] text-[#00000045] line-through">
                  قیمت:{" "}
                  {Number(item.mainPrice)
                    .toLocaleString("fa-ir")
                    .split("٬")
                    .join("/")}
                </span>
              </div>
              <div className="flex items-center gap-2 2xl:gap-4">
                <div className="size-[17px] 2xl:size-[28px] rounded-full bg-[#A848DE]" />
                <div className="size-[17px] 2xl:size-[28px] rounded-full bg-[#ECECEC]" />
                <div className="size-[17px] 2xl:size-[28px] rounded-full bg-[#828282]" />
              </div>
              <div className="flex items-center max-2xl:justify-between gap-1 2xl:gap-5">
                <p className="text-xs 2xl:text-xl text-primary max-2xl:text-center">
                  با گارانتی الماس پایتخت همانند گارانتی اپل
                </p>
                <div className="flex items-center gap-1">
                  <Button className="h-[35px] w-[92px] 2xl:h-[44px] 2xl:w-[164px] 2xl:text-[25px]">
                    خرید کنید
                  </Button>
                  <div className="bg-[#FF510C]/40 size-[29px] 2xl:size-[44px] flex items-center justify-center rounded-lg">
                    <Image
                      src="/svg/arrow.svg"
                      alt="arrow"
                      width={15}
                      height={15}
                      className="w-[13px] 2xl:w-[21px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpecialOfferSliders;
