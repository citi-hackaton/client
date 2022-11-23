import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const generateQRCodeEndpoint = `${process.env.QRPP_ENDPOINT_URL}/generateQrCode`;

interface QRRPResponse {
  qrCode: string;
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await handlePOST(req, res);
  } else {
    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { amount: purchaseAmount } = req.body || {};
  if (!purchaseAmount) {
    return res.status(400).json({ message: "Missing amount" });
  }
  try {
    const purchaseDescription = "Example purchase description";
    // const { data } = await axios.post<QRRPResponse>(
    //   generateQRCodeEndpoint,
    //   {
    //     transactionData: {
    //       amount: purchaseAmount,
    //       description: purchaseDescription,
    //     },
    //   },
    //   {
    //     headers: {
    //       Authorization: `X-QRPP-Api-Key ${process.env.QRPP_API_KEY as string}`,
    //     },
    //   }
    // );
    const data = {
      transactionId: "53b99a32-637c-45a5-9564-cde6dc06179b",
    };
    globalThis.mockDb.push({ ...data, action: "pending" });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
