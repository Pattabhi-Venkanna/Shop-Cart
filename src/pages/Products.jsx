import { useState } from "react";
import Data from "../../Data.json";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState(Data.products);
  return (
    <div className="container mt-5 ">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
