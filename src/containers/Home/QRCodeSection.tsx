import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import QRCode from "react-qr-code";

const QRCodeSection = ({ qrCode, setIsCartView }: QRCodeSectionProps) => {
  const handleGoBackButton = () => {
    setIsCartView(true);
  };

  return (
    <StyledContainer>
      <QRCode value={qrCode} />
      <StyledSectionSplit>
        <Typography variant="h5" fontWeight={700}>
          Scan the QR code to pay
        </Typography>
        <Typography variant="h5" fontStyle="italic">
          JUST DEV, QR MESSAGE: {JSON.stringify(qrCode)}
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
  qrCode: string;
  setIsCartView: Dispatch<SetStateAction<boolean>>;
}

export default QRCodeSection;
