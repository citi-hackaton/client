import { Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useContext } from "react";
import Cart from "./Cart";
import CartContext from "./CartContext";
import axios from "axios";

const CartView = ({ setIsCartView, setQrCode }: CartViewProps) => {
  const { state } = useContext(CartContext);
  const totalPrice = state.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleBuyProducts = () => {
    axios
      .post("/api/buy", {
        products: state.products,
      })
      .then(({ data }) => {
        console.log(data);
        setIsCartView(false);
        setQrCode(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Typography variant="h2">Client's cart</Typography>
      <Typography variant="h4">Total: {totalPrice}$</Typography>
      <Cart />
      <Button variant="contained" color="primary" onClick={handleBuyProducts}>
        Buy products
      </Button>
    </>
  );
};

interface CartViewProps {
  setIsCartView: Dispatch<SetStateAction<boolean>>;
  setQrCode: Dispatch<SetStateAction<string>>;
}

export default CartView;
