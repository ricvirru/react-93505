const Item = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <br />
    </div>
  );
};

export default Item;