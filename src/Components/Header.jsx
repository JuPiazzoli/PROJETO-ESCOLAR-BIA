import "./Header.css";
import Logo from '../assets/Logo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
        />
        <h1 className="titulo">GUIA DA INCLUSÃO E DIVERSIDADE </h1>
      </div>
    </header>
  );
}

export default Header;