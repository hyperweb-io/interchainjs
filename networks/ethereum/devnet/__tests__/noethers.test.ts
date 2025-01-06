// EthereumTransferNoLibV12.legacy.test.ts
import { EthereumTransferNoLibV12 } from '../../src/EthereumTransfer'; 
// Adjust the import path as needed
import axios from 'axios';
import { hexToBytes, bytesToHex } from 'ethereum-cryptography/utils';
import { secp256k1 } from '@noble/curves/secp256k1';
import { keccak256 } from 'ethereum-cryptography/keccak';

// RPC endpoint for your local/test environment.
// E.g., Hardhat node: http://127.0.0.1:8545
// or a testnet node: https://goerli.infura.io/v3/...
const RPC_URL = 'http://127.0.0.1:8545';

// Two example private keys
const privSender = '0x' + '0'.repeat(63) + '1';
const privReceiver = '0x' + '0'.repeat(63) + '2';

/**
 * Helper to derive an address from a private key (uncompressed).
 */
function deriveAddressFromPrivateKey(pk: string): string {
  const pkBytes = hexToBytes(pk.replace(/^0x/, ''));
  const pubUncompressed = secp256k1.getPublicKey(pkBytes, false); // 65 bytes
  const pubNoPrefix = pubUncompressed.slice(1); // remove 0x04
  const hash = keccak256(pubNoPrefix);
  const addrBytes = hash.slice(-20);
  return '0x' + bytesToHex(addrBytes);
}

/**
 * Helper to query ETH balance via JSON-RPC (eth_getBalance).
 * Returns a BigInt (balance in wei).
 */
async function getBalance(address: string): Promise<bigint> {
  const payload = {
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: [address, 'latest'],
    id: 1,
  };
  const resp = await axios.post(RPC_URL, payload);
  return BigInt(resp.data.result);
}

describe('EthereumTransferNoLibV12 (Legacy Transaction) Tests', () => {
  const senderAddress = deriveAddressFromPrivateKey(privSender);
  console.log('Derived senderAddress =', senderAddress);
  const receiverAddress = deriveAddressFromPrivateKey(privReceiver);

  // Instance to send from privSender
  let transfer: EthereumTransferNoLibV12;

  beforeAll(async () => {
    transfer = new EthereumTransferNoLibV12(privSender, RPC_URL);
    const chainId = await transfer['getChainId']();
    console.log('chainId from node:', chainId);
  });

  it('should send legacy transaction from sender to receiver, and check balances', async () => {
    // 1) Check initial balances
    const beforeSenderBalance = await getBalance(senderAddress);
    const beforeReceiverBalance = await getBalance(receiverAddress);

    console.log('Sender balance before:', beforeSenderBalance.toString());
    console.log('Receiver balance before:', beforeReceiverBalance.toString());

    // 2) Prepare legacy transaction fields
    // e.g., sending
    const valueWei = 10000000000000000n; // 0.01 ETH
    const gasLimit = 21000n;             // minimal for simple transfer

    // 3) Fetch gas price from the node
    const gasPrice = await transfer.getGasPrice();
    console.log('Current gas price:', gasPrice.toString());

    console.log('gasPrice * gasLimit', gasPrice*BigInt(gasLimit))

    // **New Code Addition: Print Sender's Balance Before Sending**
    // This is to verify the sender's balance right before the transaction
    const currentSenderBalance = await getBalance(senderAddress);
    console.log('Sender balance right before sending:', currentSenderBalance.toString());

    // 4) Send legacy transaction
    const txHash = await transfer.sendLegacyTransaction(
      receiverAddress,
      valueWei,
      gasPrice, // Convert BigInt to string
      gasLimit
    );
    expect(txHash).toMatch(/^0x[0-9a-fA-F]+$/);

    console.log('Legacy txHash:', txHash);

    // 5) (Optional) Wait for transaction to be mined
    // For local nodes, this might not be necessary as transactions are mined instantly
    // For testnets, implement a polling mechanism or use WebSocket subscriptions
    // Here, we'll poll for the receipt until it's available
    async function getTransactionReceipt(txHash: string): Promise<any> {
      while (true) {
        const receiptPayload = {
          jsonrpc: '2.0',
          method: 'eth_getTransactionReceipt',
          params: [txHash],
          id: 1,
        };
        const receiptResp = await axios.post(RPC_URL, receiptPayload);
        if (receiptResp.data.result) {
          return receiptResp.data.result;
        }
        // Wait for a short interval before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    const receipt = await getTransactionReceipt(txHash);
    expect(receipt.status).toBe('0x1'); // '0x1' indicates success

    // 6) Check final balances
    const afterSenderBalance = await getBalance(senderAddress);
    const afterReceiverBalance = await getBalance(receiverAddress);

    console.log('Sender balance after:', afterSenderBalance.toString());
    console.log('Receiver balance after:', afterReceiverBalance.toString());

    // 7) Validate changes
    const senderDelta = beforeSenderBalance - afterSenderBalance;  // how much sender lost
    const receiverDelta = afterReceiverBalance - beforeReceiverBalance; // how much receiver gained

    console.log('Sender delta:', senderDelta.toString());
    console.log('Receiver delta:', receiverDelta.toString());

    // The receiver should gain exactly "valueWei"
    expect(receiverDelta).toBe(BigInt(valueWei));

    // The sender should lose at least "valueWei" (plus gas fees).
    // So, we just check that the sender's lost amount >= valueWei
    expect(senderDelta).toBeGreaterThanOrEqual(BigInt(valueWei));
  }, 60000); // Increased Jest timeout to 60s for potential network delays
});