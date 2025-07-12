import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';

export class Tendermint37Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.TENDERMINT_37);
  }
}