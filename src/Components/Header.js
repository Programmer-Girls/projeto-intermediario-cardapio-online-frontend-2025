import "../Styles/Header.scss";
import logo_cafe from "../Imagens/logo_cafe.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo_cafe} alt="logo" />

      <nav className="nav">
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#Cafes">Cafés quentes</a>
          </li>
          <li>
            <a href="#Cafes">Cafés frios</a>
          </li>
          <li>
            <a href="#Chas">Chás quentes</a>
          </li>
          <li>
            <a href="#Chas">Chás frios</a>
          </li>
          <li>
            <a href="#Acompanhamentos">Acompanhamentos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
