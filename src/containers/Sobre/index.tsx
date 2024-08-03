import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">Sou desenvolvedora front-end apaixonada por criar experiências web interativas e envolventes. Tenho habilidades em HTML, CSS,
      Metodologia BEM, SASS, LESS,JavaScript, Figma, WordPress, Elementor, Bootstrap, Gulp, Git e GitHub. Sou formada em Análise e
      Desenvolvimento de Sistemas pela FIAP e estou constantemente em busca de aprender e aprimorar minhas habilidades em
      desenvolvimento web, explorando novas tecnologias e seguindo as melhores práticas.</Paragrafo>
      <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=jooysoouzaa&show_icons=true&theme=radical&bg_color=0d111700&title_color=8b5ec1&icon_color=8b5ec1&text_color=8b5ec1&border_color=8b5ec1" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jooysoouzaa&layout=compact&theme=radical&bg_color=0d111700&title_color=8b5ec1&text_color=8b5ec1&border_color=8b5ec1" />
      </GithubSecao>

  </section>
)

export default Sobre
