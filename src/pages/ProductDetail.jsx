import History from "../components/History";
import Gallery from "../components/Gallery";
import ProductInfo from "../components/ProductInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { getProductsThunk } from "../store/slices/products.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const productsList = useSelector((state) => state.products);

  const product = productsList.find(
    (newProduct) => newProduct.id === Number(id)
  );

  const relatedProduct = productsList.filter(
    (productItem) =>
      productItem.category.id === product.category.id &&
      productItem.id !== product.id
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="product-detail main-container">
      <History currentPage={product?.title} />
      <div className="product-info-flex">
        <div className="col">
          <Gallery images={product?.images} />
        </div>
        <div className="col">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="suggestions">
        <strong>Discover similar products</strong>
        <ul>
          {relatedProduct.map((product) => (
            <li key={product.id} onClick={scrollToTop}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetail;
