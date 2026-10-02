// packages/utils/src/clients/http-client.ts
import { IRpcClient, createJsonRpcRequest, NetworkError, TimeoutError, ParseError } from '@interchainjs/types';

export interface HttpEndpoint {
  url: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface HttpRpcClientOptions {
  timeout?: number;
  headers?: Record<string, string>;
  /** Retries after HTTP 429, waiting for `Retry-After` (or exponential backoff). Defaults to 3. */
  maxRetries?: number;
}

const DEFAULT_MAX_RETRIES = 3;
const BASE_RETRY_DELAY_MS = 500;
const MAX_RETRY_DELAY_MS = 30000;

function retryDelayMs(response: Response, attempt: number): number {
  const retryAfter = response.headers.get('retry-after');
  if (retryAfter !== null) {
    const seconds = Number(retryAfter);
    const delay = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(retryAfter) - Date.now();
    if (Number.isFinite(delay)) return Math.min(Math.max(delay, 0), MAX_RETRY_DELAY_MS);
  }
  return Math.min(BASE_RETRY_DELAY_MS * 2 ** attempt, MAX_RETRY_DELAY_MS);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class HttpRpcClient implements IRpcClient {
  private connected = false;

  constructor(
    private endpointConfig: string | HttpEndpoint,
    private options: HttpRpcClientOptions = {}
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
    const maxRetries = this.options.maxRetries ?? DEFAULT_MAX_RETRIES;

    try {
      let response = await this.post(request);
      for (let attempt = 0; response.status === 429 && attempt < maxRetries; attempt++) {
        await response.body?.cancel();
        await sleep(retryDelayMs(response, attempt));
        response = await this.post(request);
      }

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

  private async post(request: unknown): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.getTimeout());
    try {
      return await fetch(this.getUrl(), {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(request),
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeoutId);
    }
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
