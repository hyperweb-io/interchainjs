import { ethers } from 'ethers';
import { EthereumGenericOfflineSigner, IEthereumGenericOfflineSigner } from "@interchainjs/ethereum/types/wallet";
import { Eip712Signer } from "@interchainjs/ethereum/signers/eip712";

const ENDPOINT = 'http://127.0.0.1:8545';

describe('ETH Transfer Test', () => {
  let provider: ethers.JsonRpcProvider;
  let wallet0: ethers.Wallet;
  let wallet1: ethers.Wallet;

  let offlineSigner1: IEthereumGenericOfflineSigner;
  let eip712Signer: Eip712Signer;

  const privateKey0 = '0x0000000000000000000000000000000000000000000000000000000000000001';
  const privateKey1 = '0x0000000000000000000000000000000000000000000000000000000000000002';

  beforeAll(async () => {
    provider = new ethers.JsonRpcProvider(ENDPOINT);
    // provider = new ethers.BrowserProvider(window.ethereum) // if in browser

    wallet0 = new ethers.Wallet(privateKey0, provider);
    // wallet0 = await provider.getSigner() // if in browser. like the offline signer in keplr cosmos

    wallet1 = new ethers.Wallet(privateKey1, provider); // only used to receive token

    offlineSigner1 = new EthereumGenericOfflineSigner(wallet0);

    eip712Signer = await Eip712Signer.fromWallet(offlineSigner1, ENDPOINT);
  });

  it('should transfer ETH from wallet0 to wallet1 and check balances', async () => {
    const initialBalance0 = await provider.getBalance(wallet0.address);
    const initialBalance1 = await provider.getBalance(wallet1.address);

    const amountToSend = ethers.parseEther('0.01');

    const tx = await eip712Signer.signAndBroadcast({
      to: wallet1.address,
      value: amountToSend,
    });

    await tx.wait();

    const finalBalance0 = await provider.getBalance(wallet0.address);
    const finalBalance1 = await provider.getBalance(wallet1.address);

    expect(finalBalance0).toBeLessThan(initialBalance0);
    expect(finalBalance1).toBeGreaterThan(initialBalance1);
    expect(finalBalance1).toEqual(initialBalance1 + amountToSend);
  });
});