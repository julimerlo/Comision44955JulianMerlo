import { useGetItem } from "../hooks/useGetItem";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  return (
    <div className="h-full container mt-4">
      <div className="row">
        <div className="col-12">
          <ItemList products={items} />
        </div>
      </div>
    </div>
  );
};
