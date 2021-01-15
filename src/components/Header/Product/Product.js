import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  //console.log(props.product);
  const { name, key, img, seller, price, stock } = props.product;
  const { handleAddProduct } = props;
  return (
    <div className="product">
      <div>
         
        <img src={img} alt="" />
      </div>
      <div className="product-desc">
        <h4 className="product-name" key={key}>
          {name}
        </h4>
        <br />
        <p>
          <small>By:{seller}</small>
        </p>
        <br />
        <p>${price}</p>

        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button
          className="cart-button"
          onClick={() => handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
