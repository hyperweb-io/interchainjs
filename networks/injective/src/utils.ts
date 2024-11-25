import {
  InjectiveDomain,
  SignerConfig,
} from '@interchainjs/types';
import { Auth } from '@interchainjs/types';
import { fromNumber, toPrefixedHex } from '@interchainjs/utils';

import { defaultPublicKeyConfig } from './defaults';
import { DomainOptions, InjectiveAccount } from './types';

export function getAccountFromAuth(
  auth: Auth,
  pubKeyConfig: SignerConfig['publicKey'] = defaultPublicKeyConfig
): InjectiveAccount {
  const publicKey = auth.getPublicKey(pubKeyConfig.isCompressed);
  const pubKeyHash = pubKeyConfig.hash(publicKey);
  return {
    algo: auth.algo,
    publicKey,
    cosmosAddress: pubKeyHash.toBech32('inj'),
    ethereumAddress: pubKeyHash.toPrefixedHex(),
  };
}

export function updateDomain(
  defaultOptions: Required<DomainOptions>,
  options?: DomainOptions
): InjectiveDomain {
  return {
    name: options?.name ?? defaultOptions.name,
    version: options?.version ?? defaultOptions.version,
    chainId: toPrefixedHex(
      fromNumber(options?.ethereumChainId ?? defaultOptions.ethereumChainId),
      true
    ),
    salt: options?.salt ?? defaultOptions.salt,
    verifyingContract:
      options?.verifyingContract ?? defaultOptions.verifyingContract,
  };
}
