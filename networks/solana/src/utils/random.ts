export function randomBytes(length: number): Uint8Array {
  const crypto = require("crypto");
  return crypto.randomBytes(length);
}
