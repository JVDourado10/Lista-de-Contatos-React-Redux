import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.corDeFundo};
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`

export default EstiloGlobal