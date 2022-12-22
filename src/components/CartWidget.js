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
          <span>0</span>
        </button>
        {count > 0 && (
          <span className="absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
