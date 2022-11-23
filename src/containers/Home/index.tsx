import PaymentDetails from "@/types/PaymentDetails";
import styled from "@emotion/styled";
import { useState } from "react";
import CartView from "./Cart/CartView";
import QRCodeSection from "./QRCodeSection";

const Home = () => {
  const [isCartView, setIsCartView] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  return (
    <StyledContainer>
      <StyledWrapper>
        {isCartView ? (
          <CartView setIsCartView={setIsCartView} setPaymentDetails={setPaymentDetails} />
        ) : (
          <QRCodeSection setIsCartView={setIsCartView} paymentDetails={paymentDetails} />
        )}
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
