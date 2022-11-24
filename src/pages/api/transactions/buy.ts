import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import WebhookResponse from "@/types/WebhookResponse";

declare global {
  var mockDb: WebhookResponse[];
}
globalThis.mockDb = [];

const generateQRCodeEndpoint = `${process.env.QRPP_ENDPOINT_URL}/qrPayments/initializeBusinessTransaction`;

interface QRRPResponse {
  transactionId: string;
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
    const { data } = await axios.post<QRRPResponse>(
      generateQRCodeEndpoint,
      {
        transactionData: {
          amount: purchaseAmount,
          description: purchaseDescription,
          isRejectable: true,
        },
      },
      {
        headers: {
          Authorization: `X-QRPP-Api-Key ${process.env.QRPP_SECRET_KEY as string}`,
        },
      }
    );
    globalThis.mockDb.push({ transactionId: data.transactionId, action: "PENDING" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
