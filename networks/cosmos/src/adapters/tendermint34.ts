import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';

export class Tendermint34Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.TENDERMINT_34);
  }
}