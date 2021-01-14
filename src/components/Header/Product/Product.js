import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, key } = props.product;
  return (
    <div>
      <ul>
        <li key={key}>{name}</li>
      </ul>
    </div>
  );
};

export default Product;
