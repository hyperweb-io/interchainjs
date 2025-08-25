## Customize InterchainJS Cosmos Signers

This tutorial shows how to customize InterchainJS Cosmos signers to work with external wallet providers and network-specific requirements. We focus on practical, production-ready approaches that extend the existing architecture (signers + offline signers + configuration) instead of re-implementing signers from scratch.

What you’ll learn:
- Create or adapt OfflineSigners (from browser wallets like Keplr/Leap or external providers like MetaMask)
- Customize DirectSigner and AminoSigner with network-specific options (pubkeys, hash/signature format, gas/fees, prefixes)
- Understand the end-to-end flow from messages to signed transactions and broadcast
- Apply helper utilities and message encoders to streamline custom workflows

---

### 1) Quick Takeaway: The Standard Customization Pattern

Use the standard `DirectSigner` or `AminoSigner` from `@interchainjs/cosmos`, fed by an offline signer and a network-specific configuration. This customization pattern is portable across Cosmos-based networks.

Generic example:

```ts
// Wallet -> OfflineSigner -> DirectSigner + config
const offlineSigner = /* from extension or your wrapper */
const signerConfig = {
  queryClient,
  chainId: 'your-chain-id',
  addressPrefix: 'your-prefix',
  // plus any network-specific options (see sections below)
};
const directSigner = new DirectSigner(offlineSigner, signerConfig);
```

---

### 2) Customizing Offline Signers

There are two main ways to customize or obtain an offline signer:

- From browser wallet extensions (recommended for Keplr/Leap)
- By wrapping an external provider (e.g., MetaMask) in an `OfflineAminoSigner` or `OfflineDirectSigner`

A) Customize with Browser Extensions (Keplr)

```ts
import { DirectSigner, createCosmosQueryClient } from '@interchainjs/cosmos';

await window.keplr.enable(chainId);
const offlineSigner = window.keplr.getOfflineSigner(chainId);

const queryClient = await createCosmosQueryClient(rpcEndpoint);
const signer = new DirectSigner(offlineSigner, {
  chainId,
  queryClient,
  addressPrefix: 'cosmos'
});
```

B) Customize a MetaMask Offline Signer (pattern)

MetaMask exposes `personal_sign` (EIP-191). You can wrap it to satisfy `OfflineDirectSigner`/`OfflineAminoSigner` interfaces. Below is a minimal pattern you can adapt (you’ll need to implement address conversion and pubkey retrieval for your network):

```ts
import type { OfflineAminoSigner, OfflineDirectSigner, AccountData } from '@interchainjs/cosmos';
import type { StdSignDoc } from '@interchainjs/types';
import { SignDoc, CosmosCryptoSecp256k1PubKey as PubKey } from '@interchainjs/cosmos-types';
import { recoverPublicKey } from '@ethersproject/signing-key';
import { keccak256 } from '@ethersproject/keccak256';

export class MetamaskOfflineSigner implements OfflineDirectSigner, OfflineAminoSigner {
  constructor(private ethereum: any, private bech32Prefix: string) {}

  /**
   * Return AccountData[] with populated pubkey and getPublicKey()
   * - pubkey: compressed secp256k1 public key bytes (33 bytes)
   * - algo: 'secp256k1'
   * - getPublicKey(): EncodedMessage for default Cosmos pubkey type
   */
  async getAccounts(): Promise<readonly AccountData[]> {
    const [ethAddress] = await this.ethereum.request({ method: 'eth_requestAccounts' });

    // Derive the compressed secp256k1 pubkey from MetaMask by signing a known message
    const compressed = await this.deriveCompressedPubKey(ethAddress);

    const bech32 = this.ethToBech32(ethAddress);

    return [{
      address: bech32,
      pubkey: compressed, // used directly by InterchainJS (SignerInfoPlugin)
      algo: 'secp256k1',
      // Optional: return more detailed pubkey type if needed.
      getPublicKey: () => {
        return ({
          typeUrl: '/cosmos.crypto.secp256k1.PubKey',
          value: PubKey.encode(PubKey.fromPartial({ key: compressed })).finish()
        }) as any
      }
    }];
  }

  async signDirect(signerAddress: string, signDoc: SignDoc) {
    const bytes = SignDoc.encode(signDoc).finish();
    const signatureB64 = await this.signWithPersonalSign(signerAddress, bytes);
    return { signed: signDoc, signature: { signature: signatureB64, pub_key: await this.pubkeyFor(signerAddress) } };
  }

  async signAmino(signerAddress: string, signDoc: StdSignDoc) {
    const bytes = new TextEncoder().encode(JSON.stringify({
      account_number: signDoc.account_number,
      chain_id: signDoc.chain_id,
      fee: signDoc.fee,
      memo: signDoc.memo,
      msgs: signDoc.msgs,
      sequence: signDoc.sequence,
    }));
    const signatureB64 = await this.signWithPersonalSign(signerAddress, bytes);
    return { signed: signDoc, signature: { signature: signatureB64, pub_key: await this.pubkeyFor(signerAddress) } };
  }

  // EIP-191 personal_sign wrapper -> base64 signature for Cosmos
  private async signWithPersonalSign(cosmosAddr: string, data: Uint8Array): Promise<string> {
    const ethAddr = this.bech32ToEth(cosmosAddr);
    const hexMsg = '0x' + Buffer.from(data).toString('hex');
    const sigHex = await this.ethereum.request({ method: 'personal_sign', params: [hexMsg, ethAddr] });
    return Buffer.from(sigHex.slice(2), 'hex').toString('base64');
  }

  /**
   * Recover secp256k1 public key via EIP-191 signing and compress it (33 bytes)
   * Implementation details:
   * - Sign a fixed challenge message with personal_sign
   * - Compute EIP-191 hash of the message
   * - Recover uncompressed pubkey (0x04 + 64 bytes) and compress to 33 bytes
   */
  private async deriveCompressedPubKey(ethAddress: string): Promise<Uint8Array> {
    const challenge = new TextEncoder().encode('interchainjs-pubkey-identity');
    const hexMsg = '0x' + Buffer.from(challenge).toString('hex');

    // Ask MetaMask to sign the message with EIP-191
    const sigHex = await this.ethereum.request({ method: 'personal_sign', params: [hexMsg, ethAddress] });

    // Create the EIP-191 hash of the original message (same as MetaMask does internally)
    const eip191Hash = this.createEip191Hash(challenge);

    // Recover the uncompressed public key from signature
    const uncompressed = recoverPublicKey(eip191Hash, sigHex);

    return this.compressUncompressedSecp256k1(uncompressed);
  }

  private createEip191Hash(message: Uint8Array): string {
    const prefix = '\x19Ethereum Signed Message:\n';
    const prefixed = Buffer.concat([
      Buffer.from(prefix),
      Buffer.from(message.length.toString()),
      Buffer.from(message)
    ]);
    return keccak256(prefixed);
  }

  /**
   * Convert 0x04 + 64-byte uncompressed key to 33-byte compressed form
   */
  private compressUncompressedSecp256k1(uncompressedHex: string): Uint8Array {
    const hex = uncompressedHex.startsWith('0x') ? uncompressedHex.slice(2) : uncompressedHex;
    const buf = Buffer.from(hex, 'hex');
    // Expect 65 bytes: 0x04 || X(32) || Y(32)
    if (buf.length !== 65 || buf[0] !== 0x04) {
      throw new Error('Unexpected public key format from recovery');
    }
    const x = buf.slice(1, 33);
    const y = buf.slice(33, 65);
    const prefix = (y[y.length - 1] % 2 === 0) ? 0x02 : 0x03;
    return new Uint8Array([prefix, ...x]);
  }

  // Address conversion placeholders - implement for your network
  private ethToBech32(eth: string): string { throw new Error('implement'); }
  private bech32ToEth(addr: string): string { throw new Error('implement'); }

  /**
   * Return StdSignature.pub_key structure for Amino/Direct responses
   * type: tendermint/PubKeySecp256k1, value: base64(compressedPubKey)
   */
  private async pubkeyFor(cosmosAddr: string) {
    const ethAddr = this.bech32ToEth(cosmosAddr);
    const compressed = await this.deriveCompressedPubKey(ethAddr);
    return {
      type: 'tendermint/PubKeySecp256k1',
      value: Buffer.from(compressed).toString('base64')
    };
  }
}
```

Tip: If your app can use a wallet abstraction that implements `IWallet`, you can also leverage `signArbitrary()` paths built into the Cosmos workflows.

---

### 3) Customize Signer Configuration (Network-Specific)

Use configuration to enforce network behavior. Common options you may need:

- Custom pubkey encoding (network-specific typeUrl)
- Message hashing (e.g., keccak256 for eth-style workflows)
- Signature post-processing format (e.g., compact)
- Address prefix and gas/fee defaults

Generic encoder example:

```ts
import { DirectSigner, createCosmosQueryClient, type CosmosSignerConfig } from '@interchainjs/cosmos';
import { CosmosCryptoSecp256k1PubKey as Secp256k1PubKey, SignDoc } from '@interchainjs/cosmos-types';

const encodeCustomPublicKey = (pubkey: Uint8Array) => ({
  typeUrl: '/your.network.crypto.v1beta1.ethsecp256k1.PubKey',
  value: Secp256k1PubKey.encode(Secp256k1PubKey.fromPartial({ key: pubkey })).finish(),
});

async function createSigner(offlineSigner: any, rpc: string, chainId: string, prefix: string) {
  const queryClient = await createCosmosQueryClient(rpc);

  const config: CosmosSignerConfig = {
    queryClient,
    chainId,
    addressPrefix: prefix,
    // Gas/fee defaults
    multiplier: 1.5,
    gasPrice: 'average',
    // Message/signature behavior
    message: { hash: 'keccak256' },
    signature: { format: 'compact' },
    // Custom pubkey type (adjust typeUrl for your network)
    encodePublicKey: encodeCustomPublicKey,
  };

  return new DirectSigner(offlineSigner, config);
}
```

Derivation paths (examples):
- Standard Cosmos chains: `m/44'/118'/0'/0/0`
- Eth-style Cosmos networks: `m/44'/60'/0'/0/0`

If your network uses eth-style derivation, ensure your wallet/SDK supports that path. Replace with your own wallet factory if needed.

---

### 4) Real-world Customization Flow (Generalized)

The proven pattern in production networks follows this flow:

- Wallet derives keys and produces an OfflineSigner (from an extension or a wrapped provider)
- `DirectSigner` or `AminoSigner` from `@interchainjs/cosmos` is used with a network-specific config
- Message encoders are registered with `addEncoders(toEncoders(...))` when using helper utilities
- Helper functions like `send` or `transfer` can build, sign, and broadcast

Flow overview:

1) Wallet -> OfflineSigner (Keplr/Leap, custom HD wallet, or MetaMask wrapper)
2) OfflineSigner + Config -> DirectSigner/AminoSigner
3) Encoders -> Encode messages into protobuf/amino
4) Cosmos workflow builds sign doc -> signs via OfflineSigner
5) TxRaw assembled and broadcast -> `result.wait()` to confirm

---

### 5) Practical Customization Examples

A) Keplr + DirectSigner (Cosmos)

```ts
import { DirectSigner, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { MsgSend } from 'interchainjs';
import { send } from 'interchainjs';

await window.keplr.enable(chainId);
const offlineSigner = window.keplr.getOfflineSigner(chainId);

const queryClient = await createCosmosQueryClient(rpc);
const signer = new DirectSigner(offlineSigner, { queryClient, chainId, addressPrefix: 'cosmos' });
signer.addEncoders(toEncoders(MsgSend));

const [{ address }] = await signer.getAccounts();
const fee = { amount: [{ denom: 'uatom', amount: '5000' }], gas: '200000' };
const msg = { fromAddress: address, toAddress: dest, amount: [{ denom: 'uatom', amount: '1000' }] };

const res = await send(signer, address, msg, fee, 'demo');
await res.wait();
console.log(res.transactionHash);
```

B) MetaMask wrapper + DirectSigner (generic)

```ts
const mmOfflineSigner = new MetamaskOfflineSigner(window.ethereum, 'your-prefix');
const signer = await createSigner(mmOfflineSigner, yourRpcEndpoint, yourChainId, 'your-prefix');

// Register message encoders as needed
// signer.addEncoders(toEncoders(MsgSend, MsgTransfer));

const [{ address }] = await signer.getAccounts();
const fee = { amount: [{ denom: 'your-token', amount: '100000' }], gas: '550000' };

const res = await signer.signAndBroadcast({
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: { fromAddress: address, toAddress: dest, amount: [{ denom: 'your-token', amount: '1000000' }] }
  }],
  fee,
  memo: 'metamask eip-191'
});
console.log(res.transactionHash);
```

C) Amino mode (any network)

```ts
import { AminoSigner } from '@interchainjs/cosmos';
const aminoSigner = new AminoSigner(offlineSigner, { queryClient, chainId, addressPrefix: 'cosmos' });
const result = await aminoSigner.signAndBroadcast({ messages, fee, memo });
```

---

### 6) Customization Patterns (Best Practices)

- Browser wallets (Keplr, Leap):
  - Get `OfflineSigner` directly from the extension
  - Use standard `DirectSigner`/`AminoSigner`
  - Minimal custom code

- Custom wallets (MetaMask EIP-191):
  - Wrap with `OfflineDirectSigner`/`OfflineAminoSigner`
  - Convert `personal_sign` hex signatures to base64 for Cosmos
  - Implement address conversion and pubkey encoding via config (or recovery)

- Network-specific configuration:
  - Pubkey type via `encodePublicKey` (e.g., `/your.network.crypto.v1beta1.ethsecp256k1.PubKey`)
  - `message.hash` (e.g., `keccak256` for eth-like networks)
  - `signature.format` (e.g., `compact`)
  - Gas/fee defaults (multiplier, gasPrice)
  - Prefix (e.g., `your-prefix`, `cosmos`)

- Error handling and validation:
  - Handle chainId mismatches and user rejection
  - Validate signature length/format (MetaMask returns 65-byte sig in hex)
  - Retry broadcast with proper modes (sync/commit)

---

### 7) Customization Checklist

- [ ] Can obtain an `OfflineSigner` (Keplr or wrapped MetaMask)
- [ ] Config has correct `queryClient`, `chainId`, `addressPrefix`
- [ ] Custom `encodePublicKey` set for networks that need it
- [ ] Message encoders registered if using helper methods
- [ ] Fees and gas configured reasonably for your chain
- [ ] Can `await result.wait()` after broadcast

---

### 8) Summary

- Customize using the standard Cosmos signers (DirectSigner/AminoSigner)
- Create or adapt offline signers from existing wallets or external providers
- Push network-specific behavior into configuration (pubkey type, hash, signature format)
- Follow the signer + offline signer + config pattern for a clean, maintainable setup tailored to your network
