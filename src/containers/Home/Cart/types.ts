import Product from "@/types/Product";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum CartActionTypes {
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

export type CartPayload = {
  [CartActionTypes.Add]: {
    id: number;
  };
  [CartActionTypes.Delete]: {
    id: number;
  };
};

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];

export interface ProductWithQuantity extends Product {
  quantity: number;
}

export interface CartContextState {
  products: ProductWithQuantity[];
}
