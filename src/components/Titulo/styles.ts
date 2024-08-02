import styled from 'styled-components';
import {Props} from '.';


export const Titulo = styled.h3<Props> `
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  margin-bottom: 16px;
`
export const TituloName = styled.h3<Props> `
color: #282a35;
font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
font-weigth: bold;
margin: 4px 0 16px 0;
text-align: center;

@media only screen and (max-width: 768px){
margin: 16px 0 32px 0;

}
`
