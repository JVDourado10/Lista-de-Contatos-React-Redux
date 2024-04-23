import svg from "../../assets/favicon.svg";
import { Titulo, HeaderContainer } from "./styles";


const Header = () => {
  return (
    <HeaderContainer>
      <img src={svg} />
      <Titulo>Lista de Contatos</Titulo>
    </HeaderContainer>
  );
};

export default Header;
