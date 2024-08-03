// Arquivo 02: pages/Projetos/index.tsx

import Projeto from "../../components/Projeto";
import Titulo from "../../components/Titulo";
import { Lista } from "./styles";

const projetos = [
  {
    titulo: "ToDo List",
    descricao: "Criação de uma aplicação de To-Do List utilizando Vue.js, JavaScript, CSS e Bootstrap. O projeto inclui a componentização no Vue.js, estilização com CSS e layout responsivo com Bootstrap.",
    linkProjeto: "https://todo-list-vue-puce.vercel.app/",
    linkGit: "https://github.com/jooysoouzaa/todo-list-vue",
  },
  {
    titulo: "Calculadora de IMC",
    descricao: "Calculadora de IMC desenvolvida com React, criada com Vite, que calcula o IMC com base na altura e peso do usuário, exibindo o resultado e a classificação correspondente.",
    linkProjeto: "https://calculo-imc-joy.vercel.app/",
    linkGit: "https://github.com/jooysoouzaa/calculo_imc",
  },
  {
    titulo: "Bikcraft",
    descricao: "Site para uma loja de bicicletas elétricas, o projeto foi realizado através da tecnologias HTML, CSS e JavaScript.",
    linkProjeto: "https://bikcraft-sand.vercel.app/",
    linkGit: "https://github.com/jooysoouzaa/bikcraft",
  },
  {
    titulo: "Sorteador de números",
    descricao: "Aplicação web de um sorteador de número construido através das tecnologias HTML, LESS, Grunt, JavaScript.",
    linkProjeto: "https://sorteadorgrunt-joy.vercel.app/",
    linkGit: "https://github.com/jooysoouzaa/sorteador_grunt",
  },
  {
    titulo: "Fortunatus Motors",
    descricao: "Projeto utilizando HTML, CSS e jQuery para implementar um menu hamburguer, slide carousel, validação do formulário de contato e integração com a API do Google Maps.",
    linkProjeto: "https://fortunatusmotors.vercel.app/",
    linkGit: "https://github.com/jooysoouzaa/jquery_fortunatus_motors",
  },
  {
    titulo: "Calculadora Aritmética",
    descricao: "Calculadora aritmética desenvolvida com Vue.js, projetada para realizar operações matemáticas básicas de forma dinâmica.",
    linkProjeto: "https://calculadora-aritmetica-vue-neon.vercel.app/",
    linkGit: "https://github.com/jooysoouzaa/-calculadoraAritmeticaVue",
  },
];

const Projetos = () => (
  <section>
    <Titulo fontSize={16}> Projetos </Titulo>
    <Lista>
      {projetos.map((projeto, index) => (
        <li key={index}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            linkProjeto={projeto.linkProjeto}
            linkGit={projeto.linkGit}
          />
        </li>
      ))}
    </Lista>
  </section>
);

export default Projetos;
