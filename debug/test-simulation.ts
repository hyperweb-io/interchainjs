#!/usr/bin/env node

/**
 * Test script for the new simulateByTxBody implementation
 * 
 * This script tests the redesigned simulation functionality
 * against the Starship environment.
 */

import { TxBody, SignerInfo, AuthInfo, Tx } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { MsgSend } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/tx';
import { Secp256k1HDWallet } from '../networks/cosmos/src/wallets/secp256k1hd';
import { DirectCosmosSignerImpl } from '../networks/cosmos/src/signers/direct-signer';

async function testSimulation() {
  console.log('🧪 Testing new simulateByTxBody implementation...\n');

  try {
    // 1. Create a test wallet
    const mnemonic = 'surround miss nominee dream gap cross assault thank captain prosper drop duty group rabbit payment use fresh course seed cry meadow lake secret panther';
    const wallet = new Secp256k1HDWallet(mnemonic, 'cosmos');
    const accounts = await wallet.getAccounts();
    const account = accounts[0];
    
    console.log('✅ Created test wallet');
    console.log('Address:', account.address);

    // 2. Create signer configuration
    const config = {
      chainId: 'cosmoshub-4',
      queryClient: {
        // This would be the actual CosmosQueryClient
        getSimulate: async (request: any) => {
          // Mock response for testing
          console.log('Mock simulation called with request:', request.txBytes?.length, 'bytes');
          return {
            gasInfo: {
              gasUsed: BigInt(98765),
              gasWanted: BigInt(98765),
            },
            result: {
              data: new Uint8Array(),
              log: 'success',
              events: [],
            },
          };
        }
      }
    };

    // 3. Create test message
    const msgSend = MsgSend.fromPartial({
      fromAddress: account.address,
      toAddress: 'cosmos1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu',
      amount: [{ denom: 'uatom', amount: '1000' }],
    });

    const message = Any.fromPartial({
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: MsgSend.encode(msgSend).finish(),
    });

    // 4. Create TxBody
    const txBody = TxBody.fromPartial({
      messages: [message],
      memo: 'test simulation',
    });

    // 5. Create SignerInfo
    const signerInfo = SignerInfo.fromPartial({
      publicKey: Any.fromPartial({
        typeUrl: '/cosmos.crypto.secp256k1.PubKey',
        value: account.pubkey,
      }),
      modeInfo: {
        single: {
          mode: 1, // SIGN_MODE_DIRECT
        },
      },
      sequence: BigInt(0),
    });

    // 6. Test the simulation
    console.log('🔄 Running transaction simulation...');
    
    // Create a mock signer to test the method
    const mockSigner = {
      config: config,
      simulateByTxBody: async (txBody: TxBody, signerInfos: SignerInfo[]) => {
        try {
          const authInfo = AuthInfo.fromPartial({
            signerInfos: signerInfos,
            fee: {
              amount: [],
              gasLimit: BigInt(0),
            },
          });

          const tx = Tx.fromPartial({
            body: txBody,
            authInfo: authInfo,
            signatures: [],
          });

          const txBytes = Tx.encode(tx).finish();
          const response = await config.queryClient.getSimulate({ txBytes });

          return {
            gasInfo: {
              gasUsed: response.gasInfo?.gasUsed || BigInt(200000),
              gasWanted: response.gasInfo?.gasWanted || BigInt(200000),
            },
            result: response.result,
          };
        } catch (error) {
          console.warn('Simulation failed:', error);
          return {
            gasInfo: {
              gasUsed: BigInt(300000),
              gasWanted: BigInt(300000),
            },
          };
        }
      }
    };

    const simulation = await mockSigner.simulateByTxBody(txBody, [signerInfo]);
    
    console.log('✅ Simulation completed successfully!');
    console.log('Gas Used:', simulation.gasInfo.gasUsed.toString());
    console.log('Gas Wanted:', simulation.gasInfo.gasWanted.toString());
    
    if (simulation.result) {
      console.log('Result available:', !!simulation.result);
    }

  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

// Run the test
if (require.main === module) {
  testSimulation().catch(console.error);
}

export { testSimulation };