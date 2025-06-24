import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Apresentação</Link>
        </li>
        <li>
          <Link to="/Capacitismo">Capacitismo</Link>
        </li>
        <li>
          <Link to="/Autismo">Autismo</Link>
        </li>
        <li>
          <Link to="/Tdah">TDAH</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Auditiva">Def. Auditiva</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Fisica">Def. Física</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Intelectual">Def. Intelectual</Link>
        </li>
        <li>
          <Link to="/Deficiencia-Visual">Def. Visual</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
