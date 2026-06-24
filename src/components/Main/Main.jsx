import Categories from "./Categories";
import Footer from "./Footer";
import LastDialed from "./LastDialed";
import NewA from "./NewA";
import PopularCategories from "./PopularCategories";
import Slider from "./Slider";
import FindTeam from "./Team";
import WomenBanner from "./WomenBanner";

const Main = ({ onAddToCart, wishlistItems = [], onOpenWishlistModal }) => {
  return (
    <>
      <Slider />
      <NewA
        onAddToCart={onAddToCart}
        wishlistItems={wishlistItems}
        onOpenWishlistModal={onOpenWishlistModal}
      />
      <FindTeam />
      <WomenBanner />
      <LastDialed
        onAddToCart={onAddToCart}
        wishlistItems={wishlistItems}
        onOpenWishlistModal={onOpenWishlistModal}
      />
      <PopularCategories />
      <Categories />
      <Footer />
    </>
  );
};

export default Main;
