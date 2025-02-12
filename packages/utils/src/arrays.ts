/**
 * Checks whether array 'a' starts with the elements of array 'b'.
 * @param a The main array to check
 * @param b The potential prefix array
 * @returns True if 'a' starts with all elements of 'b' in order, false otherwise
 *
 * @example
 * ```ts
 * startsWithArray([1, 2, 3, 4], [1, 2]) // true
 * startsWithArray([1, 2, 3, 4], [2, 3]) // false
 * ```
 */
export function startsWithArray<T>(
  a: ArrayLike<T>,
  b: ArrayLike<T>,
): boolean {
  if (a.length < b.length) return false;

  // Generic path for other array types
  for (let i = 0; i < b.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
