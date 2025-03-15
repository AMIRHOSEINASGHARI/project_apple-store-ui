import Link from "next/link";
import Image from "next/image";

import Button from "../ui/button";

const Header = () => {
  return (
    <header className="max-2xl:shadow-[0_0_19.6px_-5px_#0000001A] 2xl:border-b 2xl:border-[#E6E6E6] fixed top-13 2xl:top-17.5 bg-white w-full flex flex-col justify-center">
      <div className="container mx-auto flex items-center p-6 2xl:px-0 2xl:py-8 justify-between">
        <Button variant="icon" className="2xl:hidden">
          <Image
            src="/svg/hamburger.svg"
            alt="Menu"
            width={100}
            height={100}
            className="w-4.5"
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
        <div className="flex items-center gap-1 2xl:gap-3">
          <Button variant="icon" className="relative">
            <Image
              src="/svg/shopping-cart.svg"
              alt="Cart"
              width={100}
              height={100}
              className="w-4.5 2xl:w-6"
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
              className="w-4.5 2xl:w-6"
            />
            <div className="absolute top-1 right-1 2xl:top-0 2xl:right-0 font-light bg-primary text-white w-4 h-4 2xl:w-[22px] 2xl:h-[22px] text-[8px] 2xl:text-[11px] flex items-center justify-center rounded-full">
              0
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
