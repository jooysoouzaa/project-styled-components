import Avatar from "../../components/Avatar"
import { UserName } from "./styles"
import { TituloName } from "../../components/Titulo/styles"

import { Descricao, BotaoTema, SidebarContainer} from "./styles"

const Sidebar = () => (
  <aside>

    <SidebarContainer>
    <Avatar />
    <TituloName fontSize={20}>Joy Sóuza</TituloName>
    <UserName fontSize={16} >jooysoouzaa</UserName>
    <Descricao tipo="principal" fontSize={12} >Desenvolvedora Front-End</Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)


export default Sidebar
