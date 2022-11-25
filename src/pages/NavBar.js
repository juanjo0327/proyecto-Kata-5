import { Link } from "react-router-dom";
import '../estilosInicio.css'

function NavBar() {
    return (
      <>
       <nav>
          <ul className="nav-items">
              <li className="nav-itemNetflix">
                <img className="image-container" />
              </li>
              <li className="nav-item inicio">
                <Link className="nav-item nav-link" to="/">
                      <p>Peliculas Top</p>
                </Link> 
              </li>
              <li className="nav-item series">
                <Link className="nav-item nav-link" to="/series">
                      <p>Categorias</p>
                </Link> 
              </li>
              <li className="nav-item peliculas">
                <Link className="nav-item nav-link" to="/busquedaActor">
                      <p>Actor/Actriz</p>
                </Link>
              </li>
          </ul>
       </nav>
      </>
    );
  }
  
  export default NavBar;