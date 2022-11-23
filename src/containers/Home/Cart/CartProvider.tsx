import { useReducer } from "react";
import CartContext from "./CartContext";
import initialState from "./CartInitialState";
import cartReducer from "./CartReducer";

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export default CartProvider;
