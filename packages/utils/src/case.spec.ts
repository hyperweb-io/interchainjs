import { camel, camelCaseRecursive } from './case';

describe('camel', () => {
  test('converts snake_case to camelCase', () => {
    expect(camel('snake_case')).toBe('snakeCase');
    expect(camel('test_value')).toBe('testValue');
    expect(camel('multi_word_test')).toBe('multiWordTest');
  });

  test('converts kebab-case to camelCase', () => {
    expect(camel('kebab-case')).toBe('kebabCase');
    expect(camel('test-value')).toBe('testValue');
    expect(camel('multi-word-test')).toBe('multiWordTest');
  });

  test('handles mixed case letters', () => {
    expect(camel('test_A')).toBe('testA');
    expect(camel('test-B')).toBe('testB');
    expect(camel('value_ABC')).toBe('valueABC');
  });

  test('handles single words', () => {
    expect(camel('simple')).toBe('simple');
    expect(camel('CAPS')).toBe('CAPS');
  });

  test('handles empty string', () => {
    expect(camel('')).toBe('');
  });

  test('handles strings with no delimiters', () => {
    expect(camel('alreadyCamelCase')).toBe('alreadyCamelCase');
  });
});

describe('camelCaseRecursive', () => {
  test('converts object keys recursively', () => {
    const input = {
      snake_case: 'value',
      nested_object: {
        another_snake_case: 'nested_value',
        deep_nesting: {
          final_value: 'deep'
        }
      }
    };

    const expected = {
      snakeCase: 'value',
      nestedObject: {
        anotherSnakeCase: 'nested_value',
        deepNesting: {
          finalValue: 'deep'
        }
      }
    };

    expect(camelCaseRecursive(input)).toEqual(expected);
  });

  test('handles arrays', () => {
    const input = [
      { snake_case: 'value1' },
      { another_snake: 'value2' }
    ];

    const expected = [
      { snakeCase: 'value1' },
      { anotherSnake: 'value2' }
    ];

    expect(camelCaseRecursive(input)).toEqual(expected);
  });
});