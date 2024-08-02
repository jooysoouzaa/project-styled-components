import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkProjeto, LinkGit } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>ToDo List</Titulo>
    <Paragrafo tipo="secundario">Criação de uma aplicação de To-Do List utilizando Vue.js, JavaScript, CSS e Bootstrap. O projeto inclui a componentização no Vue.js, estilização com CSS e layout responsivo com Bootstrap.</Paragrafo>
    <LinkProjeto>Ver Projeto</LinkProjeto>
    <LinkGit>Ver repositório</LinkGit>
  </Card>
)

export default Projeto
