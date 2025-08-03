// packages/utils/src/clients/http-client.ts
import { IRpcClient, createJsonRpcRequest, NetworkError, TimeoutError, ParseError } from '@interchainjs/types';

export interface HttpEndpoint {
  url: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class HttpRpcClient implements IRpcClient {
  private connected = false;

  constructor(
    private endpointConfig: string | HttpEndpoint,
    private options: { timeout?: number; headers?: Record<string, string> } = {}
  ) {}

  get endpoint(): string {
    return typeof this.endpointConfig === 'string' ? this.endpointConfig : this.endpointConfig.url;
  }

  async connect(): Promise<void> {
    // For HTTP, connection is established per request
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected;
  }

  async call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse> {
    const request = createJsonRpcRequest(method, params);

    try {
      const controller = new AbortController();
      const timeout = this.getTimeout();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(this.getUrl(), {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(request),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`);
      }

      const jsonResponse = await response.json();

      if (jsonResponse.error) {
        throw new NetworkError(`RPC Error: ${jsonResponse.error.message}`, jsonResponse.error);
      }

      return jsonResponse.result;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new TimeoutError(`Request timed out after ${this.getTimeout()}ms`);
      }
      if (error instanceof NetworkError) {
        throw error;
      }
      if (error.name === 'SyntaxError') {
        throw new ParseError(`Failed to parse JSON response: ${error.message}`, error);
      }
      throw new NetworkError(`Request failed: ${error.message}`, error);
    }
  }

  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    throw new Error('HTTP client does not support streaming operations');
  }

  private getUrl(): string {
    return typeof this.endpointConfig === 'string' ? this.endpointConfig : this.endpointConfig.url;
  }

  private getHeaders(): Record<string, string> {
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const configHeaders = typeof this.endpointConfig === 'object' ? this.endpointConfig.headers || {} : {};
    const optionHeaders = this.options.headers || {};

    return { ...defaultHeaders, ...configHeaders, ...optionHeaders };
  }

  private getTimeout(): number {
    if (this.options.timeout) return this.options.timeout;
    if (typeof this.endpointConfig === 'object' && this.endpointConfig.timeout) {
      return this.endpointConfig.timeout;
    }
    return 30000; // 30 seconds default
  }
}
