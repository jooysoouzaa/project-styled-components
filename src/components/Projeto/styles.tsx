import styled from 'styled-components'

export const Lista = styled.ul`

`;

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  padding: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  height: 100%; /* Garante que o card ocupe toda a altura disponível */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkProjeto = styled.a`
  display: inline-block;
  margin-top: 16px;
  margin-right: 8px;
  color: ${(props) => props.theme.corDeFundo};;
  font-size: 14px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const LinkGit = styled.a`
  display: inline-block;
  margin-top: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: transparent;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`

