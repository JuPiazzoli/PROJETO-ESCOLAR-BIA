import "./DeficienciaFisica.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../App.css";

function DeficienciaFisica() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="fisica-container">
        <h1>Deficiência Física</h1>

        <section>
          <h2>O que é?</h2>
          <p>
            A <strong>deficiência física</strong> corresponde a alterações
            completas ou parciais de um ou mais segmentos do corpo humano,
            causando{" "}
            <strong>
              comprometimento na mobilidade, na coordenação motora
            </strong>{" "}
            e, em alguns casos, até na fala.
          </p>
          <p>
            Esses comprometimentos podem ter diferentes graus e afetar as
            atividades cotidianas, exigindo{" "}
            <strong>adaptações e recursos de acessibilidade</strong> para
            garantir autonomia e participação social.
          </p>
        </section>

        <section>
          <h2>Tipos mais comuns de Deficiência Física</h2>

          <ol>
            <li>
              <strong>Paraplegia:</strong> Perda total das funções motoras dos
              membros inferiores.
            </li>
            <li>
              <strong>Monoplegia:</strong> Perda parcial ou total das funções
              motoras de <strong>um único membro</strong> (superior ou
              inferior).
            </li>
            <li>
              <strong>Tetraplegia:</strong> Perda total das funções motoras dos{" "}
              <strong>membros superiores e inferiores</strong>.
            </li>
            <li>
              <strong>Hemiplegia:</strong> Perda total das funções motoras de{" "}
              <strong>um lado do corpo</strong> (direito ou esquerdo).
            </li>
            <li>
              <strong>Ostomia:</strong> Procedimento cirúrgico que cria uma
              abertura (ostoma) para eliminar dejetos do organismo, geralmente
              utilizando uma bolsa coletora.
            </li>
            <li>
              <strong>Amputação:</strong> Remoção cirúrgica de uma parte do
              corpo (membros ou extremidades).
            </li>
            <li>
              <strong>Paralisia Cerebral:</strong> Lesão no cérebro, geralmente
              ocorrida na gestação, parto ou nos primeiros anos de vida, que
              afeta a musculatura, equilíbrio, força e coordenação motora.
            </li>
            <li>
              <strong>Nanismo:</strong> Condição genética que resulta em{" "}
              <strong>crescimento ósseo reduzido</strong>, causando estatura
              muito abaixo da média da população.
            </li>
          </ol>
        </section>

        <section>
          <h2>Inclusão e Acessibilidade</h2>
          <p>
            A inclusão de pessoas com deficiência física requer{" "}
            <strong>adaptações no ambiente físico</strong>, como rampas,
            elevadores, banheiros acessíveis, sinalizações adequadas e
            mobiliário adaptado. Além disso, é fundamental promover a{" "}
            <strong>quebra de barreiras atitudinais</strong>, garantindo
            respeito, empatia e oportunidades iguais.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default DeficienciaFisica;
