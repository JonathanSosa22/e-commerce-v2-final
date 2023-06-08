import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        E-Commerce
      </Link>

      <Link to="/login" className="icon">
        <i className="fa-solid fa-user"></i>
      </Link>

      <Link to="/purchases" className="icon">
        <i className="fa-solid fa-archive"></i>
      </Link>

      <Link className="icon">
        <i className="fa-solid fa-shopping-cart"></i>
      </Link>

      <Link>
        <DarkMode />
      </Link>
    </nav>
  );
};

export default NavBar;
