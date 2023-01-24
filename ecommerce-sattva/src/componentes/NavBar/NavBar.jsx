import imgLogo from "../../material-grafico/logo-fondotransparente.png"
import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="nav-link active" to="/">
        <img className="sattvaLogo" src={imgLogo}  alt={imgLogo} width="80" height="28"/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/categoria/cocina"
              >
                Cocina
              </NavLink>
            </li>
            <li className="nav-item">
              {' '}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/categoria/holistica"
              >
                Holistica
              </NavLink>
            </li>
            
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};


      {/*}
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
*/}



export default NavBar;