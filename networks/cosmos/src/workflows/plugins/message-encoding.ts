import { TxBody } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { MessageEncodingInput, STAGING_KEYS } from '../types';
import { EncodedMessage } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to encode messages into TxBody
 */
export class MessageEncodingPlugin extends BaseWorkflowBuilderPlugin<
  MessageEncodingInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.MESSAGES,
      { dependency: STAGING_KEYS.MEMO, optional: true },
      { dependency: STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: MessageEncodingInput
  ): Promise<void> {
    const { messages, memo, options } = params;

    // Validate timeout height
    if (options?.timeoutHeight?.type === 'relative') {
      throw new Error(
        "timeoutHeight type shouldn't be 'relative'. Please update it to 'absolute' value."
      );
    }

    // Encode messages
    const encodedMessages: EncodedMessage[] = messages.map(({ typeUrl, value }) => {
      // Get encoder for this type
      const encoder = ctx.getSigner().getEncoder(typeUrl);
      if (!encoder) {
        throw new Error(`No encoder found for type: ${typeUrl}`);
      }
      
      // Ensure value is properly encoded
      const encodedValue = encoder.encode(value);
      
      return {
        typeUrl,
        value: encodedValue,
      };
    });

    // Create TxBody
    const txBody = TxBody.fromPartial({
      messages: encodedMessages,
      memo: memo || '',
      timeoutHeight: options?.timeoutHeight?.value,
      extensionOptions: options?.extensionOptions,
      nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
      timeoutTimestamp: options?.timeoutTimestamp?.value,
      unordered: options?.unordered ?? false,
    });

    // Encode TxBody to bytes
    const txBodyBytes = TxBody.encode(txBody).finish();

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.TX_BODY, txBody);
    ctx.setStagingData(STAGING_KEYS.TX_BODY_BYTES, txBodyBytes);
  }
}