"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

import Button from "../ui/button";
import SearchBar from "./SearchBar";
import AdvertisingNavbar from "../pages/home/templates/AdvertisingNavbar";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "flex flex-col fixed z-50 top-0 w-full transition-all duration-500",
        isScrolling
          ? "-translate-y-13 2xl:-translate-y-[70px]"
          : "translate-y-0"
      )}
    >
      <AdvertisingNavbar />
      <header className="max-2xl:shadow-[0_0_19.6px_-5px_#0000001A] 2xl:border-b 2xl:border-[#E6E6E6] bg-white w-full flex flex-col justify-center">
        <div>
          <div
            className={clsx(
              "container mx-auto flex items-center p-6 pb-4 2xl:px-0 justify-between transition-all duration-500",
              isScrolling ? "2xl:py-4" : "2xl:py-8"
            )}
          >
            <Button variant="icon" className="2xl:hidden">
              <Image
                src="/svg/hamburger.svg"
                alt="Menu"
                width={100}
                height={100}
                className="icon"
              />
            </Button>
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/svg/app-store.svg"
                alt="Logo"
                width={100}
                height={100}
                className="w-8 h-8 2xl:w-[52px] 2xl:h-[52px]"
              />
              <span className="font-semibold text-primary leading-[15px] w-2 2xl:w-fit 2xl:text-[30px] 2xl:leading-[26px]">
                اپل استور
              </span>
            </Link>
            <div className="max-2xl:hidden flex items-center gap-4">
              <Button radius="full" className="py-5">
                <div className="flex flex-col gap-0.5">
                  <span className="w-4 h-0.5 bg-white rounded" />
                  <span className="w-4 h-0.5 bg-white rounded" />
                  <span className="w-4 h-0.5 bg-white rounded" />
                </div>
                <span>محصولات</span>
              </Button>
              <SearchBar />
            </div>
            <div className="flex items-center gap-1 2xl:gap-3">
              <Button variant="icon" className="relative">
                <Image
                  src="/svg/shopping-cart.svg"
                  alt="Cart"
                  width={100}
                  height={100}
                  className="icon"
                />
                <div className="absolute top-1 right-1 2xl:top-0 2xl:right-0 font-light bg-primary text-white w-4 h-4 2xl:w-[22px] 2xl:h-[22px] text-[8px] 2xl:text-[11px] flex items-center justify-center rounded-full">
                  0
                </div>
              </Button>
              <Button variant="icon" className="relative">
                <Image
                  src="/svg/heart.svg"
                  alt="Heart"
                  width={100}
                  height={100}
                  className="icon"
                />
                <div className="absolute top-1 right-1 2xl:top-0 2xl:right-0 font-light bg-primary text-white w-4 h-4 2xl:w-[22px] 2xl:h-[22px] text-[8px] 2xl:text-[11px] flex items-center justify-center rounded-full">
                  0
                </div>
              </Button>
            </div>
          </div>
          <div
            className={clsx(
              "2xl:hidden transition-all duration-500",
              isScrolling ? "hidden" : "block"
            )}
          >
            <SearchBar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
