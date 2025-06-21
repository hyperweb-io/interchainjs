import Decimal from 'decimal.js';

/**
 * HttpEndpoint is a type that represents an HTTP endpoint.
 */
export interface HttpEndpoint {
  url: string;
  headers: Record<string, string>;
}

export function isHttpEndpoint(endpoint: unknown): endpoint is HttpEndpoint {

  return (
    typeof (endpoint as HttpEndpoint).url === 'string' &&
    typeof (endpoint as HttpEndpoint).headers === 'object'
  );
}

export interface Price {
  amount: Decimal;
  denom: string;
}

// TODO: UniSigner
