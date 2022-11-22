import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
};

export default ItemList;
