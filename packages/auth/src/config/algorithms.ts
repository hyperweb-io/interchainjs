import { IAlgo } from '@interchainjs/types';
import { Secp256k1, Ed25519, Secp256k1Signature } from '@interchainjs/crypto';
import elliptic from 'elliptic';
import sodium from 'libsodium-wrappers-sumo';

const secp256k1 = new elliptic.ec('secp256k1');

// Secp256k1 algorithm implementation
export const Secp256k1Algo: IAlgo = {
  name: 'secp256k1',
  makeKeypair: (privateKey: Uint8Array) => {
    // Synchronous version of Secp256k1.makeKeypair
    const keyPair = secp256k1.keyFromPrivate(privateKey);
    const pubkey = new Uint8Array(keyPair.getPublic(false, 'array')); // uncompressed
    return { privkey: privateKey, pubkey };
  },
  compress: (pubkey: Uint8Array) => {
    return Secp256k1.compressPubkey(pubkey);
  },
  uncompress: (pubkey: Uint8Array) => {
    return Secp256k1.uncompressPubkey(pubkey);
  },
  sign: async (message: Uint8Array, privateKey: Uint8Array) => {
    const signature = await Secp256k1.createSignature(message, privateKey);
    return signature.toFixedLength();
  },
  verify: async (signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array) => {
    const sig = Secp256k1Signature.fromFixedLength(signature);
    return Secp256k1.verifySignature(sig, message, pubkey);
  }
};

// Ed25519 algorithm implementation
export const Ed25519Algo: IAlgo = {
  name: 'ed25519',
  makeKeypair: (privateKey: Uint8Array) => {
    // Synchronous version using libsodium's algorithm
    // This is a simplified version - for production use, consider using the async version
    if (!sodium.ready) {
      throw new Error('libsodium not ready - use async initialization');
    }
    const keypair = sodium.crypto_sign_seed_keypair(privateKey);
    return { privkey: privateKey, pubkey: keypair.publicKey };
  },
  compress: (pubkey: Uint8Array) => {
    return pubkey; // Ed25519 keys are always compressed
  },
  uncompress: (pubkey: Uint8Array) => {
    return pubkey; // Ed25519 keys are always compressed
  },
  sign: async (message: Uint8Array, privateKey: Uint8Array) => {
    const keypair = await Ed25519.makeKeypair(privateKey);
    return Ed25519.createSignature(message, keypair);
  },
  verify: async (signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array) => {
    return Ed25519.verifySignature(signature, message, pubkey);
  }
};

// Preset algorithms mapping
export const PRESET_ALGOS: Record<string, IAlgo> = {
  'secp256k1': Secp256k1Algo,
  'ed25519': Ed25519Algo,
};

// Internal helper to resolve algorithm
export function resolveAlgo(algo: IAlgo | string): IAlgo {
  if (typeof algo === 'string') {
    if (!PRESET_ALGOS[algo]) {
      throw new Error(`Unknown algorithm: ${algo}`);
    }
    return PRESET_ALGOS[algo];
  }
  return algo;
}