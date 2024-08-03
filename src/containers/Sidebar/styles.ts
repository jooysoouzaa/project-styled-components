import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
margin: 8px 0 32px 0;
text-align: center;

  @media only screen and (max-width: 768px){
  margin: 8px 0 16px 0;
  }
`

export const BotaoTema = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  padding: 12px;
  color:  #0D1117;
  font-size: 14px;
  background-color: #ccb0ab;
  border: none;
  font-weight: bold;
  cursor: pointer;


  @media only screen and (max-width: 768px){

  margin-bottom: 40px;
  }
`

export const SidebarContainer = styled.div`
    position: sticky;
    left: 0;
    top: 80px;
`

export const UserName = styled(P)`
    text-align: center;
`


