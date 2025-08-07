/**
 * EncodedBlockSearchParams type
 */

export interface EncodedBlockSearchParams {
  readonly query: string;
  readonly page?: string;
  readonly per_page?: string;
  readonly order_by?: string;
}