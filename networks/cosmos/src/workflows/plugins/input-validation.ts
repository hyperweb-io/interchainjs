import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
  CosmosSignArgs,
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to validate and stage input parameters
 */
export class InputValidationPlugin extends BaseWorkflowBuilderPlugin<
  CosmosSignArgs,
  CosmosWorkflowBuilderContext
> {
  private signArgs: CosmosSignArgs;

  constructor(signArgs: CosmosSignArgs) {
    super([]);
    this.signArgs = signArgs;
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: CosmosSignArgs
  ): Promise<void> {
    const { messages, fee, memo, options } = this.signArgs;

    // Validate messages
    if (!messages || messages.length === 0) {
      throw new Error('At least one message is required');
    }

    // Validate each message has required fields
    for (const msg of messages) {
      if (!msg.typeUrl) {
        throw new Error('Message typeUrl is required');
      }
      if (msg.value === undefined || msg.value === null) {
        throw new Error('Message value is required');
      }
    }

    // Validate fee if provided
    if (fee) {
      if (!fee.gas) {
        throw new Error('Fee gas is required when fee is provided');
      }
      if (!fee.amount || !Array.isArray(fee.amount)) {
        throw new Error('Fee amount must be an array');
      }
    }

    // Stage all inputs
    ctx.setStagingData(STAGING_KEYS.MESSAGES, messages);
    if (fee) {
      ctx.setStagingData(STAGING_KEYS.FEE, fee);
    }
    if (memo) {
      ctx.setStagingData(STAGING_KEYS.MEMO, memo);
    }
    if (options) {
      ctx.setStagingData(STAGING_KEYS.OPTIONS, options);
    }
  }
}