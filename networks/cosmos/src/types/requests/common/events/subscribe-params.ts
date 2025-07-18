import { createCodec } from '../../../codec';
import { EncodedSubscribeParams } from './encoded-subscribe-params';

export interface SubscribeParams {
  readonly query?: string;
}

export const SubscribeParamsCodec = createCodec<EncodedSubscribeParams>({
  query: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(value);
    }
  }
});

export function encodeSubscribeParams(params: SubscribeParams): EncodedSubscribeParams {
  return SubscribeParamsCodec.create(params);
}