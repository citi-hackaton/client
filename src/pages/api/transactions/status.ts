import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await handlePOST(req, res);
  } else {
    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}

// webhook
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { transactionId, status } = req.body || {};
  if (!transactionId || !status) {
    return res.status(400).json({ message: "Missing transactionId or status" });
  }
  try {
    return res.status(200).json({ qrCode: "Hello World" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
