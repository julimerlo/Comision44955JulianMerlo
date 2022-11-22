const Item = ({ product }) => {
  return (
    <div className="card-body">
      <img src={product.img} class="ImagenCard" alt="Product" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default Item;
