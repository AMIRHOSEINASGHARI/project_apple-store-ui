import BannerHomePage from "./templates/BannerHomePage";
import BestSeller from "./templates/BestSeller";
import Categories from "./templates/Categories";
import SpecialOffer from "./templates/SpecialOffer";
import NotifyBanners from "./templates/NotifyBanners";

const HomePage = () => {
  return (
    <>
      <Categories />
      <BannerHomePage />
      <SpecialOffer />
      <BestSeller />
      <NotifyBanners />
    </>
  );
};

export default HomePage;
