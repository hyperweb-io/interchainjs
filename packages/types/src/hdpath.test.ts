import { HDPath } from './hdpath';  // Adjust the import path as necessary

describe('HDPath', () => {
  test('should create a Cosmos HD path and convert to string', () => {
    const cosmosPath = HDPath.cosmos(0, 0, 0);
    expect(cosmosPath.toString()).toBe("m/44'/118'/0'/0/0");
  });

  test('should create an Ethereum HD path and convert to string', () => {
    const ethPath = HDPath.eth(1, 0, 5);
    expect(ethPath.toString()).toBe("m/44'/60'/1'/0/5");
  });

  test('should parse a string back to an HDPath object', () => {
    const pathString = "m/44'/118'/0'/0/0";
    const parsedPath = HDPath.fromString(pathString);
    expect(parsedPath.toString()).toBe(pathString);
    expect(parsedPath.masterPath).toBe('m');
    expect(parsedPath.purpose).toBe('44');
    expect(parsedPath.coinType).toBe('118');
    expect(parsedPath.accountIndex).toBe(0);
    expect(parsedPath.change).toBe(0);
    expect(parsedPath.addressIndex).toBe(0);
  });

  test('should throw an error for an invalid HD path string', () => {
    expect(() => HDPath.fromString("m/44'/118'/0'/0")).toThrow('Invalid HD path');
  });

  test('should correctly handle different account, change, and address indices', () => {
    const path = new HDPath('118', 2, 1, 10);
    expect(path.toString()).toBe("m/44'/118'/2'/1/10");
    expect(path.accountIndex).toBe(2);
    expect(path.change).toBe(1);
    expect(path.addressIndex).toBe(10);
  });

  test('should create an HD path with default values', () => {
    const defaultPath = new HDPath('118');
    expect(defaultPath.toString()).toBe("m/44'/118'/0'/0/0");
    expect(defaultPath.accountIndex).toBe(0);
    expect(defaultPath.change).toBe(0);
    expect(defaultPath.addressIndex).toBe(0);
  });
});
