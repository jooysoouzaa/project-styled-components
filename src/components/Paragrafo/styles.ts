/* eslint-disable @typescript-eslint/restrict-plus-operands */
import styled from 'styled-components';
import { Props } from '.';

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? String(props.fontSize) + 'px' : '14px')};
  color: ${({ tipo }) => (tipo === 'principal' ? '#ccb0ab' : '#ccb0ab94')};
  line-height: 22px;

`;



