interface WebhookResponse {
  transactionId: string;
  action: "pending" | "accepted" | "rejected" | "timed_out";
}

export default WebhookResponse;
