import imgLogo from "../../material-grafico/logo-fondotransparente.png"
import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
    <nav className="navbar-container">
        
            <ul>
            <img className="sattvaLogo" src={imgLogo}  alt={imgLogo} width="80" height="28"/>
            <li>
                <a href="/productos">Productos</a>
            </li>
            <li>
                <a href="/about">Sobre nosotros</a>
            </li>         
            <li>
                <a href="/contacto">Contacto</a>
            </li>
            <li>
            {' '}
            <NavLink
                aria-current="page"
                to="/categoria/holistica"
              >
                Holistica
              </NavLink>
            </li>
            <li>
            {' '}
            <NavLink
                className="nav-link active"
                aria-current="page"
                to="/categoria/cocina"
              >
                Cocina
              </NavLink>
            </li>
            <li>
                <CartWidget/>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;