import { CartContextState, ProductWithQuantity } from "./types";
import products from "./products";

const productsWithQuantity = products.map<ProductWithQuantity>((product) => ({
  ...product,
  quantity: 1,
}));

const initialState: CartContextState = {
  products: productsWithQuantity,
};

export default initialState;
