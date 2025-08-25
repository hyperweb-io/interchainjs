export enum AddressType {
  P2PKH = 'p2pkh',     // Legacy addresses (1...)
  P2SH = 'p2sh',       // Script hash addresses (3...)
  P2WPKH = 'p2wpkh',   // Native SegWit addresses (bc1q...)
  P2WSH = 'p2wsh',     // Native SegWit script hash (bc1q...)
  P2TR = 'p2tr'        // Taproot addresses (bc1p...)
}

export interface Script {
  type: AddressType;
  data: Uint8Array;
}

export interface RedeemScript {
  output: Uint8Array;
  input?: Uint8Array;
  witness?: Uint8Array[];
}
