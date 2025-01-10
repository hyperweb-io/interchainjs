import { keccak256 } from 'ethereum-cryptography/keccak';
import * as rlp from 'rlp';
import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';

export const computeContractAddress = (fromAddress: string, nonce: number): string => {
  const fromBytes = hexToBytes(fromAddress.toLowerCase());
  const rlpEncoded = rlp.encode([fromBytes, nonce]);
  const hash = keccak256(rlpEncoded);
  const contractAddress = '0x' + bytesToHex(hash.slice(-20));
  return contractAddress;
};