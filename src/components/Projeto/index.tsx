// Arquivo 01: components/Projeto/index.tsx

import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkProjeto, LinkGit } from "./styles";

export interface ProjetoProps {
  titulo: string;
  descricao: string;
  linkProjeto: string;
  linkGit: string;
}

const Projeto = ({ titulo, descricao, linkProjeto, linkGit }: ProjetoProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <div>
    <LinkProjeto href={linkProjeto} target="_blank">Ver Projeto</LinkProjeto>
    <LinkGit href={linkGit} target="_blank">Repositório</LinkGit>
    </div>
  </Card>
);

export default Projeto;
