# @interchainjs/types

<p align="center" style={{ marginBottom: "20px" }}>
  <img
    src="https://raw.githubusercontent.com/hyperweb-io/interchainjs/refs/heads/main/assets/logo.svg"
    width="280"
  />
</p>

<p
  align="center"
  width="100%"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
  }}
>
  <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img
      height="20"
      src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg"
    />
  </a>
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

Core TypeScript interfaces and types for the InterchainJS ecosystem.

## Usage

```sh
npm install @interchainjs/types
```

## Core Interfaces

### IUniSigner

The universal signer interface that provides consistent signing across all blockchain networks:

```typescript
interface IUniSigner<
  TTxResp = unknown,
  TAccount extends IAccount = IAccount,
  TSignArgs = unknown,
  TBroadcastOpts = unknown,
  TBroadcastResponse extends IBroadcastResult<TTxResp> = IBroadcastResult<TTxResp>,
  TQueryClient extends IQueryClient = IQueryClient,
> {
  queryClient: TQueryClient;
  getAccounts(): Promise<readonly TAccount[]>;
  signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes>;
  sign(args: TSignArgs): Promise<ISigned<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISigned<TBroadcastOpts, TBroadcastResponse>, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  signAndBroadcast(args: TSignArgs, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  broadcastArbitrary(data: Uint8Array, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}
```

### IWallet

Interface for managing cryptographic accounts and signing operations:

```typescript
interface IWallet {
  getAccounts(): Promise<IAccount[]>;
  getAccountByIndex(index: number): Promise<IAccount>;
  signByIndex(data: Uint8Array, index?: number): Promise<ICryptoBytes>;
}
```

### IAccount

Represents a single cryptographic account:

```typescript
interface IAccount {
  address: string;
  algo: string;
  getPublicKey(): IPublicKey;
}
```

### HDPath

Utility for generating hierarchical deterministic wallet paths:

```typescript
class HDPath {
  static cosmos(account?: number, change?: number, addressIndex?: number): HDPath;
  static ethereum(account?: number, change?: number, addressIndex?: number): HDPath;
  toString(): string;
}
```
