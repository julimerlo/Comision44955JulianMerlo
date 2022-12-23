import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  console.log(productsAdded);
  const count = productsAdded.length;

  return (
    <div>
      <Link to="/cart">
        <button className="nav-link " id="open" href="#">
          Carrito <i className="bi bi-cart"></i>
          <span>{count}</span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
