"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "./watches.styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { appleWatchesSliders, sliderPagination } from "@/constants";

import ProductCard from "@/components/shared/ProductCard";
import Button from "@/components/ui/button";

const AppleWatches = () => {
  return (
    <section className="container mx-auto max-2xl:px-6">
      <span className="font-semibold 2xl:text-3xl">انواع اپل واچ</span>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        pagination={sliderPagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="pb-15 pt-10 apple-watches-swiper-slide-first">
          <div className="h-[438px] 2xl:h-[541px] flex flex-col gap-2">
            <div className="bg-primary rounded-[10px] flex items-center justify-center w-full h-[88%] 2xl:h-[85%]">
              <Image
                src="/images/nike-watch.webp"
                alt="nike watch"
                width={200}
                height={200}
                className="w-[100px] 2xl:w-[286px]"
              />
            </div>
            <Button
              variant="faded"
              className="h-[12%] 2xl:h-[15%] rounded-[10px]"
            >
              <span className="font-semibold text-sm 2xl:text-2xl">
                مشاهده همه
              </span>
              <Image
                src="/svg/arrow--left.svg"
                alt="arrow"
                width={50}
                height={50}
                className="w-[17px] 2xl:w-[36px]"
              />
            </Button>
          </div>
        </SwiperSlide>
        {appleWatchesSliders.map(({ id, text, ...props }) => (
          <SwiperSlide
            key={id}
            className="pb-15 pt-10 apple-watches-swiper-slide-others"
          >
            <ProductCard title={text} className="h-full" {...props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AppleWatches;
