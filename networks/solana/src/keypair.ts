import {
  AddrDerivation,
  IAccount,
  IAddress,
  IAddressConfig,
  ICryptoBytes,
  IHDPath,
  IPrivateKey,
  IPrivateKeyConfig,
  IPublicKey,
  IPublicKeyConfig,
  IWallet,
  IWalletConfig,
  HDPath,
} from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import * as nacl from 'tweetnacl';
import * as bs58 from 'bs58';
import { PublicKey } from './types/solana-types';

const DEFAULT_SOLANA_DERIVATION = "m/44'/501'/0'/0/0";

const DEFAULT_SOLANA_DERIVATIONS: AddrDerivation[] = [
  {
    hdPath: DEFAULT_SOLANA_DERIVATION,
    prefix: '',
  },
];

const DEFAULT_PRIVATE_KEY_CONFIG: IPrivateKeyConfig = {
  algo: 'ed25519',
};

const DEFAULT_PUBLIC_KEY_CONFIG: IPublicKeyConfig = {
  compressed: false,
};

class SolanaAddress implements IAddress {
  constructor(
    public readonly value: string,
    public readonly config: IAddressConfig,
    public readonly prefix?: string,
  ) {}

  toBytes(): ICryptoBytes {
    return BaseCryptoBytes.from(bs58.decode(this.value));
  }

  isValid(): boolean {
    try {
      const bytes = bs58.decode(this.value);
      return bytes.length === 32;
    } catch {
      return false;
    }
  }
}

class SolanaWalletPublicKey implements IPublicKey {
  public readonly value: ICryptoBytes;
  public readonly algo: string;
  public readonly compressed: boolean;
  private readonly base58: string;

  constructor(publicKeyBytes: Uint8Array, compressed: boolean = false) {
    const cloned = new Uint8Array(publicKeyBytes);
    this.value = BaseCryptoBytes.from(cloned);
    this.algo = 'ed25519';
    this.compressed = compressed;
    this.base58 = new PublicKey(cloned).toBase58();
  }

  toAddress(config: IAddressConfig, prefix?: string): IAddress {
    return new SolanaAddress(this.base58, config, prefix);
  }

  async verify(data: Uint8Array, signature: ICryptoBytes): Promise<boolean> {
    return nacl.sign.detached.verify(data, signature.value, this.value.value);
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    return this.value.toBase64();
  }
}

class SolanaPrivateKey implements IPrivateKey {
  public readonly value: ICryptoBytes;
  public readonly config: IPrivateKeyConfig;
  public readonly hdPath?: IHDPath;
  private readonly secretKey: Uint8Array;

  constructor(secretKey: Uint8Array, config: IPrivateKeyConfig, hdPath?: IHDPath) {
    if (secretKey.length !== 64) {
      throw new Error('Secret key must be 64 bytes');
    }

    this.secretKey = new Uint8Array(secretKey);
    this.value = BaseCryptoBytes.from(this.secretKey);
    this.config = { ...config, algo: config.algo ?? 'ed25519' };
    this.hdPath = hdPath;
  }

  toPublicKey(config?: IPublicKeyConfig): IPublicKey {
    const keypair = nacl.sign.keyPair.fromSecretKey(this.secretKey);
    const compressed = config?.compressed ?? false;
    return new SolanaWalletPublicKey(keypair.publicKey, compressed);
  }

  async sign(data: Uint8Array): Promise<ICryptoBytes> {
    const signature = nacl.sign.detached(data, this.secretKey);
    return BaseCryptoBytes.from(signature);
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    return this.value.toBase64();
  }
}

class SolanaWalletAccount implements IAccount {
  public readonly address?: string;
  public readonly hdPath?: IHDPath;
  public readonly algo: string;

  constructor(
    private readonly privateKey: IPrivateKey,
    private readonly walletConfig: IWalletConfig,
    address?: string,
    hdPath?: IHDPath,
  ) {
    this.address = address;
    this.hdPath = hdPath;
    this.algo = typeof privateKey.config.algo === 'string'
      ? privateKey.config.algo
      : privateKey.config.algo.name;
  }

  getPublicKey(isCompressed?: boolean): IPublicKey {
    const compressed = isCompressed ?? this.walletConfig.publicKeyConfig?.compressed ?? false;
    const config: IPublicKeyConfig = { compressed };
    return this.privateKey.toPublicKey(config);
  }
}

function normalizeConfig(config?: Partial<IWalletConfig>): IWalletConfig {
  const derivations = config?.derivations?.length
    ? config.derivations
    : DEFAULT_SOLANA_DERIVATIONS;

  return {
    privateKeyConfig: config?.privateKeyConfig
      ? { ...config.privateKeyConfig }
      : { ...DEFAULT_PRIVATE_KEY_CONFIG },
    publicKeyConfig: config?.publicKeyConfig
      ? { ...config.publicKeyConfig }
      : { ...DEFAULT_PUBLIC_KEY_CONFIG },
    addressConfig: config?.addressConfig ? { ...config.addressConfig } : undefined,
    derivations: derivations.map((d: AddrDerivation) => ({ ...d })),
  };
}

export class Keypair implements IWallet {
  private readonly _keypair: nacl.SignKeyPair;
  private readonly _config: IWalletConfig;
  private readonly _privateKeys: IPrivateKey[];
  private readonly _accounts: SolanaWalletAccount[];
  private readonly _publicKey: PublicKey;

  constructor(keypair?: nacl.SignKeyPair, config?: Partial<IWalletConfig>) {
    this._keypair = keypair ?? nacl.sign.keyPair();
    this._config = normalizeConfig(config);

    const derivation = this._config.derivations[0]?.hdPath
      ? HDPath.fromString(this._config.derivations[0].hdPath)
      : undefined;

    const privateKeyConfig =
      this._config.privateKeyConfig ?? DEFAULT_PRIVATE_KEY_CONFIG;

    const solanaPrivateKey = new SolanaPrivateKey(
      this._keypair.secretKey,
      privateKeyConfig,
      derivation,
    );

    this._privateKeys = [solanaPrivateKey];

    const address = new PublicKey(this._keypair.publicKey).toBase58();
    this._accounts = [
      new SolanaWalletAccount(
        solanaPrivateKey,
        this._config,
        address,
        derivation,
      ),
    ];

    this._publicKey = new PublicKey(this._keypair.publicKey);
  }

  static generate(config?: Partial<IWalletConfig>): Keypair {
    return new Keypair(undefined, config);
  }

  static fromSecretKey(secretKey: Uint8Array, config?: Partial<IWalletConfig>): Keypair {
    if (secretKey.length !== 64) {
      throw new Error('Secret key must be 64 bytes');
    }
    const keypair = nacl.sign.keyPair.fromSecretKey(secretKey);
    return new Keypair(keypair, config);
  }

  static fromSeed(seed: Uint8Array, config?: Partial<IWalletConfig>): Keypair {
    if (seed.length !== 32) {
      throw new Error('Seed must be 32 bytes');
    }
    const keypair = nacl.sign.keyPair.fromSeed(seed);
    return new Keypair(keypair, config);
  }

  static fromBase58(base58PrivateKey: string, config?: Partial<IWalletConfig>): Keypair {
    const decoded = bs58.decode(base58PrivateKey);
    return Keypair.fromSecretKey(decoded, config);
  }

  get publicKey(): PublicKey {
    return new PublicKey(this._publicKey.toBuffer());
  }

  get secretKey(): Uint8Array {
    return new Uint8Array(this._keypair.secretKey);
  }

  get privateKeys(): IPrivateKey[] {
    return [...this._privateKeys];
  }

  get config(): IWalletConfig {
    return {
      ...this._config,
      derivations: this._config.derivations.map((d: AddrDerivation) => ({ ...d })),
      privateKeyConfig: this._config.privateKeyConfig
        ? { ...this._config.privateKeyConfig }
        : undefined,
      publicKeyConfig: this._config.publicKeyConfig
        ? { ...this._config.publicKeyConfig }
        : undefined,
      addressConfig: this._config.addressConfig
        ? { ...this._config.addressConfig }
        : undefined,
    };
  }

  async getAccounts(): Promise<readonly IAccount[]> {
    return [...this._accounts];
  }

  async getAccountByIndex(index: number): Promise<IAccount> {
    if (index !== 0) {
      throw new Error(`Invalid key index: ${index}`);
    }
    return this._accounts[0];
  }

  async signByIndex(data: Uint8Array, index: number = 0): Promise<ICryptoBytes> {
    if (index !== 0) {
      throw new Error(`Invalid key index: ${index}`);
    }
    return this._privateKeys[0].sign(data);
  }

  sign(message: Uint8Array): Uint8Array {
    return nacl.sign.detached(message, this._keypair.secretKey);
  }

  verify(message: Uint8Array, signature: Uint8Array | ICryptoBytes): boolean {
    const sigBytes = signature instanceof Uint8Array ? signature : signature.value;
    return nacl.sign.detached.verify(message, sigBytes, this._keypair.publicKey);
  }
}
