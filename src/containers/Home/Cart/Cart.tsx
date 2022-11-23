import styled from "@emotion/styled";
import { useContext } from "react";
import CartContext from "./CartContext";
import Product from "./Product";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <StyledContainer>
      <StyledWrapper>
        {state.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled("section")`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled("div")`
  display: flex;
  gap: 30px;
`;

export default Cart;
