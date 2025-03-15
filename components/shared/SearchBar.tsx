import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="container mx-auto flex items-center p-6 pt-0 2xl:p-0 2xl:w-[360px]">
      <div className="bg-lightGray rounded-full w-full relative">
        <Image
          src="/svg/search-normal.svg"
          alt="Search"
          width={100}
          height={100}
          className="icon absolute left-4 top-3 2xl:top-2.5"
        />
        <input
          type="text"
          placeholder="جستجو کنید"
          className="border-none outline-none bg-transparent w-full py-2.5 px-4 pl-11 placeholder:font-light"
        />
      </div>
    </div>
  );
};

export default SearchBar;
