import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ContatoC from "../../models/Contato";

const initialState = {
  itens: [
    new ContatoC("João Victor Dourado", "(74) 99806-1735", 'jovneiva@gmail.com'),
  ],
};

export type ContatoType = {
  nome: string,
  email: string,
  numero: string
}

// eslint-disable-next-line react-refresh/only-export-components
const ContatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contato) => contato.nome !== action.payload
      );
    },
    editar: (state, action: PayloadAction<string>) => {
      const index = state.itens.findIndex((item: ContatoType) => item.nome === action.payload)
      state.itens[index].nome = action.payload
      console.log(state.itens[index].nome)
    },
    adicionar: (state, action: PayloadAction<ContatoType>) => {
      state.itens = [...state.itens, action.payload]
    }
  },
});

export const { excluir, editar, adicionar } = ContatosSlice.actions;

export default ContatosSlice.reducer;
