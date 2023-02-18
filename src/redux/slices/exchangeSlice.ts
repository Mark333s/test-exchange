import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ExchangeSliceState {
  conversion_rates: any;
  conversion_ratesEur: any;
  status: Status;
}

const initialState: ExchangeSliceState = {
  conversion_rates: {},
  conversion_ratesEur: {},
  status: Status.LOADING,
};

export const fetchCurrencies = createAsyncThunk(
  "exchange/fetchCurrencies",
  async () => {
    const { data } = await axios.get(
      "https://v6.exchangerate-api.com/v6/2857749dfecf23aa3c2a4261/latest/USD"
    );
    return data.conversion_rates;
  }
);

export const fetchCurrencieEUR = createAsyncThunk(
  "exchange/fetchCurrencieEUR",
  async () => {
    const { data } = await axios.get(
      "https://v6.exchangerate-api.com/v6/2857749dfecf23aa3c2a4261/latest/EUR"
    );
    return data.conversion_rates;
  }
);

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.conversion_rates = action.payload;
    },
    setCurrencieEUR(state, action) {
      state.conversion_ratesEur = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state, action) => {
      state.status = Status.LOADING;
      state.conversion_rates = {};
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.conversion_rates = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCurrencies.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.conversion_rates = {};
    });
    builder.addCase(fetchCurrencieEUR.pending, (state, action) => {
      state.status = Status.LOADING;
      state.conversion_ratesEur = {};
    });
    builder.addCase(fetchCurrencieEUR.fulfilled, (state, action) => {
      state.conversion_ratesEur = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCurrencieEUR.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.conversion_ratesEur = {};
    });
  },
});

export const selectCurrencie = (state: RootState) => state.exchange;

export const { setCurrencies, setCurrencieEUR } = exchangeSlice.actions;

export default exchangeSlice.reducer;
