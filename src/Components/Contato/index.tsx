import { useDispatch } from "react-redux"
import { Linha, Atributo, Caracteristica, Botao } from "./styles"
import { excluir, editar } from '../../store/reducers/contatos'
import React from "react"

const Contato = ({nome, numero, email}: {nome: string, numero: string, email: string}) => {
  const dispatch =  useDispatch()
  const [estaEditando, setEstaEditando] = React.useState(false)

  function handleEditionClick() {
    dispatch(editar(nome))
    setEstaEditando(!estaEditando)
  }

  return (
    <div style={{marginBottom: '1rem'}}>
      <Linha principal>
        <Atributo principal>Nome</Atributo>
        <Caracteristica disabled={!estaEditando} principal>{nome}</Caracteristica>
        <Botao botao='excluir' onClick={() => dispatch(excluir(nome))}>x</Botao>
        <Botao botao='editar' onClick={handleEditionClick}>-</Botao>
      </Linha>
      <Linha>
        <Atributo>Número</Atributo>
        <Caracteristica disabled={!estaEditando}>{numero}</Caracteristica>
        <Atributo>Email</Atributo>
        <Caracteristica disabled={!estaEditando}>{email}</Caracteristica>
      </Linha>
    </div>
  )
}


export default Contato