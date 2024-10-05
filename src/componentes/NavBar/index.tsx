import estilos from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={estilos.Link}>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurantes">Restaurantes</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
