import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: { authReducer },
  // TODO MAKE A POST POST SLICE JISE KE ANDER SARE POST PAHLE SE RAHE TAKI HAMEIN BAAR BAAR REQUEST NA MAANI PADE
});
export default store;
