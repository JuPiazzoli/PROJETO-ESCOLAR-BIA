import "./Capacitismo.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../App.css'

function Capacitismo() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="capacitismo-container">
        <h1>CAPACITISMO </h1>

        <section>
          <h2>O que é Capacitismo?</h2>
          <p>
            O <strong>Capacitismo</strong> é uma forma de preconceito
            estrutural, social e comportamental que parte da falsa ideia de que
            pessoas com deficiência são menos capazes. Geralmente, esse
            julgamento vem de pessoas sem deficiência, que subestimam as
            capacidades das pessoas com deficiência baseadas apenas em sua
            condição.
          </p>
          <p>
            Muitas vezes, por falta de conhecimento e debate, o capacitismo
            passa despercebido. A pouca discussão sobre o descumprimento das
            leis que garantem direitos e participação plena das pessoas com
            deficiência na sociedade contribui para a manutenção desse
            preconceito.
          </p>
          <p>
            Além disso, o <strong>capacitismo camuflado</strong> ocorre quando
            há uma supervalorização de ações simples realizadas por uma pessoa
            com deficiência, tratando-as como heroicas ou extraordinárias,
            quando na verdade são expressões normais de autonomia e
            independência.
          </p>
        </section>

        <section>
          <h2>Como Combater o Capacitismo?</h2>
          <p>
            Combater o capacitismo exige mudança de cultura, consciência e
            atitudes. É necessário promover a inclusão, repensar comportamentos,
            questionar piadas, expressões e práticas preconceituosas, além de
            criar ambientes acessíveis.
          </p>
          <p>
            Incluir pessoas com deficiência nos processos decisórios, seja na
            escola, no trabalho ou na sociedade, é fundamental. Assim, suas
            vozes são ouvidas, suas experiências valorizadas e seus direitos
            respeitados.
          </p>
          <p>
            A <strong>informação</strong> e a <strong>conscientização</strong>{" "}
            são as principais ferramentas para desconstruir o preconceito e
            construir uma sociedade anticapacitista, justa, empática e
            verdadeiramente inclusiva.
          </p>
        </section>

        <section>
          <h2>Como Evitar o Capacitismo?</h2>
          <div className="topicos">
            <p>
              🚫 Não subestime — Acredite na autonomia das pessoas com
              deficiência.
            </p>
            <p>
              🚫 Evite supervalorizar — Atividades comuns não precisam ser
              vistas como extraordinárias.
            </p>
            <p>
              🗣️ Aprenda — Busque informações com pessoas com deficiência e
              conteúdos acessíveis.
            </p>
            <p>
              💡 Revise seu vocabulário — Elimine expressões capacitistas do dia
              a dia.
            </p>
            <p>
              🤝 Pratique a empatia — Respeite, escute e promova a inclusão.
            </p>
          </div>
         </section>
      </div>
      <Footer />
    </>
  );
}

export default Capacitismo;
