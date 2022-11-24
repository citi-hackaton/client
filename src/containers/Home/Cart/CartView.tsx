import { Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useContext } from "react";
import Cart from "./Cart";
import CartContext from "./CartContext";
import axios from "axios";
import PaymentDetails from "@/types/PaymentDetails";
import styled from "@emotion/styled";

const CartView = ({ setIsCartView, setPaymentDetails }: CartViewProps) => {
  const { state } = useContext(CartContext);
  const totalPrice = state.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const handleBuyProducts = () => {
    axios
      .post("api/transactions/buy", {
        amount: totalPrice,
      })
      .then(({ data }) => {
        setIsCartView(false);
        setPaymentDetails({ ...data, status: "Waiting for payment" });
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
      <StyledButton variant="contained" color="primary" onClick={handleBuyProducts}>
        Buy products
      </StyledButton>
    </>
  );
};

const StyledButton = styled(Button)`
  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

interface CartViewProps {
  setIsCartView: Dispatch<SetStateAction<boolean>>;
  setPaymentDetails: Dispatch<SetStateAction<PaymentDetails | null>>;
}

export default CartView;
