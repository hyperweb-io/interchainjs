/**
 * Simple ABI function item interface
 */
export interface AbiFunctionItem {
  name?: string;
  type: string;
  inputs?: Array<{
    name: string;
    type: string;
    internalType?: string;
  }>;
  outputs?: Array<{
    name: string;
    type: string;
    internalType?: string;
  }>;
  stateMutability?: string;
  anonymous?: boolean;
}

/**
 * Simple contract encoder for basic ERC20 functions
 * This is a minimal implementation for testing purposes
 */
export class ContractEncoder {
  private abi: AbiFunctionItem[];

  constructor(abi: AbiFunctionItem[]) {
    this.abi = abi;
  }

  /**
   * Encode a transfer function call
   */
  transfer(to: string, amount: bigint): string {
    // ERC20 transfer function signature: transfer(address,uint256)
    const functionSignature = '0xa9059cbb'; // keccak256("transfer(address,uint256)").slice(0, 4)

    // Encode address (32 bytes, left-padded)
    const addressParam = to.slice(2).padStart(64, '0');

    // Encode amount (32 bytes, left-padded)
    const amountParam = amount.toString(16).padStart(64, '0');

    return functionSignature + addressParam + amountParam;
  }

  /**
   * Encode a balanceOf function call
   */
  balanceOf(address: string): string {
    // ERC20 balanceOf function signature: balanceOf(address)
    const functionSignature = '0x70a08231'; // keccak256("balanceOf(address)").slice(0, 4)

    // Encode address (32 bytes, left-padded)
    const addressParam = address.slice(2).padStart(64, '0');

    return functionSignature + addressParam;
  }

  /**
   * Encode an approve function call
   */
  approve(spender: string, amount: bigint): string {
    // ERC20 approve function signature: approve(address,uint256)
    const functionSignature = '0x095ea7b3'; // keccak256("approve(address,uint256)").slice(0, 4)

    // Encode address (32 bytes, left-padded)
    const addressParam = spender.slice(2).padStart(64, '0');

    // Encode amount (32 bytes, left-padded)
    const amountParam = amount.toString(16).padStart(64, '0');

    return functionSignature + addressParam + amountParam;
  }

  /**
   * Encode an allowance function call
   */
  allowance(owner: string, spender: string): string {
    // ERC20 allowance function signature: allowance(address,address)
    const functionSignature = '0xdd62ed3e'; // keccak256("allowance(address,address)").slice(0, 4)

    // Encode owner address (32 bytes, left-padded)
    const ownerParam = owner.slice(2).padStart(64, '0');

    // Encode spender address (32 bytes, left-padded)
    const spenderParam = spender.slice(2).padStart(64, '0');

    return functionSignature + ownerParam + spenderParam;
  }
}
