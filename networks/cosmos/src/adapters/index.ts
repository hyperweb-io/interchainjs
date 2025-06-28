export { BaseAdapter, ResponseDecoder, IProtocolAdapter } from './base.js';
export { Tendermint34Adapter } from './tendermint34.js';
export { Tendermint37Adapter } from './tendermint37.js';
export { Comet38Adapter } from './comet38.js';

import { IProtocolAdapter } from './base.js';
import { ProtocolVersion, ProtocolInfo } from '../types/protocol.js';
import { Tendermint34Adapter } from './tendermint34.js';
import { Tendermint37Adapter } from './tendermint37.js';
import { Comet38Adapter } from './comet38.js';

export function createProtocolAdapter(version?: ProtocolVersion): IProtocolAdapter {
  switch (version) {
    case ProtocolVersion.TENDERMINT_34:
      return new Tendermint34Adapter();
    case ProtocolVersion.TENDERMINT_37:
      return new Tendermint37Adapter();
    case ProtocolVersion.COMET_38:
    case ProtocolVersion.COMET_100:
      return new Comet38Adapter();
    default:
      return new Comet38Adapter();
  }
}

export function getProtocolInfo(adapter: IProtocolAdapter): ProtocolInfo {
  return {
    version: adapter.getVersion(),
    supportedMethods: adapter.getSupportedMethods(),
    capabilities: adapter.getCapabilities()
  };
}