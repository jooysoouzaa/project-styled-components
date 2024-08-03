import { P } from "./styles";

export interface Props {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
}

const Paragrafo = ({children, tipo = 'principal', fontSize }: Props) => <P fontSize={fontSize} tipo={tipo}>{children}</P>;

export default Paragrafo;
