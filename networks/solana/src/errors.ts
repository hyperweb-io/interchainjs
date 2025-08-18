/**
 * Solana Error Hierarchy
 *
 * Structured error classes for consistent error handling across the Solana implementation.
 */

/**
 * Base error class for all Solana-related errors
 */
export class SolanaError extends Error {
  public readonly code: string;
  public readonly cause?: Error;

  constructor(message: string, cause?: Error, code?: string) {
    super(message);
    this.name = this.constructor.name;
    this.cause = cause;
    this.code = code || 'SOLANA_ERROR';

    // Maintain proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Network-related errors (connection, RPC failures, etc.)
 */
export class SolanaNetworkError extends SolanaError {
  constructor(message: string, cause?: Error) {
    super(message, cause, 'SOLANA_NETWORK_ERROR');
  }
}

/**
 * Timeout errors for requests that exceed time limits
 */
export class SolanaTimeoutError extends SolanaNetworkError {
  public readonly timeout: number;

  constructor(message: string, timeout?: number, cause?: Error) {
    super(message, cause);
    Object.defineProperty(this, 'code', { value: 'SOLANA_TIMEOUT_ERROR', writable: false });
    this.timeout = timeout || 0;
  }
}

/**
 * RPC-specific errors (invalid responses, RPC failures, etc.)
 */
export class SolanaRpcError extends SolanaNetworkError {
  public readonly rpcCode?: number;
  public readonly rpcMessage?: string;

  constructor(message: string, rpcCode?: number, rpcMessage?: string, cause?: Error) {
    super(message, cause);
    Object.defineProperty(this, 'code', { value: 'SOLANA_RPC_ERROR', writable: false });
    this.rpcCode = rpcCode;
    this.rpcMessage = rpcMessage;
  }
}

/**
 * Transaction-related errors (signing, broadcasting, confirmation, etc.)
 */
export class SolanaTransactionError extends SolanaError {
  public readonly transactionSignature?: string;

  constructor(message: string, transactionSignature?: string, cause?: Error) {
    super(message, cause, 'SOLANA_TRANSACTION_ERROR');
    this.transactionSignature = transactionSignature;
  }
}

/**
 * Signing-related errors (invalid keys, signature failures, etc.)
 */
export class SolanaSigningError extends SolanaError {
  constructor(message: string, cause?: Error) {
    super(message, cause, 'SOLANA_SIGNING_ERROR');
  }
}

/**
 * Wallet-related errors (connection failures, user rejection, etc.)
 */
export class SolanaWalletError extends SolanaError {
  public readonly walletType?: string;

  constructor(message: string, walletType?: string, cause?: Error) {
    super(message, cause, 'SOLANA_WALLET_ERROR');
    this.walletType = walletType;
  }
}

/**
 * Configuration and validation errors
 */
export class SolanaConfigError extends SolanaError {
  constructor(message: string, cause?: Error) {
    super(message, cause, 'SOLANA_CONFIG_ERROR');
  }
}

/**
 * Protocol adapter errors (encoding/decoding, unsupported operations, etc.)
 */
export class SolanaProtocolError extends SolanaError {
  public readonly protocolVersion?: string;

  constructor(message: string, protocolVersion?: string, cause?: Error) {
    super(message, cause, 'SOLANA_PROTOCOL_ERROR');
    this.protocolVersion = protocolVersion;
  }
}

/**
 * Account-related errors (insufficient balance, invalid account, etc.)
 */
export class SolanaAccountError extends SolanaError {
  public readonly accountAddress?: string;

  constructor(message: string, accountAddress?: string, cause?: Error) {
    super(message, cause, 'SOLANA_ACCOUNT_ERROR');
    this.accountAddress = accountAddress;
  }
}

/**
 * Token-related errors (invalid token account, insufficient token balance, etc.)
 */
export class SolanaTokenError extends SolanaError {
  public readonly tokenMint?: string;
  public readonly tokenAccount?: string;

  constructor(message: string, tokenMint?: string, tokenAccount?: string, cause?: Error) {
    super(message, cause, 'SOLANA_TOKEN_ERROR');
    this.tokenMint = tokenMint;
    this.tokenAccount = tokenAccount;
  }
}

/**
 * Utility function to map generic errors to Solana-specific errors
 */
export function mapToSolanaError(error: unknown, context?: string): SolanaError {
  if (error instanceof SolanaError) {
    return error;
  }

  if (error instanceof Error) {
    // Map common error patterns
    if (error.name === 'AbortError' || error.message.includes('timeout')) {
      return new SolanaTimeoutError(`Request timeout${context ? ` in ${context}` : ''}`, undefined, error);
    }

    if (error.message.includes('fetch') || error.message.includes('network')) {
      return new SolanaNetworkError(`Network error${context ? ` in ${context}` : ''}: ${error.message}`, error);
    }

    if (error.message.includes('RPC') || error.message.includes('JSON-RPC')) {
      return new SolanaRpcError(`RPC error${context ? ` in ${context}` : ''}: ${error.message}`, undefined, undefined, error);
    }

    if (error.message.includes('signature') || error.message.includes('sign')) {
      return new SolanaSigningError(`Signing error${context ? ` in ${context}` : ''}: ${error.message}`, error);
    }

    if (error.message.includes('wallet') || error.message.includes('Phantom')) {
      return new SolanaWalletError(`Wallet error${context ? ` in ${context}` : ''}: ${error.message}`, undefined, error);
    }

    // Generic error mapping
    return new SolanaError(`${context ? `${context}: ` : ''}${error.message}`, error);
  }

  // Handle non-Error objects
  const message = typeof error === 'string' ? error : 'Unknown error occurred';
  return new SolanaError(`${context ? `${context}: ` : ''}${message}`);
}

/**
 * Type guard to check if an error is a Solana error
 */
export function isSolanaError(error: unknown): error is SolanaError {
  return error instanceof SolanaError;
}

/**
 * Type guard to check if an error is a network-related error
 */
export function isSolanaNetworkError(error: unknown): error is SolanaNetworkError {
  return error instanceof SolanaNetworkError;
}

/**
 * Type guard to check if an error is a transaction-related error
 */
export function isSolanaTransactionError(error: unknown): error is SolanaTransactionError {
  return error instanceof SolanaTransactionError;
}

/**
 * Type guard to check if an error is a signing-related error
 */
export function isSolanaSigningError(error: unknown): error is SolanaSigningError {
  return error instanceof SolanaSigningError;
}

/**
 * Type guard to check if an error is a wallet-related error
 */
export function isSolanaWalletError(error: unknown): error is SolanaWalletError {
  return error instanceof SolanaWalletError;
}
