// packages/types/src/rpc.ts
export interface IRpcClient {
  call<TRequest, TResponse>(method: string, params?: TRequest): Promise<TResponse>;
  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  readonly endpoint: string;
}

export interface JsonRpcRequest {
  jsonrpc: string;
  id: string;
  method: string;
  params: any;
}

export interface JsonRpcResponse {
  jsonrpc: string;
  id: string;
  result?: any;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
}

// Utility function for creating JSON-RPC requests
export function createJsonRpcRequest(
  method: string, 
  params?: unknown, 
  id?: string
): JsonRpcRequest {
  return {
    jsonrpc: '2.0',
    id: id || Math.random().toString(36).substring(7),
    method,
    params: params || {}
  };
}