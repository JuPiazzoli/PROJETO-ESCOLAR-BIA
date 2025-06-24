import './Tdah.css';
import '../App.css';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Tdah() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div className="tdah-container">
      <h1>Transtorno de Déficit de Atenção e Hiperatividade (TDAH)</h1>

      <section>
        <h2>O que é TDAH?</h2>
        <p>
          O <strong>Transtorno de Déficit de Atenção e Hiperatividade (TDAH)</strong> é um transtorno neurobiológico que, na maioria das vezes, surge na infância e pode acompanhar o indivíduo por toda a vida. No entanto, estudos recentes mostram que muitos adultos podem apresentar o transtorno mesmo sem terem sido diagnosticados na infância.
        </p>
        <p>
          Caracteriza-se principalmente por <strong>inquietação, dificuldade de atenção e impulsividade</strong>, que impactam diretamente a vida acadêmica, profissional e social.
        </p>
        <p>
          Segundo a Associação Brasileira do Déficit de Atenção, entre <strong>5% e 8% da população mundial</strong> convive com o TDAH. Mais de 60% das crianças com o transtorno continuam apresentando sintomas na vida adulta.
        </p>
      </section>

      <section>
        <h2>Quais são as causas?</h2>
        <p>
          As causas do TDAH ainda estão sendo estudadas, mas pesquisas apontam que fatores genéticos têm papel significativo. Além disso, fatores ambientais, desenvolvimento neurológico, lesões cerebrais, nutrição e o ambiente social também podem contribuir para o desenvolvimento do transtorno.
        </p>
      </section>

      <section>
        <h2>Sintomas do TDAH</h2>
        <h3>Principais características:</h3>
        <div className='ull'>
          <p>✅ Desatenção;</p>
          <p>✅ Hiperatividade;</p>
          <p>✅ Impulsividade.</p>
        </div>
<br/>
        <p>
          Na infância, a desatenção gera dificuldades de concentração, dificuldade em seguir instruções, esquecer tarefas e mudar constantemente de foco. Já a <strong>hiperatividade</strong> se manifesta por agitação constante, movimentação excessiva e dificuldade em permanecer sentado.
        </p>
        <p>
          A <strong>impulsividade</strong> leva a respostas precipitadas, dificuldade em esperar sua vez e comportamentos que podem causar conflitos no convívio social.
        </p>

        <h3>Em adultos:</h3>
        <p>
          A desatenção aparece no trabalho, na dificuldade de estabelecer prioridades, na procrastinação, na sensação constante de sobrecarga e na dificuldade em concluir tarefas iniciadas. A inquietação é mais interna, manifestando-se como ansiedade e desconforto.
        </p>
      </section>

      <section>
        <h2>Tipos de TDAH</h2>
        <div className='ull'>
          <p><strong>TDAH com predomínio de desatenção</strong> — Mais comum em mulheres, marcado por dificuldades acadêmicas, organização e foco.</p>
          <p><strong>TDAH com predomínio de hiperatividade/impulsividade</strong> — A criança se mostra mais agitada, impulsiva e pode ter problemas de conduta, gerando rejeição social.</p>
          <p><strong>TDAH combinado</strong> — É o mais frequente, especialmente na infância e adolescência, reunindo características tanto da desatenção quanto da hiperatividade e impulsividade.</p>
        </div>
        <p>
          Quando não tratado, o TDAH pode levar a problemas de <strong>autoestima, ansiedade, depressão</strong> e dificuldade de relacionamento.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Tdah;