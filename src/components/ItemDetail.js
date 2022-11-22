const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <img src={item.img} alt="img" />
    </div>
  );
};

export default ItemDetail;
