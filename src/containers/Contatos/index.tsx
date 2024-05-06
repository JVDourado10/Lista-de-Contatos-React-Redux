import { useDispatch, useSelector } from "react-redux"
import React from "react"

import Contato from "../../Components/Contato"
import { RootReducer } from "../../store"
import { Novo } from './styles'
import { adicionar } from '../../store/reducers/contatos'
import ContatoC from "../../models/Contato"

const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const dispatch = useDispatch()
  
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [numero, setNumero] = React.useState('')
  const novoContato = new ContatoC(nome,numero,email)


  function handleChange(valor: string, id: string) {
    if(id === 'nome') {
      setNome(valor)
      novoContato.nome = nome
    } else if (id === 'email') {
      setEmail(valor)
      novoContato.email = email
    }
    else if(id === 'numero') {
      setNumero(valor)
      novoContato.numero = numero
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setNome('')
    setEmail('')
    setNumero('')
  }


  return (
    <div>
      <Novo>
        <h3>Adicionar Contato:</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="nome">Nome: </label>
          <input id="nome" type="text" onChange={({target}) => handleChange(target.value, target.id)} value={nome} />
          <label htmlFor="numero">Número: </label>
          <input id="numero" type="text" onChange={({target}) => handleChange(target.value, target.id)} value={numero} />
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" onChange={({target}) => handleChange(target.value, target.id)} value={email} />
          <button onClick={() => dispatch(adicionar(novoContato))}>+</button>
        </form>
      </Novo>
      {itens.map((contato) => 
        <Contato key={contato.nome} nome={contato.nome} numero={contato.numero} email={contato.email} estaEditando />
      )}
    </div>
  )
}

export default Contatos