/**
 * Base codec for automatic type conversion from API responses
 * Copied from Cosmos implementation for consistency
 */

export type ConverterFunction = (value: unknown) => any;

export interface PropertyConfig {
  /** The source property name in the API response */
  source?: string;
  /** The converter function to apply */
  converter?: ConverterFunction;
  /** Whether this property is required */
  required?: boolean;
}

export interface CodecConfig {
  [propertyName: string]: PropertyConfig | ConverterFunction;
}

/**
 * Base class for creating type-safe codecs with automatic conversion
 */
export abstract class BaseCodec<T> {
  protected abstract config: CodecConfig;

  /**
   * Create an instance of T from unknown data
   */
  create(data: unknown): T {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data: expected object');
    }

    const record = data as Record<string, unknown>;
    const instance: Record<string, unknown> = {};

    for (const [propName, propConfig] of Object.entries(this.config)) {
      const config = this.normalizeConfig(propConfig);
      const sourceName = config.source || propName;
      const value = record[sourceName];

      if (value === undefined) {
        if (config.required) {
          throw new Error(`Missing required property: ${sourceName}`);
        }
        continue;
      }

      instance[propName] = config.converter ? config.converter(value) : value;
    }

    return instance as T;
  }

  /**
   * Create an array of T from unknown data
   */
  createArray(data: unknown): T[] {
    if (!Array.isArray(data)) {
      throw new Error('Invalid data: expected array');
    }

    return data.map(item => this.create(item));
  }

  /**
   * Normalize property config to always return PropertyConfig object
   */
  private normalizeConfig(config: PropertyConfig | ConverterFunction): PropertyConfig {
    if (typeof config === 'function') {
      return { converter: config };
    }
    return config;
  }
}

/**
 * Create a codec instance with the given configuration
 */
export function createCodec<T>(config: CodecConfig): BaseCodec<T> {
  return new (class extends BaseCodec<T> {
    protected config = config;
  })();
}
