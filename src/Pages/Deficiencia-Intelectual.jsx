import "./DeficienciaIntelectual.css";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../App.css";

function DeficienciaIntelectual() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="def-container">
        <h1>Deficiência Intelectual</h1>

        <section>
          <h2>O que é?</h2>
          <p>
            A <strong>deficiência intelectual</strong> é um distúrbio do
            neurodesenvolvimento, ou seja, um transtorno neurológico que
            compromete a interação social, a comunicação, o raciocínio lógico, a
            atenção, a memória, a linguagem e o aprendizado.
          </p>
          <p>
            Crianças com essa condição apresentam um nível cognitivo e
            comportamental abaixo do esperado para sua idade, o que pode causar{" "}
            <strong>dificuldade de adaptação</strong> às atividades do dia a
            dia, levando muitos a serem injustamente considerados "imaturo(a)s".
          </p>
        </section>

        <section>
          <h2>Principais sintomas</h2>
          <p>
            Os sinais da deficiência intelectual podem variar conforme o grau,
            mas os principais são:
          </p>

          <h3> &#8594; Atraso no desenvolvimento</h3>
          <p>
            A criança aprende de forma mais lenta e pode apresentar dificuldades
            para falar, formar frases ou executar atividades básicas como se
            vestir ou se alimentar sozinha.
          </p>

          <h3> &#8594; Anomalias físicas</h3>
          <p>
            Algumas crianças podem apresentar características físicas
            específicas, como <strong>tamanho anormal da cabeça</strong>,
            diferenças faciais ou deformidades nos membros. Essas
            características são chamadas de anomalias e, embora não estejam
            presentes em todos os casos, podem ser percebidas logo após o
            nascimento.
          </p>

          <h3> &#8594; Doenças e desenvolvimento motor comprometido</h3>
          <p>
            Em alguns casos, a deficiência intelectual vem acompanhada de
            problemas como convulsões, distúrbios alimentares e crescimento
            irregular. O bebê pode apresentar atraso no desenvolvimento motor,
            como <strong>demorar para sentar, rolar ou ficar em pé</strong>.
          </p>
        </section>

        <section>
          <h2>Tratamento</h2>
          <p>
            O tratamento depende das necessidades e limitações individuais da
            criança. Geralmente, envolve o trabalho de uma equipe
            multidisciplinar composta por:
          </p>
          <div className="ul">
            <p> 🥼 Médico neurologista ou pediatra;</p>
            <p> 🧠 Psicólogo;</p>
            <p> 🦻🏼 Fonoaudiólogo;</p>
            <p> 👩🏼‍⚕️ Terapeuta ocupacional;</p>
            <p> 📋 Educador especializado.</p>
          </div>
          <p>
            O objetivo é promover o <strong>desenvolvimento cognitivo</strong>,
            melhorar a qualidade de vida e reduzir ao máximo os impactos da
            deficiência na autonomia e no bem-estar da criança.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default DeficienciaIntelectual;
