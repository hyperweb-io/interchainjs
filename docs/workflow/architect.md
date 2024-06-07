# Auth related

## Auth

### Analysis

#### Data

- algo: string; // algo to get pubkey and sign.
- hdPath: string; // hdpath used to gen private key for this.
- privateKey: HDKey

#### Ops

- ctor(privateKey: uint8array | HDKey | Key, hdPath: string)

- fromMnemonic(mnemonic: string, hdPaths: string[], bip39Password?: string)

- getAlgo()

- getHdPath()

- getPrivateKey()

// note: pubkey needs to be hashed sometimes
- getPublicKey(isCompressed?: boolean)

// note: address needs to be hashed sometimes
- getAddress(prefix: string)

// note: the data msg needs hash sometimes.
// note: and the sig needs compress sometimes.
- sign(data: Uint8Array): Signature // data: Uint8Array

- verify(data: Uint8Array, signature: Signature): Boolean // data: Uint8Array