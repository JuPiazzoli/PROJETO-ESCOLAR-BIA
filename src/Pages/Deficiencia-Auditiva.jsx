import './DeficienciaAuditiva.css';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../App.css'

function DeficienciaAuditiva() {
  return (
    <>
    <Header />
      <NavBar />
    <div className="auditiva-container">
      <h1>Deficiência Auditiva</h1>

      <section>
        <h2>O que é?</h2>
        <p>
          A <strong>deficiência auditiva</strong> é a perda parcial ou total da audição, podendo ser causada por fatores genéticos (má-formação) ou adquirida por lesões nas estruturas do aparelho auditivo.
        </p>
        <p>
          Nem todas as pessoas surdas utilizam a <strong>Língua Brasileira de Sinais (Libras)</strong> como meio de comunicação. Algumas fazem uso de <strong>leitura labial</strong> ou contam com tecnologias como o <strong>implante coclear</strong>, um dispositivo implantado cirurgicamente na orelha que estimula o nervo auditivo, possibilitando sensações sonoras.
        </p>
      </section>

      <section>
        <h2>Classificação da perda auditiva</h2>
        <p>
          A deficiência auditiva é classificada de acordo com a dificuldade de detectar determinados níveis de decibéis:
        </p>

        <ul>
          <li>
            <strong>Leve:</strong> Dificuldade para compreender a fala humana, principalmente em ambientes ruidosos.
          </li>
          <li>
            <strong>Moderada e Severa:</strong> Necessidade do uso de <strong>aparelhos auditivos</strong> ou <strong>próteses</strong>. Em alguns casos, o uso da <strong>Língua de Sinais</strong> também se torna essencial.
          </li>
          <li>
            <strong>Profunda:</strong> A pessoa não detecta sons, necessitando utilizar <strong>leitura labial</strong> e <strong>Libras</strong> como principais formas de comunicação.
          </li>
        </ul>
      </section>

      <section>
        <h2>Inclusão e Acessibilidade</h2>
        <p>
          A inclusão de pessoas com deficiência auditiva na sociedade e nas escolas passa pela oferta de <strong>intérpretes de Libras</strong>, <strong>materiais visuais</strong>, <strong>legendagem</strong> e <strong>tecnologia assistiva</strong>. Promover a acessibilidade comunicacional é fundamental para garantir seus direitos e sua participação plena.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default DeficienciaAuditiva;