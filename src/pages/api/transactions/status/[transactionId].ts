import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    await handleGET(req, res);
  } else {
    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const { transactionId } = req.query || {};
  if (!transactionId) {
    return res.status(400).json({ message: "Missing transactionId" });
  }
  if (Array.isArray(transactionId)) {
    return res.status(400).json({ message: "transactionId must be a string" });
  }
  console.log(globalThis.mockDb);
  try {
    return res.status(200).json(globalThis.mockDb.find((x) => x.transactionId === transactionId));
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
