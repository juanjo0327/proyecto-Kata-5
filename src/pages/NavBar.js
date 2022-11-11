// import { Link } from "react-router-dom";

function NavBar() {
    return (
      <>
       <nav>
          <ul className="nav-items">
              <li className="nav-itemNetflix">
                <img className="image-container"></img>
              </li>
              <li className="nav-item inicio">
                <a href="#" className="nav-item nav-link">
                    <p>Peliculas Top</p>
                </a>  
              </li>
              <li className="nav-item series">
                <a href="#" className="nav-link"><p>Series</p></a>  
              </li>
              <li className="nav-item peliculas">
                <a href="#" className="nav-link"><p>Peliculas</p></a>  
              </li>
          </ul>
       </nav>
      </>
    );
  }
  
  export default NavBar;