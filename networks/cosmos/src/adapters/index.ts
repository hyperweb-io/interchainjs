export { BaseAdapter, ResponseDecoder, IProtocolAdapter } from './base';
export { Tendermint34Adapter } from './tendermint34';
export { Tendermint37Adapter } from './tendermint37';
export { Comet38Adapter } from './comet38';

import { IProtocolAdapter } from './base';
import { ProtocolVersion, ProtocolInfo } from '../types/protocol';
import { Tendermint34Adapter } from './tendermint34';
import { Tendermint37Adapter } from './tendermint37';
import { Comet38Adapter } from './comet38';

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