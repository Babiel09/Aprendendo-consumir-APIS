import estilos from "./header.module.scss";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <nav className={estilos.Link}>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurantes">Restaurantes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header2;
