import Avatar from "../../components/Avatar"
import { UserName } from "./styles"
import { TituloName } from "../../components/Titulo/styles"

import { Descricao, BotaoTema, SidebarContainer} from "./styles"

interface Props {
  trocaTema: () => void;
}


const Sidebar = (props: Props) => (
  <aside>

    <SidebarContainer>
    <Avatar />
    <TituloName fontSize={20}>Joy Sóuza</TituloName>
    <UserName fontSize={16} >jooysoouzaa</UserName>
    <Descricao tipo="principal" fontSize={12} >Desenvolvedora Front-End</Descricao>
    <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)


export default Sidebar
