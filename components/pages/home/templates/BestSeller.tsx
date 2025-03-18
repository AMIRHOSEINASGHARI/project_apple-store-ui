"use client";

import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { bestSellerSliders, sliderPagination } from "@/constants";

import ProductCard from "@/components/shared/ProductCard";

const BestSeller = () => {
  return (
    <section className="container mx-auto max-2xl:px-6 my-20">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[18px] 2xl:text-3xl font-semibold">
          پرفروشترین محصولات
        </p>
        <Link href="#" className="flex items-center gap-3">
          <span className="text-xs 2xl:text-xl">مشاهده همه</span>
          <Image
            src="/svg/arrow--left.svg"
            width={50}
            height={50}
            alt="arrow"
            className="w-[20px] 2xl:w-[23px]"
          />
        </Link>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          modules={[Pagination, Autoplay]}
          pagination={sliderPagination}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {bestSellerSliders.map(({ id, colors, image, price, text }) => (
            <SwiperSlide key={id} className="py-15">
              <ProductCard
                colors={colors}
                image={image}
                price={price}
                title={text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSeller;
