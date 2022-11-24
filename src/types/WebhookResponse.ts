interface WebhookResponse {
  transactionId: string;
  action: "PENDING" | "ACCEPTED" | "REJECTED" | "TIMED_OUT";
}

export default WebhookResponse;
