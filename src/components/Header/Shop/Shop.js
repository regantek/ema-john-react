import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  const firstTenData = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTenData);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </div>
      <div className="cart-container">
        <h1>This is cart</h1>
      </div>
    </div>
  );
};

export default Shop;
