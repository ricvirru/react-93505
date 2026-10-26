import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
  <nav className="app-navbar">
    <ul className="nav-links">
      <li><a href="#"> Home</a></li>
      <li><a href="#"> Calzado</a></li>
      <li><a href="#"> Ropa</a></li>
      <li><a href="#"> Accesorios</a></li>
      <li><a href="#"> Nosotros</a></li>
      <li><a href="#"> Contacto</a></li>
    </ul>
    <div className="app-navbar-widget">
      <CartWidget />
    </div>
  </nav>
  );
}

export default NavBar;