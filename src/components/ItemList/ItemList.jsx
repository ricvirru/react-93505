import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Listado de Productos</h2>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList;