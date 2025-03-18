"use client";

import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./swiper.style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import { heroSlides, sliderPagination } from "@/constants";

import Button from "@/components/ui/button";

const BannerHomePage = () => {
  return (
    <section className="my-30">
      <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        pagination={sliderPagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 70,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {heroSlides.map((item) => (
          <SwiperSlide
            key={item.id}
            className="pb-15 banner-homepage-swiper-slide"
          >
            {({ isActive }) => (
              <Link
                href="#"
                data-active={isActive}
                className="flex flex-col justify-center items-center gap-4 transition data-[active=false]:opacity-20"
              >
                <div
                  data-active={isActive}
                  className="flex flex-col justify-center items-center gap-2 2xl:gap-4 data-[active=false]:opacity-20"
                >
                  <Image
                    src="/svg/apple-vision-pro.svg"
                    alt="image"
                    priority
                    width={300}
                    height={300}
                    className="w-25 2xl:w-[278px]"
                  />
                  <p className="max-2xl:text-[15px]">
                    اولین نفری باشید که ویژن پرو می‌خرید
                  </p>
                  <Button className="h-9 w-[142px] rounded-[9px] 2xl:shadow-[0_0_15px_3px_#ff510b66]">
                    خرید کنید
                  </Button>
                </div>
                <Image
                  src={item.src}
                  alt="Image"
                  width={1200}
                  height={500}
                  priority
                  className="w-[300px] sm:w-[500px] xl:w-[1000px]"
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerHomePage;
