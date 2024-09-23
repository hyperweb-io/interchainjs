/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export enum SignMode {
  /**
   * SIGN_MODE_EIP712_V2 - Injective EIP712 support for any cosmos messages which uses proto-json encoded string for messages
   * Signature verification is implemented in injective core
   */
  SIGN_MODE_EIP712_V2 = 128,
}