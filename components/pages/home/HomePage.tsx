import BannerHomePage from "./templates/BannerHomePage";
import Categories from "./templates/Categories";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Categories />
      <BannerHomePage />
    </div>
  );
};

export default HomePage;
