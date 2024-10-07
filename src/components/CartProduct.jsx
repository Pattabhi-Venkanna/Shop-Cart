import { useContext } from "react";
import { CartContext } from "../store/context-provider";

const CartProduct = ({ product }) => {
  const { decrementCart, incrementCart, deleteCart } = useContext(CartContext);
  return (
    <div>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-auto d-none d-lg-block">
          <img src={product.thumbnail} height="200" width="200" />
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            {product.title}
          </strong>
          <div className="mb-1 text-body-secondary">
            {" "}
            price:-{product.price}/-{" "}
          </div>
          <p className="card-text mb-auto">{product.description}</p>
          <div>
            <span
              className="button-30"
              role="button"
              onClick={() => decrementCart(product.id)}
            >
              -
            </span>
            <span className="button-3" role="button">
              {product.quantity}
            </span>
            <span
              className="button-30"
              role="button"
              onClick={() => incrementCart(product.id)}
            >
              +
            </span>
          </div>
          <button
            type="button "
            class="btn btn-danger butn mt-2"
            onClick={() => deleteCart(product.id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
