import styled from "styled-components";
import variaveis from "../../store/styles/variaveis";

type PProps = {
  principal?: boolean
}

export const Linha = styled.div<PProps>`
  display: grid;
  align-items: center;
  grid-template-columns: 140px auto;
  border-bottom: ${(props) => props.principal ? 'none' : `1px solid ${variaveis.cor1}`};
`

export const Atributo = styled.h3<PProps>`
  border-right: 1px solid ${variaveis.cor1};
  text-transform: uppercase;
  background-color: ${(props) => props.principal ? variaveis.cor2 : 'none'};
  padding: 1rem;
  color: ${variaveis.cor1};
`

export const Caracteristica = styled.p<PProps>`
  padding: 1rem 2rem;
  height: 100%;
  background-color: ${(props) => props.principal ? variaveis.cor2 : 'none'};
  text-align: right;

`