import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useCallback, useContext } from "react";
import CartContext from "./CartContext";
import { CartActionTypes, ProductWithQuantity } from "./types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Product = ({ product }: ProductProps) => {
  const { dispatch } = useContext(CartContext);
  const { id, name, price, img, quantity } = product;

  const handleAddToCart = useCallback(() => {
    dispatch({ type: CartActionTypes.Add, payload: { id } });
  }, []);

  const handleDeleteFromCart = useCallback(() => {
    dispatch({ type: CartActionTypes.Delete, payload: { id } });
  }, []);

  return (
    <StyledCard>
      <Typography variant="h5">{name}</Typography>
      <StyledImage src={img} />
      <Typography variant="h6" fontWeight={700}>
        {price}$
      </Typography>
      <StyledProductActions>
        <StyledRemoveButton
          onClick={handleDeleteFromCart}
          color="primary"
          disabled={quantity <= 1}
        />
        <Typography variant="h6" fontWeight={700} fontSize="15px">
          {quantity}
        </Typography>
        <StyledAddButton onClick={handleAddToCart} color="primary" />
      </StyledProductActions>
    </StyledCard>
  );
};

interface ProductProps {
  product: ProductWithQuantity;
}

const StyledCard = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  padding: 10px;
`;

const StyledImage = styled("img")`
  width: 200px;
  height: 175px;
`;

const StyledProductActions = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledRemoveButton = styled(ChevronLeftIcon)<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledAddButton = styled(ChevronRightIcon)`
  cursor: pointer;
`;

export default Product;
