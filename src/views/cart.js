import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/images/empty.png";
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear, totalAmount } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div>
        {productsAdded.length === 0 ? (
          <div>
            <img src={EmptyCart} alt="Empty Cart" class="imgSize" />
            <h1 className="p-3 mb-2 bg-info text-dark">
              No has agregado productos
            </h1>
            <button onClick={() => navigate("/")} className="btn btn-dark">
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div>
            <div>
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div>
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div>
              {isLoading ? (
                <Loading size="50px" />
              ) : (
                <div>
                  <span>Total a pagar: ${totalAmount}</span>
                  <button
                    onClick={handleFinalizePurchase}
                    className="btn btn-success"
                  >
                    Finalizar Compra
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;
