import React, { createContext } from "react";
import initialState from "./CartInitialState";
import { CartActions, CartContextState } from "./types";

const CartContext = createContext<{
  state: CartContextState;
  dispatch: React.Dispatch<CartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default CartContext;
