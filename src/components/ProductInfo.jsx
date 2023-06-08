import { useState } from "react";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-info">
      <div className="brand">{product?.brand}</div>
      <h2>{product?.title}</h2>
      <div className="product-data">
        <div className="product-options">
          <div className="flex">
            <div className="price">
              <span className="label">Price</span>
              <span className="amount">$ {product?.price}</span>
            </div>
            <div className="quantity-box">
              <div className="label">Quantity</div>
              <div className="flex">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div className="value">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <button className="add-cart-button">
            Add to cart <i className="fa-solid fa-shopping-cart"></i>
          </button>
        </div>
        <p className="product-description">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
