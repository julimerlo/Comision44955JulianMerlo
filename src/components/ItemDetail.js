import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

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
    <div className="card mb-3 m-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} className="img-fluid rounded-start" alt="img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            {currentStock > 0 && (
              <p className="text-sm">En Stock: {currentStock}</p>
            )}
            <p className="card-text">$ {item.price}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center">
        {/* Count */}
        {currentStock > 0 ? (
          <ItemCount count={count} handleCount={handleCount} />
        ) : (
          <span className="text-red-500 mt-10">Sin stock</span>
        )}
        <div className="w-full flex flex-col items-center">
          <button
            onClick={handleAdd}
            className="w-4/5 bg-warning px-4 py-2 mt-2 rounded disabled:opacity-40"
            disabled={currentStock === 0}
          >
            Agregar al carrito
          </button>
          <button
            onClick={handleCheckout}
            className="w-4/5 bg-success text-white px-4 py-2 mt-2 rounded"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
