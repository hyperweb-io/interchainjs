/**
 * Tests for Solana codec base functionality
 */

import { createCodec } from '../base';
import { ensureString, ensureNumber } from '../converters';

describe('Solana Codec Base', () => {
  describe('createCodec', () => {
    interface TestType {
      name: string;
      value: number;
      optional?: string;
    }

    const TestCodec = createCodec<TestType>({
      name: ensureString,
      value: ensureNumber,
      optional: {
        converter: (v: unknown) => v === undefined ? undefined : ensureString(v)
      }
    });

    it('should create object with converters', () => {
      const data = {
        name: 'test',
        value: '123',
        optional: 'optional'
      };

      const result = TestCodec.create(data);
      expect(result).toEqual({
        name: 'test',
        value: 123,
        optional: 'optional'
      });
    });

    it('should handle missing optional fields', () => {
      const data = {
        name: 'test',
        value: '123'
      };

      const result = TestCodec.create(data);
      expect(result).toEqual({
        name: 'test',
        value: 123
      });
    });

    it('should throw for missing required fields', () => {
      const TestCodecWithRequired = createCodec<TestType>({
        name: { converter: ensureString, required: true },
        value: ensureNumber
      });

      const data = {
        value: 123
      };

      expect(() => TestCodecWithRequired.create(data)).toThrow('Missing required property: name');
    });

    it('should handle source field mapping', () => {
      const TestCodecWithSource = createCodec<TestType>({
        name: { source: 'display_name', converter: ensureString },
        value: ensureNumber
      });

      const data = {
        display_name: 'test',
        value: 123
      };

      const result = TestCodecWithSource.create(data);
      expect(result).toEqual({
        name: 'test',
        value: 123
      });
    });

    it('should create array of objects', () => {
      const data = [
        { name: 'test1', value: '123' },
        { name: 'test2', value: '456' }
      ];

      const result = TestCodec.createArray(data);
      expect(result).toEqual([
        { name: 'test1', value: 123 },
        { name: 'test2', value: 456 }
      ]);
    });

    it('should throw for invalid data', () => {
      expect(() => TestCodec.create(null)).toThrow('Invalid data: expected object');
      expect(() => TestCodec.create('string')).toThrow('Invalid data: expected object');
    });

    it('should throw for invalid array data', () => {
      expect(() => TestCodec.createArray('not array')).toThrow('Invalid data: expected array');
    });
  });
});
