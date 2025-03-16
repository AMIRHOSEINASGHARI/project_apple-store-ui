import BannerHomePage from "./templates/BannerHomePage";
import Categories from "./templates/Categories";
import SpecialOffer from "./templates/SpecialOffer";

const HomePage = () => {
  return (
    <>
      <Categories />
      <BannerHomePage />
      <SpecialOffer />
    </>
  );
};

export default HomePage;
