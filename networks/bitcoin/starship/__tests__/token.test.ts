import { SignerFromPrivateKey } from '../../src/signers/SignerFromPrivateKey';
import { BITCOIN_TESTNET } from '../../src/types/network';
import { AddressType } from '../../src/types/script';
import { RpcClientOptions } from '../../src/rpc/client';

describe('Bitcoin Tests', () => {
  const mockRpcOptions: RpcClientOptions = {
    url: 'http://127.0.0.1:18443',
    username: 'user',
    password: 'password'
  };
  
  const mockPrivateKey = 'cThjSL4HkRECuDxXgHzciPH6nGgdxjgqLbz1Cdi4HpVJoiLhRZGk';
  
  let signer: SignerFromPrivateKey;
  
  beforeEach(() => {
    jest.mock('axios', () => ({
      create: jest.fn().mockReturnValue({
        post: jest.fn().mockImplementation((url, payload) => {
          if (payload.method === 'listunspent') {
            return Promise.resolve({
              data: {
                result: [
                  {
                    txid: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
                    vout: 0,
                    amount: 1.0,
                    scriptPubKey: '76a914...',
                    address: 'mwj9YvDrJbfZwQB1yn6ZsQj4YQrZJPWEBW',
                    confirmations: 6
                  }
                ]
              }
            });
          } else if (payload.method === 'createrawtransaction') {
            return Promise.resolve({
              data: {
                result: '01000000...'
              }
            });
          } else if (payload.method === 'signrawtransactionwithkey') {
            return Promise.resolve({
              data: {
                result: {
                  hex: '01000000...',
                  complete: true
                }
              }
            });
          } else if (payload.method === 'sendrawtransaction') {
            return Promise.resolve({
              data: {
                result: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
              }
            });
          } else if (payload.method === 'getrawtransaction') {
            return Promise.resolve({
              data: {
                result: {
                  txid: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
                  confirmations: 6,
                  blockheight: 100
                }
              }
            });
          }
          return Promise.resolve({ data: {} });
        })
      })
    }));
    
    signer = new SignerFromPrivateKey(mockPrivateKey, mockRpcOptions, BITCOIN_TESTNET);
  });
  
  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it('should generate correct Bitcoin addresses', () => {
    const p2pkhAddress = signer.getAddress(AddressType.P2PKH);
    const p2wpkhAddress = signer.getAddress(AddressType.P2WPKH);
    const p2shAddress = signer.getAddress(AddressType.P2SH);
    
    expect(p2pkhAddress).toBeTruthy();
    expect(p2wpkhAddress).toBeTruthy();
    expect(p2shAddress).toBeTruthy();
    expect(p2pkhAddress).not.toEqual(p2wpkhAddress);
    expect(p2pkhAddress).not.toEqual(p2shAddress);
    expect(p2wpkhAddress).not.toEqual(p2shAddress);
  });
  
  it('should sign and verify messages', async () => {
    const message = 'Hello, Bitcoin!';
    const signature = await signer.signMessage(message);
    
    const address = signer.getAddress(AddressType.P2PKH);
    const isValid = signer.verifyMessage(message, signature, address);
    
    expect(isValid).toBe(true);
  });
  
  it('should simulate sending Bitcoin', async () => {
    const { txid, wait } = await signer.signAndBroadcast({
      outputs: [{
        address: 'mwj9YvDrJbfZwQB1yn6ZsQj4YQrZJPWEBW',
        value: 1000000 // 0.01 BTC in satoshis
      }]
    });
    
    expect(txid).toBeTruthy();
    
    const receipt = await wait();
    expect(receipt.status).toBe('confirmed');
  });
});
