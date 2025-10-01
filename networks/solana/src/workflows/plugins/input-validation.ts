import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { SolanaSignArgs } from '../../signers/types';
import { SolanaWorkflowBuilderContext } from '../context';

// Staging keys for input validation plugin
export const INPUT_VALIDATION_STAGING_KEYS = {
  VALIDATED_ARGS: 'validated_args',
  OPTIONS: 'options'
} as const;

/**
 * Input parameters for InputValidationPlugin
 */
export interface InputValidationParams {
  signArgs: SolanaSignArgs;
}

/**
 * Plugin to validate input arguments for Solana transactions
 */
export class InputValidationPlugin extends BaseWorkflowBuilderPlugin<
  InputValidationParams,
  SolanaWorkflowBuilderContext
> {
  private signArgs: SolanaSignArgs;

  constructor(signArgs: SolanaSignArgs) {
    super(['sign_args'], {});
    this.signArgs = signArgs;
  }

  protected onValidate(key: string, value: unknown): void {
    if (key === 'sign_args') {
      const args = value as SolanaSignArgs;
      if (!args.instructions || args.instructions.length === 0) {
        throw new Error('At least one instruction is required');
      }

      for (const instruction of args.instructions) {
        if (!instruction.programId) {
          throw new Error('Instruction programId is required');
        }
        if (!instruction.data) {
          throw new Error('Instruction data is required');
        }
        if (!instruction.keys) {
          throw new Error('Instruction keys are required');
        }
      }
    } else {
      super.onValidate(key, value);
    }
  }

  protected afterRetrieveParams(params: Record<string, unknown>): InputValidationParams {
    return {
      signArgs: params.signArgs as SolanaSignArgs
    };
  }

  protected async onBuild(
    ctx: SolanaWorkflowBuilderContext,
    params: InputValidationParams
  ): Promise<void> {
    // Store validated arguments and options
    ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.VALIDATED_ARGS, params.signArgs);
    ctx.setStagingData(INPUT_VALIDATION_STAGING_KEYS.OPTIONS, params.signArgs.options || {});
  }
}
