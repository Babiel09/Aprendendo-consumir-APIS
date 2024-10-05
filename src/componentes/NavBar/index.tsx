import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5';

const NavBar = () => {
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
        <Link to="/login">
        Login
        </Link>
        </li>
      </ul>
  </nav>)
}

export default NavBar