import { HdPathType } from "@interchainjs/types";

/**
 * path: m/purpose'/coin_type'/account'/change/address_index
 */
export const defaultHdPaths: HdPathType[] = [
  { network: "cosmos", algo: "secp256k1", path: "m/44'/118'/0'/0/0" },
  { network: "injective", algo: "secp256k1", path: "m/44'/60'/0'/0/0" },
  { network: "ethereum", algo: "secp256k1", path: "m/44'/60'/0'/0/0" },
];
