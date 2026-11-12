import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="Navbaritems">
      <Link
        to="/"
        className="navbar-logo"
        onClick={() => setClicked(false)}
      >
        Trippy
      </Link>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.url}
              onClick={() => setClicked(false)}
            >
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}

        <li>
          <Link
            to="/contact"
            className="nav-links-mobile"
            onClick={() => setClicked(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="signup-btn">
        Sign Up
      </Link>
    </nav>
  );
}

export default Navbar;