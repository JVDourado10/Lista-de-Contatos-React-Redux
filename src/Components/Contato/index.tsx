import { Linha, Atributo, Caracteristica } from "./styles"

const Contato = () => {

  return (
    <div style={{marginBottom: '1rem'}}>
      <Linha principal>
        <Atributo principal>Nome</Atributo>
        <Caracteristica principal>João Victor Dourado Neiva Silva</Caracteristica>
      </Linha>
      <Linha>
        <Atributo>Número</Atributo>
        <Caracteristica>(74) 99806-1735</Caracteristica>
      </Linha>
    </div>
  )
}

export default Contato