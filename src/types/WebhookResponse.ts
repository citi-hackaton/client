interface WebhookResponse {
  transactionId: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "TIMED_OUT";
}

export default WebhookResponse;
