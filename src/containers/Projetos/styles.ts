import styled from "styled-components";


export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 767px){
  grid-template-columns: 1fr;
  }
`
