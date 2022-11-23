import { CartContextState, CartActions, CartActionTypes } from "./types";

const cartReducer = (state: CartContextState, action: CartActions) => {
  switch (action.type) {
    case CartActionTypes.Add:
      const productToAdd = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product
        ),
      };
    case CartActionTypes.Delete:
      const productToRemove = action.payload;
      const foundProduct = state.products.find((product) => product.id === productToRemove.id);
      if (!foundProduct) {
        return state;
      }
      if (foundProduct.quantity <= 1) {
        return state;
      }
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === productToRemove.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
