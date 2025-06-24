import './DeficienciaVisual.css';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../App.css'

function DeficienciaVisual() {
  return (
    <>
    <Header />
      <NavBar />
    <div className="visual-container">
      <h1>Deficiência Visual</h1>

      <section>
        <h2>O que é?</h2>
        <p>
          A <strong>deficiência visual</strong> é caracterizada pela perda total ou parcial da visão em ambos os olhos, de forma permanente, que não pode ser corrigida com lentes, tratamentos clínicos ou cirúrgicos.
        </p>
        <p>
          É importante destacar que pessoas com alto grau de miopia, por exemplo, <strong>não</strong> são consideradas com deficiência visual, pois existem formas de correção para essa condição.
        </p>
      </section>

      <section>
        <h2>Classificações da deficiência visual</h2>
        <p>Ela pode ser classificada em três graus principais:</p>

        <h3>Baixa visão</h3>
        <p>
          Pode ser leve, moderada ou profunda. Pessoas com baixa visão possuem alguma percepção visual e podem utilizar recursos como <strong>lupas, lentes de aumento, bengalas</strong> e técnicas de <strong>orientação e mobilidade</strong> para realizar suas atividades cotidianas.
        </p>

        <h3>Próximo à cegueira</h3>
        <p>
          A pessoa é capaz de distinguir luz e sombra, mas já necessita de recursos como o <strong>Sistema Braille</strong> para leitura e escrita, além de softwares de voz para acessar computadores. O uso da <strong>bengala</strong> e treinamentos de <strong>orientação e mobilidade</strong> são indispensáveis.
        </p>

        <h3>Cegueira</h3>
        <p>
          Quando há ausência total de visão. Neste caso, é essencial o domínio do <strong>Sistema Braille</strong>, além do uso da <strong>bengala</strong> e de treinamentos específicos que garantam autonomia e segurança na locomoção e nas atividades diárias.
        </p>
      </section>

      <section>
        <h2>Inclusão e Acessibilidade</h2>
        <p>
          A inclusão de pessoas com deficiência visual depende da <strong>acessibilidade comunicacional e arquitetônica</strong>. Recursos como <strong>material em Braille, audiolivros, softwares leitores de tela</strong> e adaptações no ambiente escolar e social são fundamentais para garantir a autonomia e a participação plena.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default DeficienciaVisual;