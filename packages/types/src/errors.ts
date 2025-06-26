// packages/types/src/errors.ts
export enum ErrorCode {
  NETWORK_ERROR = "NETWORK_ERROR",
  TIMEOUT_ERROR = "TIMEOUT_ERROR",
  CONNECTION_ERROR = "CONNECTION_ERROR",
  PARSE_ERROR = "PARSE_ERROR",
  INVALID_RESPONSE = "INVALID_RESPONSE",
  SUBSCRIPTION_ERROR = "SUBSCRIPTION_ERROR",
  PROTOCOL_ERROR = "PROTOCOL_ERROR"
}

export enum ErrorCategory {
  NETWORK = "NETWORK",
  CLIENT = "CLIENT",
  SERVER = "SERVER",
  PROTOCOL = "PROTOCOL"
}

export abstract class QueryClientError extends Error {
  abstract readonly code: ErrorCode;
  abstract readonly category: ErrorCategory;
  
  constructor(
    message: string,
    public readonly cause?: Error
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class NetworkError extends QueryClientError {
  readonly code = ErrorCode.NETWORK_ERROR;
  readonly category = ErrorCategory.NETWORK;
}

export class TimeoutError extends QueryClientError {
  readonly code = ErrorCode.TIMEOUT_ERROR;
  readonly category = ErrorCategory.NETWORK;
}

export class ConnectionError extends QueryClientError {
  readonly code = ErrorCode.CONNECTION_ERROR;
  readonly category = ErrorCategory.NETWORK;
}

export class ParseError extends QueryClientError {
  readonly code = ErrorCode.PARSE_ERROR;
  readonly category = ErrorCategory.CLIENT;
}

export class InvalidResponseError extends QueryClientError {
  readonly code = ErrorCode.INVALID_RESPONSE;
  readonly category = ErrorCategory.SERVER;
}

export class SubscriptionError extends QueryClientError {
  readonly code = ErrorCode.SUBSCRIPTION_ERROR;
  readonly category = ErrorCategory.CLIENT;
}

export class ProtocolError extends QueryClientError {
  readonly code = ErrorCode.PROTOCOL_ERROR;
  readonly category = ErrorCategory.PROTOCOL;
}