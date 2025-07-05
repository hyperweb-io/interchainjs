import { Tendermint34Adapter } from '../tendermint34';
import { Tendermint37Adapter } from '../tendermint37';
import { fromHex, fromBase64 } from '@interchainjs/encoding';
import { Event, EventAttribute } from '../../types/responses';
import { BroadcastTxSyncResponse } from '../../types/responses/common/broadcast-tx-sync';

describe('Tendermint Broadcast Methods', () => {
  describe('Tendermint34Adapter', () => {
    let adapter: Tendermint34Adapter;

    beforeEach(() => {
      adapter = new Tendermint34Adapter();
    });

    describe('decodeBroadcastTxAsync', () => {
      it('should decode async response (same as sync in Tendermint 0.34)', () => {
        const mockResponse = {
          result: {
            code: 0,
            data: 'dGVzdCBkYXRh', // base64 for "test data"
            log: 'success',
            info: 'tx info',
            gas_wanted: '100000',
            gas_used: '50000',
            events: [] as Event[],
            codespace: '',
            hash: 'ABCDEF1234567890'
          }
        };

        // In Tendermint 0.34, async returns sync response
        const result = adapter.decodeBroadcastTxAsync(mockResponse) as BroadcastTxSyncResponse;

        expect(result.code).toBe(0);
        expect(result.data).toEqual(fromBase64('dGVzdCBkYXRh'));
        expect(result.log).toBe('success');
        expect(result.gasWanted).toBe(100000n);
        expect(result.gasUsed).toBe(50000n);
        expect(result.hash).toEqual(fromHex('ABCDEF1234567890'));
      });
    });

    describe('decodeBroadcastTxSync', () => {
      it('should decode sync response', () => {
        const testEvent: Event = { 
          type: 'test', 
          attributes: [] as EventAttribute[] 
        };
        
        const mockResponse = {
          result: {
            code: 1,
            data: 'ZXJyb3IgZGF0YQ==', // base64 for "error data"
            log: 'failed',
            info: 'error info',
            gas_wanted: '200000',
            gas_used: '150000',
            events: [testEvent],
            codespace: 'sdk',
            hash: '1234567890ABCDEF'
          }
        };

        const result = adapter.decodeBroadcastTxSync(mockResponse);

        expect(result.code).toBe(1);
        expect(result.data).toEqual(fromBase64('ZXJyb3IgZGF0YQ=='));
        expect(result.log).toBe('failed');
        expect(result.info).toBe('error info');
        expect(result.gasWanted).toBe(200000n);
        expect(result.gasUsed).toBe(150000n);
        expect(result.events).toEqual([testEvent]);
        expect(result.codespace).toBe('sdk');
        expect(result.hash).toEqual(fromHex('1234567890ABCDEF'));
      });
    });

    describe('decodeBroadcastTxCommit', () => {
      it('should decode commit response with deliver_tx', () => {
        const transferEvent: Event = { 
          type: 'transfer', 
          attributes: [] as EventAttribute[] 
        };
        
        const mockResponse = {
          result: {
            height: '12345',
            hash: 'FEDCBA0987654321',
            check_tx: {
              code: 0,
              data: '',
              log: 'check passed',
              info: '',
              gas_wanted: '100000',
              gas_used: '50000',
              events: [] as Event[],
              codespace: ''
            },
            deliver_tx: {
              code: 0,
              data: 'c3VjY2Vzcw==', // base64 for "success"
              log: 'tx delivered',
              info: 'delivered info',
              gas_wanted: '100000',
              gas_used: '60000',
              events: [transferEvent],
              codespace: ''
            }
          }
        };

        const result = adapter.decodeBroadcastTxCommit(mockResponse);

        expect(result.height).toBe(12345);
        expect(result.hash).toEqual(fromHex('FEDCBA0987654321'));
        
        expect(result.checkTx.code).toBe(0);
        expect(result.checkTx.gasWanted).toBe(100000n);
        expect(result.checkTx.gasUsed).toBe(50000n);
        
        expect(result.deliverTx).toBeDefined();
        expect(result.deliverTx!.code).toBe(0);
        expect(result.deliverTx!.data).toEqual(fromBase64('c3VjY2Vzcw=='));
        expect(result.deliverTx!.log).toBe('tx delivered');
        expect(result.deliverTx!.gasWanted).toBe(100000n);
        expect(result.deliverTx!.gasUsed).toBe(60000n);
        expect(result.deliverTx!.events).toEqual([transferEvent]);
      });

      it('should handle commit response without deliver_tx', () => {
        const mockResponse = {
          result: {
            height: '12345',
            hash: 'FEDCBA0987654321',
            check_tx: {
              code: 1,
              data: '',
              log: 'check failed',
              info: '',
              gas_wanted: '100000',
              gas_used: '50000',
              events: [] as Event[],
              codespace: 'sdk'
            }
          }
        };

        const result = adapter.decodeBroadcastTxCommit(mockResponse);

        expect(result.height).toBe(12345);
        expect(result.checkTx.code).toBe(1);
        expect(result.deliverTx).toBeUndefined();
      });
    });
  });

  describe('Tendermint37Adapter', () => {
    let adapter: Tendermint37Adapter;

    beforeEach(() => {
      adapter = new Tendermint37Adapter();
    });

    describe('decodeBroadcastTxAsync', () => {
      it('should decode async response (same as sync in Tendermint 0.37)', () => {
        const mockResponse = {
          result: {
            code: 0,
            data: 'dGVzdCBkYXRh', // base64 for "test data"
            log: 'success',
            info: 'tx info',
            gas_wanted: '100000',
            gas_used: '50000',
            events: [] as Event[],
            codespace: '',
            hash: 'ABCDEF1234567890'
          }
        };

        // In Tendermint 0.37, async returns sync response
        const result = adapter.decodeBroadcastTxAsync(mockResponse) as BroadcastTxSyncResponse;

        expect(result.code).toBe(0);
        expect(result.data).toEqual(fromBase64('dGVzdCBkYXRh'));
        expect(result.log).toBe('success');
        expect(result.gasWanted).toBe(100000n);
        expect(result.gasUsed).toBe(50000n);
        expect(result.hash).toEqual(fromHex('ABCDEF1234567890'));
      });
    });

    describe('decodeBroadcastTxSync', () => {
      it('should decode sync response', () => {
        const testEvent: Event = { 
          type: 'test', 
          attributes: [] as EventAttribute[] 
        };
        
        const mockResponse = {
          result: {
            code: 1,
            data: 'ZXJyb3IgZGF0YQ==', // base64 for "error data"
            log: 'failed',
            info: 'error info',
            gas_wanted: '200000',
            gas_used: '150000',
            events: [testEvent],
            codespace: 'sdk',
            hash: '1234567890ABCDEF'
          }
        };

        const result = adapter.decodeBroadcastTxSync(mockResponse);

        expect(result.code).toBe(1);
        expect(result.data).toEqual(fromBase64('ZXJyb3IgZGF0YQ=='));
        expect(result.log).toBe('failed');
        expect(result.info).toBe('error info');
        expect(result.gasWanted).toBe(200000n);
        expect(result.gasUsed).toBe(150000n);
        expect(result.events).toEqual([testEvent]);
        expect(result.codespace).toBe('sdk');
        expect(result.hash).toEqual(fromHex('1234567890ABCDEF'));
      });
    });

    describe('decodeBroadcastTxCommit', () => {
      it('should decode commit response with deliver_tx', () => {
        const transferEvent: Event = { 
          type: 'transfer', 
          attributes: [] as EventAttribute[] 
        };
        
        const mockResponse = {
          result: {
            height: '12345',
            hash: 'FEDCBA0987654321',
            check_tx: {
              code: 0,
              data: '',
              log: 'check passed',
              info: '',
              gas_wanted: '100000',
              gas_used: '50000',
              events: [] as Event[],
              codespace: ''
            },
            deliver_tx: {
              code: 0,
              data: 'c3VjY2Vzcw==', // base64 for "success"
              log: 'tx delivered',
              info: 'delivered info',
              gas_wanted: '100000',
              gas_used: '60000',
              events: [transferEvent],
              codespace: ''
            }
          }
        };

        const result = adapter.decodeBroadcastTxCommit(mockResponse);

        expect(result.height).toBe(12345);
        expect(result.hash).toEqual(fromHex('FEDCBA0987654321'));
        
        expect(result.checkTx.code).toBe(0);
        expect(result.checkTx.gasWanted).toBe(100000n);
        expect(result.checkTx.gasUsed).toBe(50000n);
        
        expect(result.deliverTx).toBeDefined();
        expect(result.deliverTx!.code).toBe(0);
        expect(result.deliverTx!.data).toEqual(fromBase64('c3VjY2Vzcw=='));
        expect(result.deliverTx!.log).toBe('tx delivered');
        expect(result.deliverTx!.gasWanted).toBe(100000n);
        expect(result.deliverTx!.gasUsed).toBe(60000n);
        expect(result.deliverTx!.events).toEqual([transferEvent]);
      });

      it('should handle commit response without deliver_tx', () => {
        const mockResponse = {
          result: {
            height: '12345',
            hash: 'FEDCBA0987654321',
            check_tx: {
              code: 1,
              data: '',
              log: 'check failed',
              info: '',
              gas_wanted: '100000',
              gas_used: '50000',
              events: [] as Event[],
              codespace: 'sdk'
            }
          }
        };

        const result = adapter.decodeBroadcastTxCommit(mockResponse);

        expect(result.height).toBe(12345);
        expect(result.checkTx.code).toBe(1);
        expect(result.deliverTx).toBeUndefined();
      });
    });
  });
});