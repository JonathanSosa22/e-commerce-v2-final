import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="image">
          <img
            src={product.images?.[1]?.url}
            alt=""
            className="over img-product"
            crossOrigin="anonymous"
          />
          <img
            src={product.images?.[0]?.url}
            alt=""
            crossOrigin="anonymous"
            className="img-product"
          />
        </div>
        <div className="info">
          <span className="brand">{product.brand}</span>
          <strong>{product.title}</strong>
          <span className="price">Price</span>
          <span className="amount">$ {product.price}</span>
        </div>
      </Link>
      <button className="cart-button">
        <i className="fa-solid fa-shopping-cart"></i>
      </button>
    </div>
  );
};

export default ProductCard;
