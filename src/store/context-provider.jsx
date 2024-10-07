import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext({
  cart: [],
  addCart: () => {},
  deleteCart: () => {},
  incrementCart: () => {},
  decrementCart: () => {},
});

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(CartReducer, []);
  const addCart = (product) => {
    console.log(product);
    dispatchCart({ type: "ADD", payload: product });
  };
  const deleteCart = (productId) => {
    dispatchCart({ type: "DELETE", payload: productId });
  };
  const incrementCart = (productId) => {
    const Index = cart.findIndex((p) => p.id === productId);
    if (cart[Index].quantity < 10) {
      dispatchCart({ type: "INCREMENT", payload: productId });
    }
    //dispatchCart({ type: "INCREMENT", payload: productId });
  };
  const decrementCart = (productId) => {
    const Index = cart.findIndex((p) => p.id === productId);
    if (cart[Index].quantity > 1) {
      dispatchCart({ type: "DECREMENT", payload: productId });
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, addCart, deleteCart, incrementCart, decrementCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
