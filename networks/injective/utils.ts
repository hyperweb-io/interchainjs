import {
  Eip712Types,
  InjectiveDomain,
  IWalletAccount,
  SignerConfig,
} from "@interchainjs/types";
import { Auth } from "@interchainjs/types";
import { defaultSignerConfig } from "./defaults";
import { DomainOptions } from "./types";
import { objectKeysToEip712Types } from "./eth-utils/map";
import { fromNumber, toPrefixedHex } from "@interchainjs/utils";

export function getAccountFromAuth(
  auth: Auth,
  config: SignerConfig = defaultSignerConfig.Cosmos
): IWalletAccount.InjectiveAccount {
  const publicKey = auth.getPublicKey(config.publicKey.isCompressed);
  const pubKeyHash = config.publicKey.hash(publicKey);
  return {
    algo: auth.algo,
    publicKey,
    cosmosAddress: pubKeyHash.toBech32("inj"),
    ethereumAddress: pubKeyHash.toPrefixedHex(),
  };
}

export function toEthTypes<AminoType>(message: AminoType): Eip712Types {
  const map = objectKeysToEip712Types({ object: message });
  return Object.fromEntries(map.entries());
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
