import { EthereumAddressValidator } from '@interchainjs/utils';

const validator = new EthereumAddressValidator();

export function isValidEthereumAddress(address: string): boolean {
  return validator.isValid(address);
}

export function toChecksumAddress(address: string): string {
  return validator.normalize(address);
}
