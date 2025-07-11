import { fromBase64, fromHex } from '@interchainjs/encoding';
import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';
import {
  BlockResponse,
  BlockResultsResponse,
  createBlockResultsResponse
} from '../types/responses/common/block';
// Type definitions for removed imports

type GenesisResponse = any;
type UnconfirmedTxsResponse = any;

// Dummy creator functions


const createGenesisResponse = (data: any): any => data;
const createUnconfirmedTxsResponse = (data: any): any => data;
import {
  TxResponse,
  createTxResponse
} from '../types/responses/common/tx';
import {
  TxSearchResponse,
  createTxSearchResponse
} from '../types/responses/common/tx-search';




export class Tendermint37Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.TENDERMINT_37);
  }













  decodeBroadcastTx(response: any): any {
    const data = response.result || response;
    return {
      code: data.code || 0,
      data: data.data ? fromBase64(data.data) : undefined,
      log: data.log || '',
      codespace: data.codespace || '',
      hash: fromHex(data.hash || ''),
      height: data.height ? this.apiToNumber(data.height) : undefined
    };
  }









  decodeGenesis(response: any): GenesisResponse {
    return createGenesisResponse(response);
  }







  decodeTx(response: any): TxResponse {
    const data = response.result || response;
    return createTxResponse(data);
  }

  decodeTxSearch(response: any): TxSearchResponse {
    const data = response.result || response;
    return createTxSearchResponse(data);
  }

  decodeUnconfirmedTxs(response: any): UnconfirmedTxsResponse {
    const data = response.result || response;
    return createUnconfirmedTxsResponse(data);
  }








}