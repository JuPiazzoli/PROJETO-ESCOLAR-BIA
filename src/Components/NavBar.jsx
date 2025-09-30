
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Ícone do menu hamburguer */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Links só aparecem se menuOpen for true */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Apresentação</Link>
        </li>
        <li>
          <Link to="/Capacitismo" onClick={toggleMenu}>Capacitismo</Link>
        </li>
        <li>
          <Link to="/Autismo" onClick={toggleMenu}>Autismo</Link>
        </li>
        <li>
          <Link to="/Tdah" onClick={toggleMenu}>TDAH</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Auditiva" onClick={toggleMenu}>Def. Auditiva</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Fisica" onClick={toggleMenu}>Def. Física</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Intelectual" onClick={toggleMenu}>Def. Intelectual</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Visual" onClick={toggleMenu}>Def. Visual</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
