import BannerHomePage from "./templates/BannerHomePage";
import BestSeller from "./templates/BestSeller";
import Categories from "./templates/Categories";
import SpecialOffer from "./templates/SpecialOffer";
import NotifyBanners from "./templates/NotifyBanners";
import AppleWatches from "./templates/AppleWatches";
import HeadphoneBanner from "./templates/HeadphoneBanner";

const HomePage = () => {
  return (
    <>
      <Categories />
      <BannerHomePage />
      <SpecialOffer />
      <BestSeller />
      <NotifyBanners />
      <AppleWatches />
      <HeadphoneBanner />
    </>
  );
};

export default HomePage;
