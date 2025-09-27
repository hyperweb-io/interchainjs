/**
 * Tests for Solana 1.18 adapter
 */

import { Solana118Adapter } from '../solana-1_18';
import { SolanaRpcMethod, SolanaProtocolVersion } from '../../types/protocol';
import { GetHealthRequest, GetVersionRequest } from '../../types/requests';

describe('Solana118Adapter', () => {
  let adapter: Solana118Adapter;

  beforeEach(() => {
    adapter = new Solana118Adapter();
  });

  describe('basic properties', () => {
    it('should have correct version', () => {
      expect(adapter.getVersion()).toBe(SolanaProtocolVersion.SOLANA_1_18);
    });

    it('should support expected methods', () => {
      const supportedMethods = adapter.getSupportedMethods();
      expect(supportedMethods.has(SolanaRpcMethod.GET_HEALTH)).toBe(true);
      expect(supportedMethods.has(SolanaRpcMethod.GET_VERSION)).toBe(true);
    });

    it('should have correct capabilities', () => {
      const capabilities = adapter.getCapabilities();
      expect(capabilities.streaming).toBe(true);
      expect(capabilities.subscriptions).toBe(true);
      expect(capabilities.compression).toBe(true);
      expect(capabilities.jsonParsed).toBe(true);
    });

    it('should provide protocol info', () => {
      const protocolInfo = adapter.getProtocolInfo();
      expect(protocolInfo.version).toBe(SolanaProtocolVersion.SOLANA_1_18);
      expect(protocolInfo.supportedMethods).toBeInstanceOf(Set);
      expect(protocolInfo.capabilities).toBeDefined();
    });
  });

  describe('encodeGetHealth', () => {
    it('should encode basic request correctly', () => {
      const request: GetHealthRequest = {};
      const encoded = adapter.encodeGetHealth(request);
      expect(encoded).toEqual([]);
    });

    it('should encode request with options correctly', () => {
      const request: GetHealthRequest = {
        options: {}
      };
      const encoded = adapter.encodeGetHealth(request);
      expect(encoded).toEqual([]);
    });
  });

  describe('encodeGetVersion', () => {
    it('should encode basic request correctly', () => {
      const request: GetVersionRequest = {};
      const encoded = adapter.encodeGetVersion(request);
      expect(encoded).toEqual([]);
    });

    it('should encode request with options correctly', () => {
      const request: GetVersionRequest = {
        options: {}
      };
      const encoded = adapter.encodeGetVersion(request);
      expect(encoded).toEqual([]);
    });
  });

  describe('decodeHealth', () => {
    it('should decode string response correctly', () => {
      const response = 'ok';
      const decoded = adapter.decodeHealth(response);
      expect(decoded).toBe('ok');
    });

    it('should decode object response correctly', () => {
      const response = { result: 'ok' };
      const decoded = adapter.decodeHealth(response);
      expect(decoded).toBe('ok');
    });

    it('should throw error for invalid response', () => {
      const response = { invalid: 'response' };
      expect(() => adapter.decodeHealth(response)).toThrow('Invalid health response format');
    });
  });

  describe('decodeVersion', () => {
    it('should decode version response correctly', () => {
      const response = {
        result: {
          'solana-core': '1.18.22',
          'feature-set': 2891131721
        }
      };
      const decoded = adapter.decodeVersion(response);
      expect(decoded['solana-core']).toBe('1.18.22');
      expect(decoded['feature-set']).toBe(2891131721);
    });

    it('should decode direct version response correctly', () => {
      const response = {
        'solana-core': '1.18.22',
        'feature-set': 2891131721
      };
      const decoded = adapter.decodeVersion(response);
      expect(decoded['solana-core']).toBe('1.18.22');
      expect(decoded['feature-set']).toBe(2891131721);
    });

    it('should handle missing feature-set', () => {
      const response = {
        result: {
          'solana-core': '1.18.22'
        }
      };
      const decoded = adapter.decodeVersion(response);
      expect(decoded['solana-core']).toBe('1.18.22');
      expect(decoded['feature-set']).toBeUndefined();
    });

    it('should throw error for invalid response', () => {
      const response: any = null;
      expect(() => adapter.decodeVersion(response)).toThrow('Invalid version response format');
    });
  });
});
