const { EthSecp256k1HDWallet } = require('./dist/wallets/ethSecp256k1hd');
const { HDPath } = require('@interchainjs/types');

const TEST_MNEMONIC = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon art';

async function testWallet() {
  try {
    console.log('Testing EthSecp256k1HDWallet...');
    
    const hdPath = HDPath.cosmos(0, 0, 0);
    const wallet = await EthSecp256k1HDWallet.fromMnemonic(TEST_MNEMONIC, { 
      derivations: [{ hdPath: hdPath.toString(), prefix: 'inj' }] 
    });

    console.log('Wallet created successfully');
    
    const accounts = await wallet.getAccounts();
    console.log('Number of accounts:', accounts.length);
    console.log('First account address:', accounts[0].address);
    console.log('Address format check:', /^inj1[a-z0-9]{38}$/.test(accounts[0].address));
    
  } catch (error) {
    console.error('Error testing wallet:', error.message);
    console.error('Stack:', error.stack);
  }
}

testWallet();
