const categories = [
  {
    src: "/svg/apple-watch.svg",
    text: "اپل واچ",
    isActive: false,
  },
  {
    src: "/svg/airpods.svg",
    text: "ایرپاد",
    isActive: true,
  },
  {
    src: "/svg/ipad.svg",
    text: "آیپد",
    isActive: false,
  },
  {
    src: "/svg/iphone.svg",
    text: "آیفون",
    isActive: false,
  },
  {
    src: "/svg/magsafe.svg",
    text: "مگ سیف",
    isActive: false,
  },
  {
    src: "/svg/homepod.svg",
    text: "هوم پاد",
    isActive: false,
  },
  {
    src: "/svg/apple-tv.svg",
    text: "اپل تی وی",
    isActive: false,
  },
];

const heroSlides = [
  {
    id: "1",
    src: "/images/hero-sliders/slider-1.webp",
  },
  {
    id: "2",
    src: "/images/hero-sliders/slider-2.webp",
  },
  {
    id: "3",
    src: "/images/hero-sliders/slider-3.webp",
  },
  {
    id: "4",
    src: "/images/hero-sliders/slider-4.webp",
  },
];

const specialOfferTimers = [
  {
    number: "۰۱",
    text: "روز",
    isActive: true,
  },
  {
    number: "۲۴",
    text: "ساعت",
    isActive: false,
  },
  {
    number: "۱۵",
    text: "دقیقه",
    isActive: false,
  },
  {
    number: "۱۰",
    text: "ثانیه",
    isActive: false,
  },
];

const specialOfferSliders = [
  {
    image: "/images/special-offer-sliders/special-slider-1.webp",
    title: "خرید آیفون ۱۶ پرو ۵۱۲ گیگ",
    mainPrice: "62000000",
    discountedPrice: "60500000",
  },
  {
    image: "/images/special-offer-sliders/special-slider-2.webp",
    title: "خرید مک بوک پرو ۱ ترابایت",
    mainPrice: "62000000",
    discountedPrice: "60500000",
  },
  {
    image: "/images/special-offer-sliders/special-slider-3.webp",
    title: "خرید ایرپاد اپل",
    mainPrice: "62000000",
    discountedPrice: "60500000",
  },
  {
    image: "/images/special-offer-sliders/special-slider-4.webp",
    title: "خرید ویژن پرو اپل",
    mainPrice: "62000000",
    discountedPrice: "60500000",
  },
  {
    image: "/images/special-offer-sliders/special-slider-5.webp",
    title: "خرید آیفون ۱۴ پرو ۲۵۶ گیگ",
    mainPrice: "62000000",
    discountedPrice: "60500000",
  },
];

const sliderPagination = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + '">' + "</span>";
  },
};

const bestSellerSliders = [
  {
    id: "1",
    image: "/images/best-seller-sliders/macbook.webp",
    text: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
    price: "75000000",
    colors: ["#FFDA79", "#ECECEC", "#828282"],
  },
  {
    id: "2",
    image: "/images/best-seller-sliders/tablet.png",
    text: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
    price: "45000000",
    colors: ["#ECECEC", "#828282"],
  },
  {
    id: "3",
    image: "/images/best-seller-sliders/headphone.png",
    text: "ایرپاد مکس هدفون بلوتوث اپل",
    price: "27300000",
    colors: ["#FFDA79"],
  },
  {
    id: "4",
    image: "/images/best-seller-sliders/watch.png",
    text: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    price: "41200000",
    colors: ["#E24C21"],
  },
  {
    id: "5",
    image: "/images/best-seller-sliders/iphone16-promax.webp",
    text: "گوشی اپل مدل iphone 16 Pro Max یک ترابایت ۸ گیگ",
    price: "220000000",
    colors: ["#E24C21", "#000000"],
  },
  {
    id: "6",
    image: "/images/best-seller-sliders/iphone16.webp",
    text: "گوشی اپل مدل iphone 16 CH یک ترابایت ۸ گیگ",
    price: "88900000",
    colors: ["#2196f3", "#00e676", "#ff80ab"],
  },
  {
    id: "7",
    image: "/images/best-seller-sliders/macbook.webp",
    text: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
    price: "75000000",
    colors: ["#FFDA79", "#ECECEC", "#828282"],
  },
  {
    id: "8",
    image: "/images/best-seller-sliders/tablet.png",
    text: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
    price: "45000000",
    colors: ["#ECECEC", "#828282"],
  },
  {
    id: "9",
    image: "/images/best-seller-sliders/headphone.png",
    text: "ایرپاد مکس هدفون بلوتوث اپل",
    price: "27300000",
    colors: ["#FFDA79"],
  },
  {
    id: "10",
    image: "/images/best-seller-sliders/watch.png",
    text: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    price: "41200000",
    colors: ["#E24C21"],
  },
  {
    id: "11",
    image: "/images/best-seller-sliders/iphone16-promax.webp",
    text: "گوشی اپل مدل iphone 16 Pro Max یک ترابایت ۸ گیگ",
    price: "220000000",
    colors: ["#E24C21", "#000000"],
  },
  {
    id: "12",
    image: "/images/best-seller-sliders/iphone16.webp",
    text: "گوشی اپل مدل iphone 16 CH یک ترابایت ۸ گیگ",
    price: "88900000",
    colors: ["#2196f3", "#00e676", "#ff80ab"],
  },
];

const appleWatchesSliders = [
  {
    id: "1",
    image: "/images/watch-sliders/watch-slider-1.png",
    text: "اپل واچ اولترا تیتانیومی با بند اوشن میدنایت",
    price: "21000000",
    colors: ["#ECECEC", "#828282"],
  },
  {
    id: "2",
    image: "/images/watch-sliders/watch-slider-2.png",
    text: "اپل واچ سری 8 آلومینیوم میدنایت با بند اسپرت سیلیکون میدنایت",
    price: "15000000",
    colors: ["#ECECEC", "#828282"],
  },
  {
    id: "3",
    image: "/images/watch-sliders/watch-slider-3.png",
    text: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    price: "41200000",
    colors: ["#E24C21"],
  },
  {
    id: "4",
    image: "/images/watch-sliders/watch-slider-4.webp",
    text: "اپل واچ اولترا تیتانیومی با بند اوشن میدنایت",
    price: "21000000",
    colors: ["#ECECEC", "#828282"],
  },
];

export {
  categories,
  heroSlides,
  specialOfferTimers,
  specialOfferSliders,
  sliderPagination,
  bestSellerSliders,
  appleWatchesSliders,
};
