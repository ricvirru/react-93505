import { useEffect, useState } from "react";
import { getProducts } from "../../mock/mockProducts";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>
      <ItemList products={products} />
      

    </div>
  );
};

export default ItemListContainer;