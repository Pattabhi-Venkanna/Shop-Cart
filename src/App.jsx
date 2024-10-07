import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import CartContextProvider from "./store/context-provider";

function App() {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
