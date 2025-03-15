import Link from "next/link";
import Image from "next/image";

import { categories } from "@/constants";

const Categories = () => {
  return (
    <section className="2xl:bg-lightGray 2xl:rounded-[17px] flex justify-center">
      <div className="flex flex-wrap gap-4 2xl:gap-[50px] items-center justify-center container mx-auto">
        {categories.map(({ src, text, isActive }) => (
          <Link
            href="#"
            key={text}
            className="bg-lightGray rounded-lg w-[76px] h-[80px] 2xl:h-[131px] flex flex-col items-center justify-center gap-3 2xl:gap-6"
          >
            <Image
              src={src}
              alt={text}
              priority
              width={100}
              height={100}
              className="w-[33px] 2xl:w-[44px]"
            />
            <span
              data-active={isActive}
              className="text-[#747474] text-xs 2xl:text-sm font-semibold whitespace-nowrap data-[active=true]:text-primary"
            >
              {text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
