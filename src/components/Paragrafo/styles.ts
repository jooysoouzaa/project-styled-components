
import styled from 'styled-components';
import { Props } from '.';

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? String(props.fontSize) + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal' ? props.theme.corPrincipal
    : props.theme.corSegundaria};
  line-height: 22px;

`;



