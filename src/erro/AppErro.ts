export class AppErro extends Error {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}