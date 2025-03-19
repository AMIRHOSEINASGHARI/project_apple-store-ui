import Link from "next/link";
import Image from "next/image";

import { footerLinks, socialMediaList } from "@/constants";

import Button from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-lightGray">
      <div className="container mx-auto max-2xl:px-6 py-7 lg:py-15 grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="w-full lg:order-3 lg:col-span-2">
          <EnterEmail />
        </div>
        <div className="w-full lg:order-1 lg:col-span-4">
          <Links />
        </div>
        <div className="w-full lg:order-4">
          <SocialMedia />
        </div>
        <div className="w-full lg:order-2">
          <ENamad />
        </div>
      </div>
      <BottomSnap />
    </footer>
  );
};

export default Footer;

const EnterEmail = () => (
  <div className="space-y-3 flex flex-col justify-end h-full lg:px-6">
    <span className="inline-block lg:text-[18px]">عضویت در خبرنامه</span>
    <div className="flex items-center justify-between gap-2 w-full bg-white h-[45px] lg:h-[52px] rounded-[7px] p-2">
      <input
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        className="bg-transparent outline-none placeholder:text-[#2222224A] placeholder:text-[13px] lg:placeholder:text-[15px] w-full"
      />
      <Button variant="faded">عضویت</Button>
    </div>
  </div>
);

const ENamad = () => (
  <div>
    <Image
      src="/images/enamad.webp"
      alt="enamad"
      width={150}
      height={150}
      className="w-[61px] lg:w-[97px]"
    />
  </div>
);

const SocialMedia = () => (
  <div className="max-lg:bg-white max-lg:rounded-[16px] max-lg:p-4 flex items-center max-lg:justify-between lg:justify-end lg:items-end lg:gap-3 h-full">
    {socialMediaList.map(({ alt, src }) => (
      <div
        key={alt}
        className="lg:bg-white lg:size-[52px] flex items-center justify-center lg:rounded-[9px]"
      >
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="w-[17px] lg:w-[26px]"
        />
      </div>
    ))}
  </div>
);

const Links = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-50 xl:gap-63 max-lg:bg-white max-lg:p-3 lg:px-9 lg:mb-10 max-lg:rounded-xl">
    {footerLinks.map(({ id, label, links }) => (
      <div key={id} className="lg:space-y-5">
        <label
          htmlFor={id}
          className="peer flex items-center justify-between max-lg:cursor-pointer"
        >
          <span className="lg:font-semibold lg:text-[18px] whitespace-nowrap">
            {label}
          </span>
          <Image
            src="/svg/angle.svg"
            alt="angle"
            width={20}
            height={20}
            className="w-[10.5px] lg:hidden"
          />
          <input type="checkbox" id={id} className="hidden" />
        </label>
        <ul className="hidden peer-has-checked:flex lg:flex flex-col gap-1 lg:gap-3 max-lg:p-3">
          {links.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className="text-sm lg:text-[15px] whitespace-nowrap"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const BottomSnap = () => (
  <div className="bg-white max-lg:border-t border-[#0000001A] p-3 lg:p-7">
    <p className="text-[10px] lg:text-[18px] text-center">
      تمامی حقوق برای <span className="text-primary">وبسایت اپل استور</span>{" "}
      محفوظ است.
    </p>
  </div>
);
