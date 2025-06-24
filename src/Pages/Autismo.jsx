import "./Autismo.css";
import '../App.css'
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Autismo() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="autismo-container">
        <h1>Autismo (TEA)</h1>

        <section>
          <h2>O que é o Transtorno do Espectro Autista?</h2>
          <p>
            O <strong>Transtorno do Espectro Autista (TEA)</strong> é um
            transtorno do neurodesenvolvimento caracterizado por dificuldades na
            comunicação, na interação social e por comportamentos repetitivos.
            Cada pessoa com TEA possui características únicas e pode apresentar
            diferentes níveis de suporte.
          </p>
        </section>

        <section>
          <h2>Quais os Níveis do Autismo?</h2>
          <h3>Nível 1 — Suporte Leve</h3>
          <p>
            Envolve pessoas que conseguem manter uma certa independência, mas
            enfrentam desafios em interações sociais. Podem ser altamente
            focadas em temas específicos e, muitas vezes, são vistas como
            especialistas naquilo que gostam. Geralmente, levam uma vida
            autônoma, mas com acompanhamento.
          </p>

          <h3>Nível 2 — Suporte Moderado</h3>
          <p>
            Apresentam dificuldades mais evidentes na comunicação e na
            interação. Podem repetir frases ou comportamentos, possuem
            dificuldade em compreender contextos sociais e preferem rotinas
            rígidas. Costumam apresentar também comorbidades como TDAH, TOC,
            ansiedade ou distúrbios sensoriais.
          </p>

          <h3>Nível 3 — Suporte Intenso</h3>
          <p>
            Necessitam de suporte significativo. Têm pouca ou nenhuma
            comunicação verbal, evitam contato visual e físico, apresentam
            movimentos repetitivos constantes e precisam de assistência contínua
            nas atividades do dia a dia, como alimentação, higiene e
            autocuidado.
          </p>
        </section>

        <section>
          <h2>Savant — Habilidades Extraordinárias</h2>
          <p>
            Alguns autistas podem apresentar o <strong>Savantismo</strong>, uma
            condição rara em que, apesar das dificuldades, desenvolvem
            habilidades extraordinárias, como memória fotográfica, cálculos
            mentais, habilidades musicais ou artísticas extremamente avançadas.
          </p>
        </section>

        <section>
          <h2>Como Identificar o TEA?</h2>
          <p>
            O diagnóstico do TEA é complexo e deve ser realizado por
            profissionais especializados. Quanto antes ele ocorrer, maiores são
            as chances de desenvolver autonomia e qualidade de vida. A campanha{" "}
            <strong>“Abril Azul”</strong> surge como uma importante ação de
            conscientização, incentivando o conhecimento, a empatia e a inclusão
            das pessoas com TEA na sociedade.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Autismo;
