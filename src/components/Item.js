import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="d-inline-flex text-center">
      <div className="card" class="imgClass">
        <img src={product.img} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <button type="button" className="btn btn-warning">
            <Link exact path to={`/item/${product.id}`}>
              Ver mas detalles del producto!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
