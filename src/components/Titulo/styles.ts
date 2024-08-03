import styled from 'styled-components';
import { Props } from '.';

export const Titulo = styled.h3<Props>`
  color: #ccb0ab;
  font-size: ${(props) => (props.fontSize ? String(props.fontSize) + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`

export const TituloName = styled.h3<Props>`
margin-bottom: 16px;
  color: #ccb0ab;
  font-size: ${(props) => (props.fontSize ? String(props.fontSize) + 'px' : '14px')};
  font-weight: bold;
  text-align: center;
  @media only screen and (max-width: 768px){
  margin-bottom: 4px;
  }

`
