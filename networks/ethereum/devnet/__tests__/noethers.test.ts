import { SignerFromPrivateKey } from '../../src/SignerFromPrivateKey'; 
// Adjust the import path as needed
import axios from 'axios';

// RPC endpoint for your local/test environment.
// E.g., Hardhat node: http://127.0.0.1:8545
// or a testnet node: https://goerli.infura.io/v3/...
const RPC_URL = 'http://127.0.0.1:8545';

// Two example private keys
const privSender = '0x' + '0'.repeat(63) + '1';
const privReceiver = '0x' + '0'.repeat(63) + '2';

const signerSender = new SignerFromPrivateKey(privSender, RPC_URL);
const signerReceiver = new SignerFromPrivateKey(privReceiver, RPC_URL);

describe('sending Tests', () => {
  const receiverAddress = signerReceiver.getAddress()

  // Instance to send from privSender
  let transfer: SignerFromPrivateKey;

  beforeAll(async () => {
    transfer = new SignerFromPrivateKey(privSender, RPC_URL);
    const chainId = await transfer['getChainId']();
    console.log('chainId from node:', chainId);
  });

  it('should send ETH from sender to receiver, and check balances', async () => {
    // 1) Check initial balances
    const beforeSenderBalance = await signerSender.getBalance();
    const beforeReceiverBalance = await signerReceiver.getBalance();

    console.log('Sender balance before:', beforeSenderBalance.toString());
    console.log('Receiver balance before:', beforeReceiverBalance.toString());

    // 2) Prepare transaction fields
    // e.g., sending
    const valueWei = 10000000000000000n; // 0.01 ETH

    // **New Code Addition: Print Sender's Balance Before Sending**
    // This is to verify the sender's balance right before the transaction
    const currentSenderBalance = await signerSender.getBalance();
    console.log('Sender balance right before sending:', currentSenderBalance.toString());

    // 4) Send transaction
    const txHash = await transfer.sendLegacyTransactionAutoGasLimit(
      receiverAddress,
      valueWei
    );
    expect(txHash).toMatch(/^0x[0-9a-fA-F]+$/);

    console.log('sending txHash:', txHash);

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
    const afterSenderBalance = await signerSender.getBalance();
    const afterReceiverBalance = await signerReceiver.getBalance();

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