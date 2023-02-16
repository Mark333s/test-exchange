import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import exchange from "./slices/exchangeSlice";

export const store = configureStore({
  reducer: { exchange },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
