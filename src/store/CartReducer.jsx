export const totalItems = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};
export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const CartReducer = (currentValue, action) => {
  switch (action.type) {
    case "ADD":
      return [...currentValue, action.payload];
    case "DELETE":
      return currentValue.filter((p) => p.id !== action.payload);
    case "INCREMENT":
      const IndexI = currentValue.findIndex((p) => p.id === action.payload);
      currentValue[IndexI].quantity = currentValue[IndexI].quantity + 1;
      console.log(currentValue[IndexI].quantity);
      console.log("after");
      return [...currentValue];

    case "DECREMENT":
      const IndexD = currentValue.findIndex((p) => p.id === action.payload);
      currentValue[IndexD].quantity -= 1;
      return [...currentValue];

    default:
      return currentValue;
  }
};

export default CartReducer;
