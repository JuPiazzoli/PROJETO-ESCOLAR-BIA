import "./Footer.css";
import logoEscola from "../assets/LogoEscolar.jpg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        {/* Seção dos Integrantes */}
        <div className="footer-section-N">
          <h4>Integrantes:</h4>
          <ul>
            <li> Beatriz Piazzoli Del Balso - Nº 27</li>
            <li> Maria Eduarda de Oliveira Bonfim - Nº 17</li>
          </ul>
          <br/>
          <h4>Colaboradores:</h4>
          <ul>
            <li> Matheus Antônio Romero Lamera - Nº 18</li>
            <li> Gustavo Henrique Teles de Freitas Nogueira - Nº 8</li>
            <li> Renan Wanderley Curvelo Gomes Santos- Nº 21</li>
            <li> João Victor Viana da Silva - Nº 10</li>
            <li> - Nº </li>
            <li> - Nº </li>
          </ul>
        </div>

        {/* Seção do Desenvolvedor */}
        <div className="footer-section">
          <h4>Desenvolvimento do Site:</h4>
          <p className="grif">
            Julia Piazzoli Domenegehetti, <br /> Desenvolvedora do site
          </p>
          <p>
            Este projeto foi realizado para a disciplina de Eletiva - Blablabla,
            com o apoio dos colegas e da instituição.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Guia da Inclusão e Diversidade
          </p>
        </div>
      </div>
      {/* Seção da Escola */}
        <div className="footer-section">
          <img src={logoEscola} alt="Logo da Escola" className="logo-escola" />
        </div>
    </footer>
  );
}

export default Footer;
