import Footer from "../Main/Footer";
import Navbar from "../Main/Navbar";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <ProductList />
      <Footer />
    </>
  );
};

export default Products;
