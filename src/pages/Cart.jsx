import { useContext } from "react";
import CartProduct from "../components/CartProduct";
import { CartContext } from "../store/context-provider";
import { totalItems, totalPrice } from "../store/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p} key={cart.id} />
          ))}
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">total Items:- {totalItems(cart)} </p>
              <h5 className="card-title">
                Total Price:- {totalPrice(cart)}/-{" "}
              </h5>
              <a href="#" className="btn btn-primary ">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
