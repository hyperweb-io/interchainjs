import { fromBase64, fromHex } from '@interchainjs/encoding';
import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';
import {
  BlockResponse,
  BlockResultsResponse,
  createBlockResultsResponse
} from '../types/responses/common/block';




// No response imports needed since ABCI methods are now in base class

export class Comet38Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.COMET_38);
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

























}