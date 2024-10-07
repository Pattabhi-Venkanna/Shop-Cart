import React, { useContext } from "react";
import { CartContext } from "../store/context-provider";

const Product = ({ product }) => {
  const { addCart } = useContext(CartContext);
  return (
    <div className="col">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img src={product.thumbnail} className="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p>discount:-{product.offer}/-</p>
          <h5 className="card-title">{product.price}/-</h5>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary" onClick={() => addCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
