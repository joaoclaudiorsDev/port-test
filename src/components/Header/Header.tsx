import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return(
        <header id="nav-bar-father-box">
          <nav id="nav-bar-children-box">
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/about-me">
              About me
            </NavLink>
            <NavLink to="/projects">
              Projects
            </NavLink>
          </nav>
        </header>
    )
}
export default Header;