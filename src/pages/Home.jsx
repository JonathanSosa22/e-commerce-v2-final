import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import ProductCard from "../components/ProductCard";
import FiltersCategories from "../components/FiltersCategories";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    dispatch(getProductsThunk());
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => setCategoriesList(res.data));
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <aside className="fixed">
        <FiltersCategories
          categoriesList={categoriesList}
          scrollToTop={scrollToTop}
        />
      </aside>
      <section className="main-container">
        <ul className="products-list">
          {products.map((product) => (
            <li onClick={scrollToTop} key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
