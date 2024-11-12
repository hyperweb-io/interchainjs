import { ethers } from 'ethers';

describe('ETH Transfer Test', () => {
  let provider: ethers.JsonRpcProvider;
  let wallet0: ethers.Wallet;
  let wallet1: ethers.Wallet;

  const privateKey0 = '0x0000000000000000000000000000000000000000000000000000000000000001';
  const privateKey1 = '0x0000000000000000000000000000000000000000000000000000000000000002';

  beforeAll(async () => {
    provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');
    // provider = new ethers.BrowserProvider(window.ethereum) // if in browser

    wallet0 = new ethers.Wallet(privateKey0, provider);
    // wallet0 = await provider.getSigner() // if in browser. like the offline signer in keplr cosmos

    wallet1 = new ethers.Wallet(privateKey1, provider); // only used to receive token
  });

  it('should transfer ETH from wallet0 to wallet1 and check balances', async () => {
    const initialBalance0 = await provider.getBalance(wallet0.address);
    const initialBalance1 = await provider.getBalance(wallet1.address);

    const amountToSend = ethers.parseEther('0.01');

    const tx = await wallet0.sendTransaction({
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