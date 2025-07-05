import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';

export interface GenesisResponse {
  genesis: Genesis;
}

export interface Genesis {
  genesisTime: Date;
  chainId: string;
  initialHeight: number;
  consensusParams?: any;
  validators?: any[];
  appHash: string;
  appState?: any;
}

// Encoded types
export interface EncodedGenesisResponse {
  genesis: EncodedGenesis;
}

export interface EncodedGenesis {
  genesis_time: string;
  chain_id: string;
  initial_height?: string;
  consensus_params?: any;
  validators?: any[];
  app_hash: string;
  app_state?: any;
}

export const GenesisCodec: BaseCodec<Genesis, EncodedGenesis> = createCodec({
  encode: (genesis: Genesis): EncodedGenesis => ({
    genesis_time: genesis.genesisTime.toISOString(),
    chain_id: genesis.chainId,
    initial_height: genesis.initialHeight?.toString(),
    consensus_params: genesis.consensusParams,
    validators: genesis.validators,
    app_hash: genesis.appHash,
    app_state: genesis.appState
  }),
  decode: (encoded: EncodedGenesis): Genesis => ({
    genesisTime: new Date(encoded.genesis_time),
    chainId: encoded.chain_id || '',
    initialHeight: parseInt(encoded.initial_height || '1', 10),
    consensusParams: encoded.consensus_params,
    validators: encoded.validators,
    appHash: encoded.app_hash || '',
    appState: encoded.app_state
  })
});

export const GenesisResponseCodec: BaseCodec<GenesisResponse, EncodedGenesisResponse> = createCodec({
  encode: (response: GenesisResponse): EncodedGenesisResponse => ({
    genesis: GenesisCodec.encode(response.genesis)
  }),
  decode: (encoded: EncodedGenesisResponse): GenesisResponse => ({
    genesis: GenesisCodec.decode(encoded.genesis)
  })
});

// Factory function
export const createGenesisResponse = createConverter(GenesisResponseCodec);