import styled, { createGlobalStyle } from 'styled-components'


const EstiloGlobal = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

body{
padding-top: 80px;

@media only screen and (max-width: 768px ){
padding-top: 16px;
}
}
`

export default EstiloGlobal;

export const Container = styled.div`
max-width: 1024px;
padding: 20px;
margin: 0 auto;
display: grid;
grid-template-columns: 128px auto;
column-gap: 56px;

  img{
  max-width: 100%;
  }

  @media only screen and (max-width: 768px ){
  display: block;
  padding: 15px;

  .img-perfil{
    display: block;
    margin: 0 auto;
    max-width: 160px;
  }
`
