import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light container">
      <div className="d-inline-flex">
        <Link className="navbar-brand px-5" to="/">
          CoffeeShop
        </Link>
        <button
          className="navbar-toggler mx-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav px-5">
            <li className="nav-item">
              <Link className="nav-link px-5" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to="/category/cafe">
                Cafe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5" to="/category/maquinas">
                Maquinas
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget className="px-5" />
      </div>
    </nav>
  );
}

export default navBar;
