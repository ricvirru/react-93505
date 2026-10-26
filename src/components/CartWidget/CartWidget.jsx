import "./CartWidget.css";
import imgCarrito from "../../assets/cart-image.png";

const CartWidget = () => {
  return (
    <div>
      <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
    </div>
  )
}

export default CartWidget