import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
  name: "contador",
  initialState: {
    total: 0
  },
  reducers: {
    incrementar: (state) => {
      state.total++
    },
    diminuir: (state) => {
      state.total--
    }
  }
})

export const { incrementar, diminuir } = contadorSlice.actions

export default contadorSlice.reducer