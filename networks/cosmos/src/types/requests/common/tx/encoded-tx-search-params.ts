export interface EncodedTxSearchParams {
  readonly query: string;
  readonly prove?: boolean;
  readonly page?: string;
  readonly per_page?: string;
  readonly order_by?: string;
}