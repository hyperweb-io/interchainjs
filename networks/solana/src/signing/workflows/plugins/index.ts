/**
 * Solana Workflow Plugins
 */

import { BaseWorkflowPlugin, SolanaWorkflowContextImpl } from '../builder';
import { SolanaWorkflowContext } from '../../../types/client';
import { TransactionInstruction, PublicKey } from '../../../types/common';
import { SolanaSigningError } from '../../../errors';

/**
 * Input validation plugin - validates signing arguments
 */
export class InputValidationPlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super([], 'input-validation');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const { signArgs } = context;

    // Validate messages
    if (!signArgs.messages || !Array.isArray(signArgs.messages)) {
      throw new SolanaSigningError('Invalid messages: must be an array of TransactionInstructions');
    }

    if (signArgs.messages.length === 0) {
      throw new SolanaSigningError('Invalid messages: at least one instruction required');
    }

    // Validate each instruction
    for (const instruction of signArgs.messages) {
      this.validateInstruction(instruction);
    }

    // Validate fee payer if provided
    if (signArgs.feePayer && !(signArgs.feePayer instanceof PublicKey)) {
      throw new SolanaSigningError('Invalid feePayer: must be a PublicKey instance');
    }

    // Validate fee
    if (signArgs.fee !== undefined && signArgs.fee !== 'auto' && typeof signArgs.fee !== 'number') {
      throw new SolanaSigningError('Invalid fee: must be "auto" or a number');
    }

    // Store validated inputs
    const validatedInputs = {
      instructions: signArgs.messages,
      feePayer: signArgs.feePayer || context.signer.publicKey,
      fee: signArgs.fee || 'auto',
      memo: signArgs.memo,
      recentBlockhash: signArgs.recentBlockhash
    };

    (context as SolanaWorkflowContextImpl).setValidatedInputs(validatedInputs);
  }

  private validateInstruction(instruction: TransactionInstruction): void {
    if (!instruction.programId || !this.isValidPublicKey(instruction.programId)) {
      throw new SolanaSigningError('Invalid instruction: programId must be a PublicKey instance');
    }

    if (!instruction.keys || !Array.isArray(instruction.keys)) {
      throw new SolanaSigningError('Invalid instruction: keys must be an array');
    }

    if (!instruction.data || !(instruction.data instanceof Uint8Array)) {
      throw new SolanaSigningError('Invalid instruction: data must be a Uint8Array');
    }

    // Validate each key
    for (const key of instruction.keys) {
      if (!key.pubkey || !this.isValidPublicKey(key.pubkey)) {
        throw new SolanaSigningError('Invalid instruction key: pubkey must be a PublicKey instance');
      }
      if (typeof key.isSigner !== 'boolean') {
        throw new SolanaSigningError('Invalid instruction key: isSigner must be a boolean');
      }
      if (typeof key.isWritable !== 'boolean') {
        throw new SolanaSigningError('Invalid instruction key: isWritable must be a boolean');
      }
    }
  }

  private isValidPublicKey(value: any): boolean {
    // Check if it's a PublicKey instance (either legacy or new)
    if (value && typeof value.toBase58 === 'function') {
      try {
        const base58 = value.toBase58();
        return typeof base58 === 'string' && base58.length > 0;
      } catch {
        return false;
      }
    }
    return false;
  }
}

/**
 * Message encoding plugin - creates and serializes transaction message
 */
export class MessageEncodingPlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super(['input-validation'], 'message-encoding');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const validatedInputs = context.getValidatedInputs();
    const { instructions, feePayer, recentBlockhash } = validatedInputs;

    // Get recent blockhash if not provided
    let blockhash = recentBlockhash;
    if (!blockhash) {
      // This would typically come from a query client
      // For now, we'll use a placeholder
      blockhash = 'placeholder-blockhash';
    }

    // Create transaction message
    const message = {
      accountKeys: this.extractAccountKeys(instructions, feePayer),
      recentBlockhash: blockhash,
      instructions: instructions,
      header: this.createMessageHeader(instructions, feePayer)
    };

    // Serialize message for signing
    const messageBytes = this.serializeMessage(message);

    (context as SolanaWorkflowContextImpl).setEncodedMessage(messageBytes);
  }

  private extractAccountKeys(instructions: TransactionInstruction[], feePayer: PublicKey): PublicKey[] {
    const keySet = new Set<string>();
    const keys: PublicKey[] = [];

    // Add fee payer first
    keySet.add(feePayer.toBase58());
    keys.push(feePayer);

    // Add all instruction keys
    for (const instruction of instructions) {
      // Add program ID
      const programIdStr = instruction.programId.toBase58();
      if (!keySet.has(programIdStr)) {
        keySet.add(programIdStr);
        keys.push(instruction.programId);
      }

      // Add account keys
      for (const key of instruction.keys) {
        const keyStr = key.pubkey.toBase58();
        if (!keySet.has(keyStr)) {
          keySet.add(keyStr);
          keys.push(key.pubkey);
        }
      }
    }

    return keys;
  }

  private createMessageHeader(instructions: TransactionInstruction[], feePayer: PublicKey) {
    const signerKeys = new Set<string>();
    const writableKeys = new Set<string>();

    // Fee payer is always a signer and writable
    signerKeys.add(feePayer.toBase58());
    writableKeys.add(feePayer.toBase58());

    // Analyze instruction keys
    for (const instruction of instructions) {
      for (const key of instruction.keys) {
        const keyStr = key.pubkey.toBase58();
        if (key.isSigner) {
          signerKeys.add(keyStr);
        }
        if (key.isWritable) {
          writableKeys.add(keyStr);
        }
      }
    }

    return {
      numRequiredSignatures: signerKeys.size,
      numReadonlySignedAccounts: 0, // Simplified for now
      numReadonlyUnsignedAccounts: 0 // Simplified for now
    };
  }

  private serializeMessage(message: any): Uint8Array {
    // This is a simplified serialization
    // In a real implementation, you would use proper Solana message serialization
    const encoder = new TextEncoder();
    return encoder.encode(JSON.stringify(message));
  }
}

/**
 * Signature plugin - signs the transaction message
 */
export class SignaturePlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super(['message-encoding'], 'signature');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const messageBytes = context.getEncodedMessage();
    const signer = context.signer;

    try {
      // Sign the message bytes
      const signature = await this.signMessage(signer, messageBytes);

      // Store signature in context for transaction assembly
      (context as any).signature = signature;
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  private async signMessage(signer: any, messageBytes: Uint8Array): Promise<Uint8Array> {
    // This is a placeholder implementation
    // In a real implementation, this would call the signer's sign method
    // For now, we'll return a dummy signature
    return new Uint8Array(64).fill(0);
  }
}

/**
 * Transaction assembly plugin - assembles the final transaction
 */
export class TransactionAssemblyPlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super(['signature'], 'transaction-assembly');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const validatedInputs = context.getValidatedInputs();
    const signature = (context as any).signature as Uint8Array;

    // Create the final transaction object
    const transaction = {
      signatures: [Array.from(signature)],
      message: {
        accountKeys: validatedInputs.accountKeys || [],
        recentBlockhash: validatedInputs.recentBlockhash || 'placeholder-blockhash',
        instructions: validatedInputs.instructions,
        header: validatedInputs.header || {
          numRequiredSignatures: 1,
          numReadonlySignedAccounts: 0,
          numReadonlyUnsignedAccounts: 0
        }
      }
    };

    (context as SolanaWorkflowContextImpl).setTransaction(transaction);
  }
}

/**
 * Fee calculation plugin - calculates transaction fees
 */
export class FeeCalculationPlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super(['input-validation'], 'fee-calculation');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const validatedInputs = context.getValidatedInputs();

    if (validatedInputs.fee === 'auto') {
      // Calculate fee automatically
      // This is a simplified implementation
      const baseFee = 5000; // 5000 lamports base fee
      const instructionFee = validatedInputs.instructions.length * 1000; // 1000 lamports per instruction
      const totalFee = baseFee + instructionFee;

      validatedInputs.calculatedFee = totalFee;
    } else {
      validatedInputs.calculatedFee = validatedInputs.fee;
    }
  }
}

/**
 * Compute budget plugin - adds compute budget instructions if needed
 */
export class ComputeBudgetPlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super(['input-validation'], 'compute-budget');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const { options } = context;

    if (!options.enableComputeBudget) {
      return;
    }

    const validatedInputs = context.getValidatedInputs();

    // Add compute budget instructions if specified
    if (options.computeUnitLimit || options.computeUnitPrice) {
      // This would add compute budget instructions to the transaction
      // For now, this is a placeholder
      validatedInputs.hasComputeBudget = true;
    }
  }
}

// Export all plugins
export {
  BaseWorkflowPlugin
};
