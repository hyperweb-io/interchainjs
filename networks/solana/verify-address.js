require('dotenv').config({ path: '.env.local' });
const { Keypair } = require('./dist/index.js');

// Test if our address generation matches the expected address
const expectedAddress = '486PNhqSjs5hVEqaVbRaSgNuW4dL9EADejtSbcmYpNVo';

// You can provide a test private key here to verify
const testPrivateKey = process.env.PRIVATE_KEY;

if (testPrivateKey) {
  try {
    let privateKeyBytes;
    let keyFormat = '';
    
    // Try to parse as Base58 first (common Solana format)
    try {
      const bs58 = require('bs58');
      privateKeyBytes = Buffer.from(bs58.decode(testPrivateKey));
      keyFormat = 'Base58';
    } catch {
      // Fall back to hex parsing
      privateKeyBytes = Buffer.from(testPrivateKey, 'hex');
      keyFormat = 'Hex';
    }
    
    let keypair;
    
    if (privateKeyBytes.length === 32) {
      keypair = Keypair.fromSeed(privateKeyBytes);
      console.log(`Using 32-byte seed (${keyFormat} format)`);
    } else if (privateKeyBytes.length === 64) {
      keypair = Keypair.fromSecretKey(privateKeyBytes);
      console.log(`Using 64-byte secret key (${keyFormat} format)`);
    } else {
      throw new Error(`Invalid private key length: ${privateKeyBytes.length} bytes`);
    }
    
    const generatedAddress = keypair.publicKey.toString();
    
    console.log(`Expected address: ${expectedAddress}`);
    console.log(`Generated address: ${generatedAddress}`);
    console.log(`Addresses match: ${generatedAddress === expectedAddress}`);
    
    if (generatedAddress !== expectedAddress) {
      console.log('\nThe generated address does not match the expected address.');
      console.log('This could be due to:');
      console.log('1. Different private key format (seed vs secret key)');
      console.log('2. Different private key value');
      console.log('3. Different address derivation method');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
} else {
  console.log('No PRIVATE_KEY found in environment variables.');
  console.log('Please set PRIVATE_KEY in your .env.local file to verify address generation.');
}