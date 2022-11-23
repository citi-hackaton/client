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
  const { transactionId, action } = req.body || {};
  if (!transactionId || !action) {
    return res.status(400).json({ message: "Missing transactionId or action" });
  }
  try {
    globalThis.mockDb = globalThis.mockDb.map((x) => {
      if (x.transactionId === transactionId) {
        return { ...x, action };
      }
      return x;
    });
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
