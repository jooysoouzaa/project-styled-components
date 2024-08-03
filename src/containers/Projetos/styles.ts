import styled from "styled-components";


export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 767px){
  grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  flex: 1 1 300px; /* Flex-grow, flex-shrink, flex-basis */
  max-width: 300px; /* Tamanho máximo dos itens */
  box-sizing: border-box;
`;
