import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./reducers/contador";


const store = configureStore({
  reducer: {
    contador: contadorReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store