import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../store/context-provider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="d-flex justify-content-between bg-dark px-5 py-3 text-white">
      <Link to="/" className="navbar-brand fs-4 fw-bolder">
        Shop
      </Link>
      <Link to="/cart" className="text-white navbar-link  p-2">
        <button
          type="button"
          className="btn text-bg-dark position-relative fs-5"
        >
          <BsCart />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length === 0 ? null : cart.length}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
