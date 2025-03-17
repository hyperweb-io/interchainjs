import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';

describe('ETH Transfer Test', () => {
  let provider: ethers.JsonRpcProvider;
  let walletSender: ethers.Wallet;
  let walletReceiver: ethers.Wallet;
  let usdtAddress: string;
  let usdtContract: ethers.Contract;

  const privSender = '0x' + '0'.repeat(63) + '1';
  const privReceiver = '0x' + '0'.repeat(63) + '2';

  beforeAll(async () => {
    provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');
    // provider = new ethers.BrowserProvider(window.ethereum) // if in browser

    walletSender = new ethers.Wallet(privSender, provider);
    // walletSender = await provider.getSigner() // if in browser. like the offline signer in keplr cosmos

    walletReceiver = new ethers.Wallet(privReceiver, provider); // only used to receive token

    const usdtArtifactPath = path.join(__dirname, '../../contracts/usdt/contract.json');
    const usdtArtifact = JSON.parse(fs.readFileSync(usdtArtifactPath, 'utf8'));
    const { abi, bytecode } = usdtArtifact;
    const UsdtFactory = new ethers.ContractFactory(abi as any, bytecode, walletSender);
    usdtContract = await UsdtFactory.deploy() as ethers.Contract;
    await usdtContract.waitForDeployment();
    usdtAddress = await usdtContract.getAddress();

  }, 60000);

  it('should transfer ETH from wallet0 to wallet1 and check balances', async () => {
    const initialBalanceSender = await provider.getBalance(walletSender.address);
    const initialBalanceReceiver = await provider.getBalance(walletReceiver.address);

    const amountToSend = ethers.parseEther('0.01');

    const tx = await walletSender.sendTransaction({
      to: walletReceiver.address,
      value: amountToSend,
    });

    await tx.wait();

    const finalBalanceSender = await provider.getBalance(walletSender.address);
    const finalBalanceReceiver = await provider.getBalance(walletReceiver.address);

    expect(finalBalanceSender).toBeLessThan(initialBalanceSender);
    expect(finalBalanceReceiver).toBeGreaterThan(initialBalanceReceiver);
    expect(finalBalanceReceiver).toEqual(initialBalanceReceiver + amountToSend);
  }, 60000);

  it('should transfer USDT from sender to receiver', async () => {
    const decimals = 6;
    const amountToSend = ethers.parseUnits('100', decimals);

    const initialSenderBalance = await usdtContract.balanceOf(walletSender.address);
    const initialReceiverBalance = await usdtContract.balanceOf(walletReceiver.address);

    const tx = await (usdtContract.connect(walletSender) as ethers.Contract).transfer(walletReceiver.address, amountToSend);
    await tx.wait();

    const finalSenderBalance = await usdtContract.balanceOf(walletSender.address);
    const finalReceiverBalance = await usdtContract.balanceOf(walletReceiver.address);

    expect(finalSenderBalance).toEqual(initialSenderBalance - amountToSend);
    expect(finalReceiverBalance).toEqual(initialReceiverBalance + amountToSend);
  }, 60000);
});
