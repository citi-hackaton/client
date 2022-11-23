import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import Cart from "./Cart/Cart";
import CartContext from "./Cart/CartContext";

const Home = () => {
  const { state } = useContext(CartContext);
  const totalPrice = state.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <StyledContainer>
      <StyledWrapper>
        <Typography variant="h2">Client's cart</Typography>
        <Typography variant="h4">Total: {totalPrice}$</Typography>
        <Cart />
        <Button variant="contained" color="primary">
          Buy products
        </Button>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled("main")`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  background-color: #fff;
  padding: 20px;
`;

export default Home;
