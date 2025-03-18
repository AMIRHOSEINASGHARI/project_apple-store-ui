import BannerHomePage from "./templates/BannerHomePage";
import BestSeller from "./templates/BestSeller";
import Categories from "./templates/Categories";
import SpecialOffer from "./templates/SpecialOffer";

const HomePage = () => {
  return (
    <>
      <Categories />
      <BannerHomePage />
      <SpecialOffer />
      <BestSeller />
    </>
  );
};

export default HomePage;
