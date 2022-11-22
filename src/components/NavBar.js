import Cartwidget from "./CartWidget";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CoffeeShop
        </Link>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/cafe">
                Cafe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/maquinas">
                Maquinas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/item/:id">
                Item
              </Link>
            </li>
            <li>
              <Cartwidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
