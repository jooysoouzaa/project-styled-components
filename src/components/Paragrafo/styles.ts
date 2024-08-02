import styled from 'styled-components';
import { Props } from '.';


export const P = styled.p<Props> `
  font-size: 14px;
  // color: ${({ tipo }) => (tipo === 'principal' ? '#ccb0ab94' : '#949494')};
  color: #ccb0ab94;
  line-height: 22px;
`
