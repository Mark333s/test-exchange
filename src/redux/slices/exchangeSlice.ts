import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

type CurrencyItem = {
    name: string,
    buyPrice: string,
    sellPrice: string,
}

interface ExchangeSliceState {
    currencies: CurrencyItem[]
}


const initialState: ExchangeSliceState  = {
  currencies: [],
};


export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setCurrencies(state, action){
        state.currencies = action.payload;
    }
  },
});


export const { setCurrencies } = exchangeSlice.actions;

export default exchangeSlice.reducer;