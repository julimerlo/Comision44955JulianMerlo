const ItemDetail = ({ item }) => {
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
            <p className="card-text">Unidades: {item.stock}</p>
            <p className="card-text">$ {item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
