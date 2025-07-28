// networks/ethereum/src/types/requests/balance-params.ts

import { BlockTag } from '../protocol';

/**
 * Parameters for getting account balance
 */
export interface BalanceParams {
  address: string;
  blockTag?: BlockTag;
}

/**
 * Parameters for getting contract code
 */
export interface CodeParams {
  address: string;
  blockTag?: BlockTag;
}

/**
 * Parameters for getting storage at a specific position
 */
export interface StorageAtParams {
  address: string;
  position: string;
  blockTag?: BlockTag;
}

/**
 * Encoded balance parameters for RPC calls
 */
export interface EncodedBalanceParams {
  address: string;
  blockTag: string;
}

export interface EncodedCodeParams {
  address: string;
  blockTag: string;
}

export interface EncodedStorageAtParams {
  address: string;
  position: string;
  blockTag: string;
}
