import { GeneralException } from '@injectivelabs/exceptions';
import snakecaseKeys from 'snakecase-keys';

import { snakeToPascal } from './helpers';
import { isNumber, numberToCosmosSdkDecString } from './numbers';

export interface TypedDataField {
  name: string;
  type: string;
}

const msgExecuteContractType = 'wasm/MsgExecuteContract';

/**
 * Function used to generate EIP712 types based on a message object
 * and its structure (recursive)
 */
export const objectKeysToEip712Types = ({
  object,
  messageType,
  primaryType = 'MsgValue',
}: {
  object: Record<string, any>;
  messageType?: string;
  primaryType?: string;
}) => {
  const numberFieldsWithStringValue = [
    'order_mask',
    'order_type',
    'oracle_type',
    'round',
    'oracle_scale_factor',
    'expiry',
    'option',
    'proposal_id',
    'creation_height',
  ];
  const stringFieldsWithNumberValue = [
    'timeout_timestamp',
    'revision_height',
    'revision_number',
  ];
  const stringFieldsToOmitIfEmpty = ['cid'];
  const output = new Map<string, TypedDataField[]>();
  const types = new Array<TypedDataField>();

  for (const property in snakecaseKeys(object)) {
    const propertyValue = snakecaseKeys(object)[property];

    if (property === '@type') {
      continue;
    }

    const type = typeof propertyValue;

    if (type === 'boolean') {
      types.push({ name: property, type: 'bool' });
    } else if (
      type === 'number' ||
      type === 'bigint' ||
      numberFieldsWithStringValue.includes(property)
    ) {
      types.push({
        name: property,
        type: numberTypeToReflectionNumberType(property),
      });
    } else if (type === 'string') {
      if (stringFieldsToOmitIfEmpty.includes(property) && !propertyValue) {
        continue;
      }

      if (stringFieldsWithNumberValue.includes(property)) {
        types.push({
          name: property,
          type: stringTypeToReflectionStringType(property),
        });

        continue;
      }

      types.push({ name: property, type: 'string' });
    } else if (type === 'object') {
      if (Array.isArray(propertyValue) && propertyValue.length === 0) {
        throw new GeneralException(new Error('Array with length 0 found'));
      } else if (Array.isArray(propertyValue) && propertyValue.length > 0) {
        const arrayFirstType = typeof propertyValue[0];
        const isPrimitive =
          arrayFirstType === 'boolean' ||
          arrayFirstType === 'number' ||
          arrayFirstType === 'string';

        if (isPrimitive) {
          for (const arrayEntry in propertyValue) {
            if (typeof arrayEntry !== arrayFirstType) {
              throw new GeneralException(
                new Error('Array with different types found')
              );
            }
          }

          if (arrayFirstType === 'boolean') {
            types.push({ name: property, type: 'bool[]' });
          } else if (arrayFirstType === 'number') {
            types.push({ name: property, type: 'number[]' });
          } else if (arrayFirstType === 'string') {
            types.push({ name: property, type: 'string[]' });
          }
        } else if (arrayFirstType === 'object') {
          const propertyType = getObjectEip712PropertyType({
            property: snakeToPascal(property),
            parentProperty: primaryType,
            messageType,
          });
          const recursiveOutput = objectKeysToEip712Types({
            object: propertyValue[0],
            primaryType: propertyType,
            messageType,
          });
          const recursiveTypes = recursiveOutput.get(propertyType);

          types.push({ name: property, type: `${propertyType}[]` });
          output.set(propertyType, recursiveTypes!);

          for (const key of recursiveOutput.keys()) {
            if (key !== primaryType) {
              output.set(key, recursiveOutput.get(key)!);
            }
          }
        } else {
          throw new GeneralException(
            new Error('Array with elements of unknown type found')
          );
        }
      } else if (propertyValue instanceof Date) {
        types.push({ name: property, type: 'string' });
      } else {
        const propertyType = getObjectEip712PropertyType({
          property: snakeToPascal(property),
          parentProperty: primaryType,
          messageType,
        });
        const recursiveOutput = objectKeysToEip712Types({
          object: propertyValue,
          primaryType: propertyType,
          messageType,
        });
        const recursiveTypes = recursiveOutput.get(propertyType);

        types.push({ name: property, type: propertyType });
        output.set(propertyType, recursiveTypes!);

        for (const key of recursiveOutput.keys()) {
          if (key !== primaryType) {
            output.set(key, recursiveOutput.get(key)!);
          }
        }
      }
    } else {
      throw new GeneralException(new Error(`Type ${property} not found`));
    }
  }

  output.set(primaryType, types);

  return output;
};
/**
 * JavaScript doesn't know the exact number types that
 * we represent these fields on chain so we have to map
 * them in their chain representation from the number value
 * that is available in JavaScript
 */
export const numberTypeToReflectionNumberType = (property?: string) => {
  switch (property) {
  case 'order_mask':
    return 'int32';
  case 'timeout_timestamp':
    return 'timeout_timestamp';
  case 'revision_number':
    return 'uint64';
  case 'revision_height':
    return 'uint64';
  case 'order_type':
    return 'int32';
  case 'oracle_type':
    return 'int32';
  case 'exponent':
    return 'uint32';
  case 'round':
    return 'uint64';
  case 'oracle_scale_factor':
    return 'uint64';
  case 'expiry':
    return 'int64';
  case 'creation_height':
    return 'int64';
  case 'option':
    return 'int32';
  case 'proposal_id':
    return 'uint64';
  default:
    return 'uint64';
  }
};
/**
 * JavaScript doesn't know the exact string types that
 * we represent these fields on chain so we have to map
 * them in their chain representation from the string value
 * that is available in JavaScript
 */
export const stringTypeToReflectionStringType = (property?: string) => {
  switch (property) {
  case 'timeout_timestamp':
    return 'uint64';
  case 'revision_number':
    return 'uint64';
  case 'revision_height':
    return 'uint64';
  default:
    return 'uint64';
  }
};

/**
 * We need to represent some of the values in a proper format acceptable by the chain.
 *
 * 1. We need to represent some values from a number to string
 * This needs to be done for every number value except for maps (ex: vote option)
 *
 * 2. We need to convert every `sdk.Dec` value from a raw value to shifted by 1e18 value
 * ex: 0.01 -> 0.01000000000000000000, 1 -> 1.000000000000000000
 *
 * 3. For some fields, like 'amount' in the 'MsgIncreasePositionMargin' we have
 * to also specify the Message type to apply the sdk.Dec conversion because there
 * are other amount fields in other messages as well and we don't want to affect them
 */
export const mapValuesToProperValueType = <T extends Record<string, unknown>>(
  object: T,
  messageTypeUrl?: string
): T => {
  const numberToStringKeys = [
    'proposal_id',
    'round',
    'oracle_scale_factor',
    'timeout_timestamp',
    'revision_height',
    'revision_number',
    'expiry',
  ];
  const sdkDecKeys = [
    'min_price_tick_size',
    'price',
    'quantity',
    'margin',
    'trigger_price',
    'min_quantity_tick_size',
  ];
  const sdkDecKeyWithTypeMaps = {
    'exchange/MsgIncreasePositionMargin': ['amount'],
  };
  const nullableStringsTypeMaps = {
    'wasmx/MsgExecuteContractCompat': ['funds'],
  };

  const nullableStrings = ['uri', 'uri_hash'];

  return Object.keys(object).reduce((result, key) => {
    const value = object[key];

    if (!value) {
      // Message Type Specific checks
      if (messageTypeUrl) {
        const typeInMap = Object.keys(nullableStringsTypeMaps).find(
          (key) => key === messageTypeUrl
        );

        if (typeInMap) {
          const nullableStringKeys =
            nullableStringsTypeMaps[
              typeInMap as keyof typeof nullableStringsTypeMaps
            ];

          if (nullableStringKeys.includes(key)) {
            return {
              ...result,
              [key]: value,
            };
          }
        }
      }

      if (nullableStrings.includes(key)) {
        return {
          ...result,
          [key]: value,
        };
      }

      return result;
    }

    if (typeof value === 'object') {
      if (value instanceof Date) {
        return {
          ...result,
          [key]: value.toJSON().split('.')[0] + 'Z',
        };
      }
      if (Array.isArray(value)) {
        return {
          ...result,
          [key]: value.every((i) => typeof i === 'string')
            ? value
            : value.map((item) =>
              mapValuesToProperValueType(item as Record<string, unknown>)
            ),
        };
      }

      return {
        ...result,
        [key]: mapValuesToProperValueType(value as Record<string, unknown>),
      };
    }

    if (isNumber(value as string | number)) {
      if (numberToStringKeys.includes(key)) {
        return {
          ...result,
          [key]: value.toString(),
        };
      }

      // Maybe some other check needed
    }

    if (typeof value === 'string') {
      if (sdkDecKeys.includes(key)) {
        return {
          ...result,
          [key]: numberToCosmosSdkDecString(value),
        };
      }

      // Message Type Specific checks
      if (messageTypeUrl) {
        const typeInMap = Object.keys(sdkDecKeyWithTypeMaps).find(
          (key) => key === messageTypeUrl
        );

        if (typeInMap) {
          const sdkDecKeys =
            sdkDecKeyWithTypeMaps[
              typeInMap as keyof typeof sdkDecKeyWithTypeMaps
            ];

          if (sdkDecKeys.includes(key)) {
            return {
              ...result,
              [key]: numberToCosmosSdkDecString(value),
            };
          }
        }
      }
    }

    return {
      ...result,
      [key]: value,
    };
  }, {} as T);
};

export const getObjectEip712PropertyType = ({
  property,
  parentProperty,
  messageType,
}: {
  property: string;
  parentProperty: string;
  messageType?: string;
}) => {
  if (messageType === msgExecuteContractType) {
    return appendWasmTypePrefixToPropertyType(property, parentProperty);
  }

  return appendTypePrefixToPropertyType(property, parentProperty);
};

/**
 * Append Wasm Type prefix to a Level0 EIP712 type
 * including its parent property type
 */
const appendWasmTypePrefixToPropertyType = (
  property: string,
  parentProperty: string = ''
) => {
  const cosmWasmMsgPrefix = 'CosmwasmInnerMsgMarker';
  const propertyWithoutTypePrefix = property.replace('Type', '');

  if (propertyWithoutTypePrefix === 'Msg') {
    return cosmWasmMsgPrefix;
  }

  const parentPropertyWithoutTypePrefix = parentProperty.replace(
    cosmWasmMsgPrefix,
    ''
  );

  return `${parentPropertyWithoutTypePrefix + propertyWithoutTypePrefix}Value`;
};

/**
 * Append Type prefix to a Level0 EIP712 type
 * including its parent property type
 */
const appendTypePrefixToPropertyType = (
  property: string,
  parentProperty: string = ''
) => {
  const propertyWithoutTypePrefix = property.replace('Type', '');
  const parentPropertyWithoutTypePrefix =
    parentProperty === 'MsgValue' ? '' : parentProperty.replace('Type', '');

  return `Type${parentPropertyWithoutTypePrefix + propertyWithoutTypePrefix}`;
};
