import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";

export const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(product.img);

  const description = product.description.slice(0, 30);
  const title = product.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  if (!img) {
    return <Loading />;
  }

  return (
    <div onClick={handleNavigate} className="col-3 mb-4">
      <div className="card imgClass">
        <img src={img} className="imgSize" alt="Product" />
        <div className="card-body">
          <span className="card-title">
            {product.name.length > 20 ? `${title} ...` : product.name}
          </span>
          <p>
            {product.description.length > 80
              ? `${description} ...`
              : product.description}
          </p>
          <p className="card-text">${product.price}</p>
          <p
            className={product.stock === 0 ? "text-xs text-red-500" : "text-xs"}
          >
            {product.stock === 0
              ? "Sin Stock"
              : quantityAdded
              ? `Agregados: ${quantityAdded}`
              : `En Stock: ${product.stock}`}
          </p>
        </div>
      </div>
    </div>
  );
};
