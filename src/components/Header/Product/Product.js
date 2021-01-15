import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, key, img, seller, price, stock } = props.product;
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
        <button className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
