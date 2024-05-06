import styled from "styled-components";
import variaveis from "../../styles/variaveis";

type PProps = {
  principal?: boolean;
  botao?: 'excluir' | 'editar'
};

export const Linha = styled.div<PProps>`
  display: grid;
  align-items: center;
  grid-template-columns: 140px auto;
  border-bottom: ${(props) =>
    props.principal ? "none" : `1px solid ${variaveis.cor1}`};
  position: relative
`;

export const Atributo = styled.h3<PProps>`
  border-right: 1px solid ${variaveis.cor1};
  text-transform: uppercase;
  background-color: ${(props) => (props.principal ? variaveis.cor2 : "none")};
  padding: 1rem;
  color: ${variaveis.cor1};
`;

export const Caracteristica = styled.textarea<PProps>`
  background-color: ${(props) => (props.principal ? variaveis.cor2 : "none")};
  text-align: right;
  display: block;
  align-self: center;
  resize: none;
  border: none;
  height: 100%;
  padding-top: 18px;

  &:focus {

  }
`;

export const Botao = styled.div<PProps>`
  border-radius: 50%;
  background-color: ${(props) => (props.botao === 'excluir' ? 'red' : 'gray')};
  width: 20px;
  height: 20px;
  text-align: center;
  color: white;
  cursor: pointer;
  position: absolute;
  right: ${(props) => (props.botao === 'excluir' ? '-56px' : '-30px')};
`;
