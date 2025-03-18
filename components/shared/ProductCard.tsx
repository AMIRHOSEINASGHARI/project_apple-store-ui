import Image from "next/image";

import Button from "../ui/button";
import { twMerge } from "tailwind-merge";

type ProductCardProps = {
  image: string;
  colors: string[];
  title: string;
  price: string;
  className?: string;
};

const ProductCard = ({
  image,
  colors,
  title,
  price,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={twMerge(
        "bg-lightGray rounded-[10px] p-3 flex flex-col justify-between gap-5 h-[400px] 2xl:h-[541px]",
        className
      )}
    >
      <div className="w-full h-[220px] 2xl:h-[270px] bg-white rounded-[5px] p-3 pt-6 flex flex-col items-center justify-between gap-3">
        <div className="flex items-center justify-center gap-1 2xl:gap-2">
          {colors.map((color) => (
            <div
              key={color}
              className="size-[12px] 2xl:size-[18.5px] rounded-full"
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          priority
          className="w-auto h-[150px] 2xl:h-[165px]"
        />
      </div>
      <p className="text-sm 2xl:text-lg text-center h-[61px] 2xl:h-[71px] flex items-center justify-center">
        {title}
      </p>
      <div className="h-[1px] w-full bg-[#E4E4E4]" />
      <span className="2xl:text-xl text-center whitespace-nowrap">
        {Number(price).toLocaleString("fa-ir").split("٬").join("/")} تومان
      </span>
      <div className="flex justify-end">
        <Button
          className="w-fit size-7 2xl:size-10 p-0 text-xl 2xl:text-3xl"
          radius="lg"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
