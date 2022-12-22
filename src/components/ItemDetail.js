import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { ItemCount } from "./ItemCount";
import { Loading } from "./Loading";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.img);

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div>
      {/* Item image */}
      <div>
        {!img ? <Loading /> : <img class="imgSize" src={img} alt={item.name} />}
      </div>

      {/* Item description */}
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>
          Price: <strong>${item.price}</strong>
        </span>
        {currentStock > 0 && <p>En Stock: {currentStock}</p>}

        <div>
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div>
            <button
              onClick={handleAdd}
              className="btn btn-warning"
              disabled={currentStock === 0}
            >
              Agregar al carrito
            </button>
            <button
              disabled={!isInCart(item.id)}
              onClick={handleCheckout}
              className="btn btn-success"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
