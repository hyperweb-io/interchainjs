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
// const RPC_URL = 'https://bsc-testnet.bnbchain.org';

// Two example private keys
const privSender = '0x' + '0'.repeat(63) + '1';
const privReceiver = '0x' + '0'.repeat(63) + '2';

const signerSender = new SignerFromPrivateKey(privSender, RPC_URL);
const signerReceiver = new SignerFromPrivateKey(privReceiver, RPC_URL);

describe('sending Tests', () => {
  const senderAddress = signerSender.getAddress()
  const receiverAddress = signerReceiver.getAddress()

  // Instance to send from privSender
  let transfer: SignerFromPrivateKey;

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
      throw new Error(`eth_call returned invalid result: ${JSON.stringify(resp.data)}`);
    }
    return BigInt(hexBalance);
  }

  beforeAll(async () => {
    transfer = new SignerFromPrivateKey(privSender, RPC_URL);
    const chainId = await transfer['getChainId']();
    console.log('chainId from node:', chainId);

    const nonce = await transfer.getNonce();
    try {
      await transfer.sendLegacyTransactionAutoGasLimit(
        '', // no receiver while deploying smart contract
        0n,
        bytecode
      );
      usdtAddress = computeContractAddress(senderAddress, nonce);
      console.log('Computed usdtAddress:', usdtAddress);
    } catch (e) {
      console.error('Error deploying contract:', e);
    }

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
    const { txHash, wait } = await transfer.sendLegacyTransactionAutoGasLimit(
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
    const beforeSenderBalance = await signerSender.getBalance();
    const beforeReceiverBalance = await signerReceiver.getBalance();

    console.log('Sender balance before:', beforeSenderBalance.toString());
    console.log('Receiver balance before:', beforeReceiverBalance.toString());

    const valueWei = 10000000000000000n; // 0.01 ETH

    const currentSenderBalance = await signerSender.getBalance();
    console.log('Sender balance right before sending:', currentSenderBalance.toString());

    const { txHash, wait } = await transfer.sendEIP1559TransactionAutoGasLimit(
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

  it('should transfer USDT to receiver and verify balance increments by the transfer amount', async () => {
    const beforeReceiverBalance = await getUSDTBalance(receiverAddress);
    console.log('Before transfer, receiver USDT balance:', beforeReceiverBalance.toString());

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
    console.log('After transfer, receiver USDT balance:', afterReceiverBalance.toString());

    const delta = afterReceiverBalance - beforeReceiverBalance;
    console.log('Receiver USDT balance delta:', delta.toString());
    expect(delta).toBe(transferAmount);
  });

});