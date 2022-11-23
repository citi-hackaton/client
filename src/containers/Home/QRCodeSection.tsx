import useIntervalAsync from "@/hooks/useIntervalAsync";
import PaymentDetails from "@/types/PaymentDetails";
import WebhookResponse from "@/types/WebhookResponse";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import QRCode from "react-qr-code";

const QRCodeSection = ({
  paymentDetails,
  setPaymentDetails,
  setIsCartView,
}: QRCodeSectionProps) => {
  const handleGoBackButton = () => {
    setIsCartView(true);
  };

  const checkPaymentStatus = useCallback(async () => {
    const { data } = await axios.get<WebhookResponse>(
      `api/transactions/status/${paymentDetails?.transactionId}`
    );
    setPaymentDetails({ ...data, status: data.action });
    console.log(data);
  }, []);

  useIntervalAsync(checkPaymentStatus, 1000);
  if (!paymentDetails) return null;

  return (
    <StyledContainer>
      <QRCode value={paymentDetails.transactionId} />
      <StyledSectionSplit>
        <Typography variant="h5" fontWeight={700}>
          Scan the QR code to pay
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Your transaction status: {paymentDetails.status}
        </Typography>
        <Typography variant="h5" fontStyle="italic">
          JUST DEV, QR MESSAGE: {JSON.stringify(paymentDetails.transactionId)}
        </Typography>
      </StyledSectionSplit>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "30px" }}
        onClick={handleGoBackButton}>
        Go back to cart
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const StyledSectionSplit = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
`;

interface QRCodeSectionProps {
  paymentDetails: PaymentDetails | null;
  setIsCartView: Dispatch<SetStateAction<boolean>>;
  setPaymentDetails: Dispatch<SetStateAction<PaymentDetails | null>>;
}

export default QRCodeSection;
