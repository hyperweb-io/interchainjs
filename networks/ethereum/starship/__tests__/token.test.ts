import { SignerFromPrivateKey } from '../../src/signers/SignerFromPrivateKey';
// Adjust the import path as needed
import axios from 'axios';
import { computeContractAddress } from '../../src/utils/common';
import { bytecode, abi } from '../../contracts/usdt/contract.json'
import { ContractEncoder, AbiFunctionItem } from '../../src/utils/ContractEncoder';

// RPC endpoint for your local/test environment.
// E.g., Hardhat node: http://127.0.0.1:8545
// or a testnet node: https://goerli.infura.io/v3/...
const RPC_URL = 'http://127.0.0.1:8545';
// const RPC_URL = 'https://bsc-testnet.bnbchain.org'

// Two example private keys
const privSender = '0x' + '0'.repeat(63) + '1';
const privReceiver = '0x' + '0'.repeat(63) + '2';

const signerSender = new SignerFromPrivateKey(privSender, RPC_URL);
const signerReceiver = new SignerFromPrivateKey(privReceiver, RPC_URL);

describe('sending Tests', () => {
  const senderAddress = signerSender.getAddress()
  const receiverAddress = signerReceiver.getAddress()

  // Instance to send from privSender
  // let transfer: SignerFromPrivateKey;

  let usdtAddress: string

  const usdt = new ContractEncoder(abi as AbiFunctionItem[]);

  async function getUSDTBalance(addr: string): Promise<bigint> {
    const dataHex = usdt.balanceOf(addr);
    const callPayload = {
      jsonrpc: '2.0',
      method: 'eth_call',
      params: [
        {
          to: usdtAddress,
          data: dataHex,
        },
        'latest',
      ],
      id: 1,
    };

    const resp = await axios.post(RPC_URL, callPayload);
    const hexBalance = resp.data.result;
    if (hexBalance === undefined || hexBalance === null) {
      console.error('Error: eth_call did not return a valid result. Full response:', resp.data);
      throw new Error('eth_call returned an undefined result');
    }
    return BigInt(hexBalance);
  }

  beforeAll(async () => {


  }, 60000); // Increased Jest timeout to 60s for potential network delays

  it('should send ETH from sender to receiver, and check balances', async () => {
    // return
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
    const { txHash, wait } = await signerSender.sendLegacyTransactionAutoGasLimit(
      receiverAddress,
      valueWei
    );
    expect(txHash).toMatch(/^0x[0-9a-fA-F]+$/);

    console.log('sending txHash:', txHash);

    const receipt = await wait();
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

  it('should send ETH from sender to receiver via EIP-1559, and check balances', async () => {
    // return
    const beforeSenderBalance = await signerSender.getBalance();
    const beforeReceiverBalance = await signerReceiver.getBalance();

    console.log('Sender balance before:', beforeSenderBalance.toString());
    console.log('Receiver balance before:', beforeReceiverBalance.toString());

    const valueWei = 10000000000000000n; // 0.01 ETH

    const currentSenderBalance = await signerSender.getBalance();
    console.log('Sender balance right before sending:', currentSenderBalance.toString());

    const { txHash, wait } = await signerSender.sendEIP1559TransactionAutoGasLimit(
      receiverAddress,
      valueWei
    );
    expect(txHash).toMatch(/^0x[0-9a-fA-F]+$/);

    console.log('EIP-1559 sending txHash:', txHash);

    const receipt = await wait();
    expect(receipt.status).toBe('0x1');

    const afterSenderBalance = await signerSender.getBalance();
    const afterReceiverBalance = await signerReceiver.getBalance();

    console.log('Sender balance after:', afterSenderBalance.toString());
    console.log('Receiver balance after:', afterReceiverBalance.toString());

    const senderDelta = beforeSenderBalance - afterSenderBalance;
    const receiverDelta = afterReceiverBalance - beforeReceiverBalance;

    console.log('Sender delta:', senderDelta.toString());
    console.log('Receiver delta:', receiverDelta.toString());

    expect(receiverDelta).toBe(valueWei);

    expect(senderDelta).toBeGreaterThanOrEqual(valueWei);
  }, 60000);

  // return
  it('should transfer USDT to receiver and verify balance increments by the transfer amount', async () => {
    // return
    let transfer = new SignerFromPrivateKey(privSender, RPC_URL);

    try {
      const { txHash, wait } = await transfer.sendLegacyTransactionAutoGasLimit(
        '', // no receiver while deploying smart contract
        0n,
        bytecode
      );
      const receipt = await wait();
      // console.log('Deployed USDT contract receipt:', receipt);
      usdtAddress = receipt.contractAddress;
      // console.log('Deployed USDT contract address:', usdtAddress);
    } catch (e) {
      console.error('Error deploying contract:', e);
      throw e;
    }

    const beforeReceiverBalance = await getUSDTBalance(receiverAddress);
    // console.log('Before transfer, receiver USDT balance:', beforeReceiverBalance.toString());

    const transferAmount = 1_000_000_000_000_000_000n; // 1 USDT

    const dataHex = usdt.transfer(receiverAddress, transferAmount);

    const { txHash, wait } = await transfer.sendLegacyTransactionAutoGasLimit(
      usdtAddress,
      0n,
      dataHex
    );
    expect(txHash).toMatch(/^0x[0-9a-fA-F]+$/);

    const receipt = await wait();
    expect(receipt.status).toBe('0x1');

    const afterReceiverBalance = await getUSDTBalance(receiverAddress);
    // console.log('After transfer, receiver USDT balance:', afterReceiverBalance.toString());

    const delta = afterReceiverBalance - beforeReceiverBalance;
    // console.log('Receiver USDT balance delta:', delta.toString());
    expect(delta).toBe(transferAmount);
  }, 60000);

  it('should sign a message using personalSign and verify the signature', async () => {
    // Plain text message to sign
    const message = 'Hello, Ethereum!';

    // Sign the message with the sender's private key
    const signature = signerSender.personalSign(message);

    // Verify the signature should match the sender address
    const isValidSender = SignerFromPrivateKey.verifyPersonalSignature(
      message,
      signature,
      senderAddress
    );
    expect(isValidSender).toBe(true);

    // The signature should NOT be valid for a different address
    const isValidReceiver = SignerFromPrivateKey.verifyPersonalSignature(
      message,
      signature,
      receiverAddress
    );
    expect(isValidReceiver).toBe(false);

    // Test with a hex message
    const hexMessage = '0x1234abcd';
    const hexSignature = signerSender.personalSign(hexMessage);

    // Verify the hex message signature
    const isValidHexMessage = SignerFromPrivateKey.verifyPersonalSignature(
      hexMessage,
      hexSignature,
      senderAddress
    );
    expect(isValidHexMessage).toBe(true);

    // Test with a modified message (should fail verification)
    const isValidModifiedMessage = SignerFromPrivateKey.verifyPersonalSignature(
      message + '!',  // modified message
      signature,
      senderAddress
    );
    expect(isValidModifiedMessage).toBe(false);

    // Test with a tampered signature (modify the last byte)
    const tamperedSig = signature.slice(0, -2) + (signature.slice(-2) === 'ff' ? '00' : 'ff');
    const isValidTamperedSig = SignerFromPrivateKey.verifyPersonalSignature(
      message,
      tamperedSig,
      senderAddress
    );
    expect(isValidTamperedSig).toBe(false);

    console.log('Message:', message);
    console.log('Signature:', signature);
    console.log('Verified for signer address:', isValidSender);
  }, 10000);
});