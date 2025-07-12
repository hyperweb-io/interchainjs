import { BaseAdapter } from './base';
import { ProtocolVersion } from '../types/protocol';

export class Comet38Adapter extends BaseAdapter {
  constructor() {
    super(ProtocolVersion.COMET_38);
  }
}