import { ThemeProvider } from "styled-components"
import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./styles"
import temaClaro from "./themes/claro"
import temaEscuro from "./themes/escuro"
import { useState } from "react"


function App() {

  const [estaUsandoTemaClaro, setEstaUsandoTemaClaro ] = useState(false)

  function trocaTema(){
    setEstaUsandoTemaClaro(!estaUsandoTemaClaro)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaClaro ? temaClaro : temaEscuro}>
      <EstiloGlobal />

      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
