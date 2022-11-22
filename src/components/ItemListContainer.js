import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Own components
import ItemList from "./ItemList";

// Data
import { item } from "../data/item.data";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 2000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

/* function ItemListContainer({ name }) {
  return (
    <div className="alert alert-success" role="alert">
      <h2>{`Bienvenido ${name} a la tienda del CAFE!`}</h2>
    </div>
  );
} */
