/**
 * Tests for VersionResponse codec
 */

import { createVersionResponse, VersionResponseCodec } from '../version-response';

describe('VersionResponse', () => {
  describe('createVersionResponse', () => {
    it('should create version response with all fields', () => {
      const data = {
        'solana-core': '1.14.0',
        'feature-set': 123456
      };

      const result = createVersionResponse(data);
      expect(result).toEqual({
        'solana-core': '1.14.0',
        'feature-set': 123456
      });
    });

    it('should create version response with missing feature-set', () => {
      const data = {
        'solana-core': '1.14.0'
      };

      const result = createVersionResponse(data);
      expect(result).toEqual({
        'solana-core': '1.14.0'
      });
    });

    it('should handle string feature-set', () => {
      const data = {
        'solana-core': '1.14.0',
        'feature-set': '123456'
      };

      const result = createVersionResponse(data);
      expect(result).toEqual({
        'solana-core': '1.14.0',
        'feature-set': 123456
      });
    });

    it('should handle empty solana-core', () => {
      const data = {
        'solana-core': '',
        'feature-set': 123456
      };

      const result = createVersionResponse(data);
      expect(result).toEqual({
        'solana-core': '',
        'feature-set': 123456
      });
    });
  });

  describe('VersionResponseCodec', () => {
    it('should work directly with codec', () => {
      const data = {
        'solana-core': '1.14.0',
        'feature-set': 123456
      };

      const result = VersionResponseCodec.create(data);
      expect(result).toEqual({
        'solana-core': '1.14.0',
        'feature-set': 123456
      });
    });
  });
});
