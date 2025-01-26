import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../redux/cocktailApi";

// const person = {
//   name: 'value'
// };

// const p = {
//   [person.name]: 'hello'
// };



export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    cocktailApi.middleware,

  ])



});