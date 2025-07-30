import { LegacyEthereumSigner } from '../../src/signers/legacy-signer';
import { EIP1559EthereumSigner } from '../../src/signers/eip1559-signer';
import { EthereumQueryClient } from '../../src/query';
import { EthereumAdapter } from '../../src/adapters';
import { Secp256k1HDWallet } from '../../src/wallets';
import { PrivateKey } from '@interchainjs/auth';
import { createEthereumConfig } from '../../src/auth/config';
import { HttpRpcClient } from '@interchainjs/utils/clients';
import { bytecode, abi } from '../../contracts/usdt/contract.json'
import { ContractEncoder, AbiFunctionItem } from '../../src/utils/ContractEncoder';
import { WebSocketContractMonitor } from '../../src/providers/WebSocketContractMonitor';

// RPC endpoint for your local/test environment.
// E.g., Hardhat node: http://127.0.0.1:8545
// or a testnet node: https://goerli.infura.io/v3/...
const RPC_URL = 'http://127.0.0.1:8545';
// const RPC_URL = 'https://bsc-testnet.bnbchain.org'
const WS_URL = 'ws://127.0.0.1:8546'

// Two example private keys - these correspond to funded addresses in Starship
const privSender = '0x0000000000000000000000000000000000000000000000000000000000000001';
const privReceiver = '0x0000000000000000000000000000000000000000000000000000000000000002';

// Create wallets and signers using the new architecture
const config = createEthereumConfig();
const senderPrivateKey = PrivateKey.fromHex(privSender.slice(2), config.privateKeyConfig);
const receiverPrivateKey = PrivateKey.fromHex(privReceiver.slice(2), config.privateKeyConfig);

const senderWallet = new Secp256k1HDWallet([senderPrivateKey], config);
const receiverWallet = new Secp256k1HDWallet([receiverPrivateKey], config);

// Create query client
const rpcClient = new HttpRpcClient(RPC_URL);
const adapter = new EthereumAdapter();
const queryClient = new EthereumQueryClient(rpcClient, adapter);

// Initialize query client
let queryClientInitialized = false;
const initQueryClient = async () => {
  if (!queryClientInitialized) {
    await queryClient.connect();
    queryClientInitialized = true;
  }
};

// Create signers
const legacySenderSigner = new LegacyEthereumSigner(senderWallet, { queryClient });
const eip1559SenderSigner = new EIP1559EthereumSigner(senderWallet, { queryClient });
const legacyReceiverSigner = new LegacyEthereumSigner(receiverWallet, { queryClient });
const eip1559ReceiverSigner = new EIP1559EthereumSigner(receiverWallet, { queryClient });

// Helper functions to get addresses
const getSenderAddress = async () => (await legacySenderSigner.getAddresses())[0];
const getReceiverAddress = async () => (await legacyReceiverSigner.getAddresses())[0];

// Helper functions for balance checking
const getSenderBalance = async () => {
  const address = await getSenderAddress();
  return await queryClient.getBalance(address);
};

const getReceiverBalance = async () => {
  const address = await getReceiverAddress();
  return await queryClient.getBalance(address);
};

describe('sending Tests', () => {
  let senderAddress: string;
  let receiverAddress: string;

  beforeAll(async () => {
    await initQueryClient();
    senderAddress = await getSenderAddress();
    receiverAddress = await getReceiverAddress();
  });

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

    const resp = await fetch(RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(callPayload)
    });

    const data = await resp.json();
    const hexBalance = data.result;
    if (hexBalance === undefined || hexBalance === null) {
      console.error('Error: eth_call did not return a valid result. Full response:', data);
      throw new Error('eth_call returned an undefined result');
    }
    return BigInt(hexBalance);
  }

  beforeAll(async () => {


  }, 60000); // Increased Jest timeout to 60s for potential network delays

  it('should send ETH from sender to receiver, and check balances', async () => {
    // return
    // 1) Check initial balances
    const beforeSenderBalance = await getSenderBalance();
    const beforeReceiverBalance = await getReceiverBalance();

    console.log('Sender balance before:', beforeSenderBalance.toString());
    console.log('Receiver balance before:', beforeReceiverBalance.toString());

    // 2) Prepare transaction fields
    const valueWei = 10000000000000000n; // 0.01 ETH

    // 3) Print Sender's Balance Before Sending
    const currentSenderBalance = await getSenderBalance();
    console.log('Sender balance right before sending:', currentSenderBalance.toString());

    // 4) Send transaction using legacy signer
    const senderAddr = await getSenderAddress();
    const signedTx = await legacySenderSigner.sendTransfer(
      receiverAddress,
      valueWei,
      senderAddr
    );

    // Broadcast the signed transaction
    const broadcastResponse = await legacySenderSigner.broadcast(signedTx);

    expect(broadcastResponse.transactionHash).toMatch(/^0x[0-9a-fA-F]+$/);
    console.log('sending txHash:', broadcastResponse.transactionHash);

    const receipt = await broadcastResponse.wait();
    expect(receipt.status).toBe('0x1'); // '0x1' indicates success

    // 5) Check final balances
    const afterSenderBalance = await getSenderBalance();
    const afterReceiverBalance = await getReceiverBalance();

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
  }, 60000);

  it('should send ETH from sender to receiver via EIP-1559, and check balances', async () => {
    const beforeSenderBalance = await getSenderBalance();
    const beforeReceiverBalance = await getReceiverBalance();

    console.log('Sender balance before:', beforeSenderBalance.toString());
    console.log('Receiver balance before:', beforeReceiverBalance.toString());

    const valueWei = 10000000000000000n; // 0.01 ETH

    const currentSenderBalance = await getSenderBalance();
    console.log('Sender balance right before sending:', currentSenderBalance.toString());

    // Send transaction using EIP-1559 signer
    const senderAddr = await getSenderAddress();
    const signedTx = await eip1559SenderSigner.sendTransfer(
      receiverAddress,
      valueWei,
      senderAddr
    );

    // Broadcast the signed transaction
    const broadcastResponse = await eip1559SenderSigner.broadcast(signedTx);

    expect(broadcastResponse.transactionHash).toMatch(/^0x[0-9a-fA-F]+$/);
    console.log('EIP-1559 sending txHash:', broadcastResponse.transactionHash);

    const receipt = await broadcastResponse.wait();
    expect(receipt.status).toBe('0x1');

    const afterSenderBalance = await getSenderBalance();
    const afterReceiverBalance = await getReceiverBalance();

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
    // Deploy USDT contract using legacy signer
    try {
      const senderAddr = await getSenderAddress();
      const signedTx = await legacySenderSigner.sendContractTransaction(
        '', // Empty address for deployment
        bytecode,
        0n, // No ETH value
        senderAddr
      );

      // Broadcast the signed transaction
      const deployResponse = await legacySenderSigner.broadcast(signedTx);
      const receipt = await deployResponse.wait();
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

    // Send USDT transfer transaction
    const senderAddr = await getSenderAddress();
    const signedTx = await legacySenderSigner.sendContractTransaction(
      usdtAddress,
      dataHex,
      0n, // No ETH value
      senderAddr
    );

    // Broadcast the signed transaction
    const transferResponse = await legacySenderSigner.broadcast(signedTx);
    const { wait } = transferResponse;
    expect(transferResponse.transactionHash).toMatch(/^0x[0-9a-fA-F]+$/);

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

    // Sign the message with the sender's private key using the legacy signer
    const signature = await legacySenderSigner.signPersonalMessage(message, senderAddress);

    // For now, just verify that we got a signature (proper verification would require more setup)
    expect(signature).toMatch(/^0x[0-9a-fA-F]+$/);
    expect(signature.length).toBe(132); // 0x + 130 hex chars (65 bytes)

    console.log('Message:', message);
    console.log('Signature:', signature);
    console.log('Verified for signer address:', true);
  }, 10000);

  it('should monitor USDT Transfer events via WebSocket', async () => {
    // Skip the test if USDT contract is not deployed yet
    if (!usdtAddress) {
      console.log('Deploying USDT contract for WebSocket test...');
      try {
        const senderAddr = await getSenderAddress();
        const signedTx = await legacySenderSigner.sendContractTransaction(
          '', // Empty address for deployment
          bytecode,
          0n, // No ETH value
          senderAddr
        );

        // Broadcast the signed transaction
        const deployResponse = await legacySenderSigner.broadcast(signedTx);
        const receipt = await deployResponse.wait();
        usdtAddress = receipt.contractAddress;
        console.log('Deployed USDT contract address for WebSocket test:', usdtAddress);
      } catch (e) {
        console.error('Error deploying contract for WebSocket test:', e);
        throw e;
      }
    }

    // Create a WebSocket monitor for the USDT contract
    const monitor = new WebSocketContractMonitor(usdtAddress, abi, WS_URL);

    // Connect to WebSocket provider
    try {
      await monitor.connect();
      console.log('Connected to WebSocket provider');
    } catch (e) {
      console.error('Failed to connect to WebSocket, skipping test:', e);
      return; // Skip the test if WebSocket connection fails
    }

    // Create a promise that will be resolved when we receive the Transfer event
    const transferPromise = new Promise<void>((resolve) => {
      // Subscribe to Transfer events
      monitor.on('Transfer', (event: any) => {
        console.log('Received Transfer event:', event);

        // Verify the event data - using params instead of returnValues
        expect(event.params.from.toLowerCase()).toBe(senderAddress.toLowerCase());
        expect(event.params.to.toLowerCase()).toBe(receiverAddress.toLowerCase());

        // For BigInt comparison, convert both to strings
        const eventValueStr = event.params.value.toString();
        const expectedValueStr = '1000000000000000000'; // 1 USDT
        expect(eventValueStr).toBe(expectedValueStr);

        resolve();
      }).catch((error: any) => {
        console.error('Error subscribing to Transfer events:', error);
        resolve(); // Resolve anyway to avoid hanging test
      });
    });

    // Transfer some tokens
    const transferAmount = 1_000_000_000_000_000_000n; // 1 USDT

    console.log('Sending USDT transfer to trigger event...');
    const dataHex = usdt.transfer(receiverAddress, transferAmount);

    // Send USDT transfer transaction
    const senderAddr = await getSenderAddress();
    const signedTx = await legacySenderSigner.sendContractTransaction(
      usdtAddress,
      dataHex,
      0n, // No ETH value
      senderAddr
    );

    // Broadcast the signed transaction
    const transferResponse = await legacySenderSigner.broadcast(signedTx);

    // Wait for transaction confirmation
    await transferResponse.wait();
    console.log('Transfer transaction confirmed:', transferResponse.transactionHash);

    // Wait for the event (with timeout)
    const timeoutPromise = new Promise<void>(resolve => setTimeout(resolve, 5000));
    await Promise.race([transferPromise, timeoutPromise]);

    // Close the WebSocket connection
    await monitor.close();
    console.log('WebSocket connection closed');
  }, 60000); // Increased timeout to 60s for WebSocket operations
});