/**
 * Determines if a value is a non-null object (including arrays and other built-in objects).
 * This check matches TypeScript's `object` type which excludes primitives and `null`.
 *
 * Examples:
 * - `isObjectLike({})` returns `true`
 * - `isObjectLike([])` returns `true`
 * - `isObjectLike(null)` returns `false`
 * - `isObjectLike(42)` returns `false`
 */
export function isObjectLike(data: unknown): data is object {
  return data !== null && typeof data === "object";
}

/**
 * Checks if a value is a pure Uint8Array instance, explicitly excluding Node.js Buffers.
 * This distinction is important because while Buffers are Uint8Array instances in Node.js,
 * they often require different handling in cryptographic and binary data contexts.
 *
 * The check avoids `instanceof` due to potential cross-realm issues and uses
 * `Object.prototype.toString` for reliable type checking.
 *
 * Examples:
 * - `isUint8Array(new Uint8Array())` returns `true`
 * - `isUint8Array(Buffer.from(''))` returns `false`
 */
export function isUint8Array(data: unknown): data is Uint8Array {
  if (!isObjectLike(data)) return false;

  // Reliable type check that works across different execution environments
  if (Object.prototype.toString.call(data) !== "[object Uint8Array]") return false;

  // Explicitly exclude Node.js Buffers even though they extend Uint8Array
  if (typeof Buffer === "function" && Buffer.isBuffer(data)) {
    return false;
  }

  return true;
}