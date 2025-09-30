import "./Apresentacao.css";
import '../App.css'
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Fund1 from '../assets/Beatriz.jpg'
import Fund2 from '../assets/Bonfim.jpg'
import Colab1 from '../assets/Gustavo.jpg'
import Colab2 from '../assets/Renan.jpg'
import Colab3 from '../assets/Felipe.jpeg'
import Colab4 from '../assets/João.jpeg'
import Colab5 from '../assets/Pedro.jpeg'
import Footer from "../Components/Footer";

function Apresentacao() {
  return (
    <>
      <Header />
      <NavBar />
      <h1 className="Titulo" >Bem-vindo(a) à Nossa Página! </h1>
      <div className="Flex-row">
      <div className="apresentacao">
      <p>
        O <strong>Guia da Inclusão e Diversidade</strong> nasceu do sonho e da
        iniciativa de dois fundadores —
        <strong> [Beatriz Piazzoli Del Balso]</strong> e 
        <strong> [Maria Eduarda de Oliveira Bonfim]</strong> —, que acreditam
        profundamente no poder da educação como ferramenta de transformação
        social. Ao lado deles, uma equipe comprometida com a causa, composta por
        seis colaboradores, tornou possível a construção deste projeto, que
        também contou com apoio institucional fundamental.
      </p>
      <p>
        Este site tem como objetivo oferecer um espaço informativo e educativo,
        voltado para a <strong>conscientização</strong> e 
        <strong> orientação</strong> de gestores, professores, alunos e famílias
        sobre a importância de acolher, respeitar e incluir pessoas com
        deficiência no ambiente escolar.
      </p>
      <p>
        Acreditamos que a escola é um dos principais agentes na construção de
        uma sociedade mais justa e empática. Por isso, ela deve ser um espaço de
        combate ao <strong>capacitismo,</strong> ao 
        <strong> bullying</strong> e a qualquer forma de
        <strong> preconceito,</strong> promovendo ambientes mais seguros,
        saudáveis e verdadeiramente acolhedores para todas as pessoas, em sua
        plena diversidade.
      </p>
      <p>
        Valorizamos e reconhecemos a riqueza da
        <strong> diversidade humana</strong> — seja ela física, sensorial,
        intelectual, neurodivergente, social ou cultural. Cada pessoa tem
        potencialidades únicas que devem ser respeitadas e estimuladas.
      </p>
      <p>
        Nosso propósito vai além de informar: buscamos incentivar práticas
        inclusivas nas escolas, possibilitando a integração de estudantes com
        deficiência de maneira ativa e participativa na rotina escolar. Para
        isso, propomos o uso de <strong>jogos interativos</strong> alinhados às
        habilidades da
        <strong> Base Nacional Comum Curricular (BNCC)</strong>, além de oferecer
        conteúdos educativos sobre
        <strong> condições genéticas</strong>,<strong> neurodivergências</strong>{" "}
        e ferramentas de comunicação acessível, como a
        <strong> Libras (Língua Brasileira de Sinais)</strong>e outros recursos
        de acessibilidade.
      </p>
      <p>
        Mais do que um site, este é um movimento. Um convite à reflexão, à
        empatia e, sobretudo, à<strong> mudança de atitudes</strong>. Que cada
        escola, cada sala de aula e cada pessoa se torne um agente da inclusão,
        contribuindo para um mundo onde todos, sem exceção, tenham a
        oportunidade de aprender, se desenvolver e ser plenamente quem são.
      </p>
      </div>
      <div className="Flex-Colunm">
        <h2> FUNDADORES </h2>
        <div className="Flex-row-I">
        <img src={Fund1} alt="Fundadores" className="Fund" />
        <img src={Fund2} alt="Fundadores" className="Fund" />
        </div>
        <h2> COLABORADORES </h2>
        <div className="Flex-row-I">
        <img src={Colab1} alt="Colaboradores" className="Colab" />
        <img src={Colab2} alt="Colaboradores" className="Colab" />
        </div>
        <div className="Flex-row-I">
        <img src={Colab3} alt="Colaboradores" className="Colab" />
        <img src={Colab4} alt="Colaboradores" className="Colab" />
        </div>
        <div className="Flex-row-I">
        <img src={Colab5} alt="Colaboradores" className="Colab" />
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Apresentacao;
