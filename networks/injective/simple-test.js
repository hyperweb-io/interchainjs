// Simple test to check if our strategy works
const { keccak_256 } = require('@noble/hashes/sha3');
const { bech32 } = require('bech32');

console.log('Testing keccak256 and bech32...');

// Test data - this should be an uncompressed public key without 0x04 prefix
const testPubKey = Buffer.from('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8', 'hex');

console.log('Test public key length:', testPubKey.length);

// Apply keccak256 and take last 20 bytes
const hash = keccak_256(testPubKey);
console.log('Keccak256 hash:', hash);

const addressBytes = hash.slice(-20);
console.log('Address bytes (last 20):', addressBytes);

// Encode as bech32 with 'inj' prefix
const words = bech32.toWords(addressBytes);
const address = bech32.encode('inj', words);

console.log('Generated address:', address);
console.log('Address format check:', /^inj1[a-z0-9]{38}$/.test(address));
