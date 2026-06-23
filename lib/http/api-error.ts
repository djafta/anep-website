export class ApiError extends Error {
  status: number;
  body: any;

  constructor(message: string, status: number, body?: unknown) {
    super(message);
    this.status = status;
    this.body = body;

    console.error("API Error:", message, body);
  }
}
