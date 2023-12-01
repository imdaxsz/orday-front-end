/** @description Base error class */
export class BaseError extends Error {
  status?: number;
  code?: string;

  constructor(name: string, message: string, code?: string, status?: number) {
    super(message);
    this.name = name;
    this.code = code;
    this.status = status;
  }
}

/** @description 500번대 이상 서버 에러 */
export class ServerError extends BaseError {
  constructor(message: string, code?: string, status?: number) {
    super("ServerError", message, code, status);
  }
}

/** @description 400번대 서버 api 에러 */
export class ApiError extends BaseError {
  constructor(message: string, code: string, status?: number) {
    super("ApiError", message, code, status);
  }
}
