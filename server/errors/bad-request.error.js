export class BadRequestError extends Error {
  constructor({ message, errors }) {
    super(message);
    this.errors = errors;
  }
}
