/**
 * Interface representing a Hierarchical Deterministic (HD) path.
 */
export interface IHDPath {
  /**
   * The master path of the HD path (e.g., "m").
   */
  masterPath: string;
  /**
   * The purpose of the HD path (e.g., 44).
   */
  purpose: string;
  /**
   * The coin type of the HD path (e.g., 118).
   */
  coinType: string;
  /**
   * The account index of the HD path (e.g., 0).
   */
  accountIndex: number;
  /**
   * The change index of the HD path (e.g., 0).
   */
  change: number;
  /**
   * the address index of the HD path (e.g., 0).
   */
  addressIndex: number;

  /**
   * The string representation of the HD path (e.g., "m/44'/118'/0'/0/0").
   */
  toString(): string;
}

/**
 * HDPath represents a Hierarchical Deterministic (HD) path.
 */
export class HDPath implements IHDPath {
  constructor(
    coinType: string,
    accountIndex: number = 0,
    change: number = 0,
    addressIndex: number = 0,
    masterPath: string = HDPath.MASTER_PATH,
    purpose: string = HDPath.PURPOSE
  ) {
    this.masterPath = masterPath;
    this.purpose = purpose;
    this.coinType = coinType;
    this.accountIndex = accountIndex;
    this.change = change;
    this.addressIndex = addressIndex;
  }

  static readonly MASTER_PATH = 'm';
  static readonly PURPOSE = '44';

  // coin types constants
  static readonly COSMOS_COIN_TYPE = '118';
  static readonly ETH_COIN_TYPE = '60';

  // static derivation methods
  /**
   * Derives a HD path for Cosmos.
   */
  static cosmos(
    accountIndex: number = 0,
    change: number = 0,
    addressIndex: number = 0
  ): HDPath {
    return new HDPath(
      HDPath.COSMOS_COIN_TYPE,
      accountIndex,
      change,
      addressIndex
    );
  }

  /**
   * Derives a HD path for Ethereum.
   */
  static eth(
    accountIndex: number = 0,
    change: number = 0,
    addressIndex: number = 0
  ): HDPath {
    return new HDPath(HDPath.ETH_COIN_TYPE, accountIndex, change, addressIndex);
  }

  /**
   * The master path of the HD path (e.g., "m").
   */
  masterPath: string;
  /**
   * The purpose of the HD path (e.g., 44).
   */
  purpose: string;
  /**
   * The coin type of the HD path (e.g., 118).
   */
  coinType: string;
  /**
   * The account index of the HD path (e.g., 0).
   */
  accountIndex: number;
  /**
   * The change index of the HD path (e.g., 0).
   */
  change: number;
  /**
   * the address index of the HD path (e.g., 0).
   */
  addressIndex: number;

  /**
   * The string representation of the HD path (e.g., "m/44'/118'/0'/0/0").
   */
  toString(): string {
    return `${this.masterPath}/${this.purpose}'/${this.coinType}'/${this.accountIndex}'/${this.change}/${this.addressIndex}`;
  }

  /**
   * Derives from a HD path string.
   */
  static fromString(path: string): HDPath {
    const parts = path.split('/');
    if (parts.length !== 6) {
      throw new Error('Invalid HD path');
    }

    return new HDPath(
      parts[2].replace("'", ''),
      parseInt(parts[3].replace("'", ''), 10),
      parseInt(parts[4], 10),
      parseInt(parts[5], 10),
      parts[0],
      parts[1].replace("'", '')
    );
  }
}
