# Auth related

## Auth

### Data

- algo: string; // algo to get pubkey and sign.
- hdPath: string; // hdpath used to gen private key for this.
- privateKey: HDKey

### Ops

- ctor(privateKey: uint8array | HDKey | Key, hdPath: string)

- fromMnemonic(mnemonic: string, hdPaths: string[], bip39Password?: string)

- getAlgo()

- getHdPath()

- getPrivateKey()

- getPublicKey(isCompressed?: boolean)

- getAddress(prefix: string)(the way to hash the pubkey?)

- sign(data: Uint8Array, isCompact: boolean) // data: Uint8Array(the way to hash the data?)
