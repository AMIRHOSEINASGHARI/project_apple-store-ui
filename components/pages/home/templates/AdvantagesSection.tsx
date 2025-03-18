import { Fragment } from "react";

import Image from "next/image";

import { homePageAdvantages } from "@/constants";

const AdvantagesSection = () => {
  return (
    <section className="xl:bg-lightGray">
      <div className="container mx-auto max-2xl:px-6 max-xl:grid max-xl:grid-cols-2 xl:flex xl:items-center xl:justify-between gap-7">
        {homePageAdvantages.map(({ text, image }, index) => (
          <Fragment key={text}>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-3 max-xl:h-[82px] xl:h-[84px] p-3 rounded-[18px] bg-lightGray">
              <Image
                src={image}
                alt={text}
                width={50}
                height={50}
                className="w-7 xl:w-[38px]"
              />
              <span className="text-xs xl:text-[18.5px] text-center">
                {text}
              </span>
            </div>
            {index < homePageAdvantages.length - 1 && (
              <div className="max-xl:hidden w-[1px] h-[60px] bg-[#e6e6e6]" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
