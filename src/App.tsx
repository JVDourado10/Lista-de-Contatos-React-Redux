import EstiloGlobal, { Container } from "./styles";
import Header from "./containers/Header";
import Contatos from "./containers/Contatos";

const App = () => {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Contatos />
      </Container>
    </>
  );
};

export default App;
