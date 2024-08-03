import styled, { createGlobalStyle } from 'styled-components'


const EstiloGlobal = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  list-style: none;
}

::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    background: ${(props) => props.theme.corDeFundo};
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background-color:  ${(props) => props.theme.corPrincipal};
}

::-webkit-scrollbar-thumb:hover {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background-color:  ${(props) => props.theme.corPrincipal};
}

*::selection {
    color:  ${(props) => props.theme.corDeFundo};
    background:  ${(props) => props.theme.corPrincipal};
    -webkit-text-fill-color:  ${(props) => props.theme.corDeFundo};
}


body{
background-color:  ${(props) => props.theme.corDeFundo};
padding: 80px 0;

@media only screen and (max-width: 768px ){
padding-top: 16px;
}

`

export default EstiloGlobal;

export const Container = styled.div`
max-width: 1024px;
padding: 20px;
margin: 0 auto;
display: grid;
grid-template-columns: 170px auto;
column-gap: 40px;


  @media only screen and (max-width: 768px ){
  display: block;
  padding: 15px;

  .img-perfil{
    display: block;
    margin: 0 auto;
    max-width: 160px;
  }
`
