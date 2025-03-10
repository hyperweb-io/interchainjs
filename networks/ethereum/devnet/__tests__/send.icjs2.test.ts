import { JsonRpcProvider, Wallet, parseEther } from '@interchainjs/ethereum';

describe('ETH Transfer Test', () => {
  let provider: JsonRpcProvider;
  let sender: Wallet;
  let receiver: Wallet;

  const privateKeySender = '0x0000000000000000000000000000000000000000000000000000000000000001';
  const privateKeyReceiver = '0x0000000000000000000000000000000000000000000000000000000000000002';

  beforeAll(async () => {
    provider = new JsonRpcProvider('http://127.0.0.1:8545');
    sender = new Wallet(privateKeySender, provider);
    receiver = new Wallet(privateKeyReceiver, provider);
  });

  it('should transfer ETH from wallet0 to wallet1 and check balances', async () => {
    const initialBalanceOfSender = await provider.getBalance(sender.address);
    const initialBalanceOfReceiver = await provider.getBalance(receiver.address);

    const amountToSend = parseEther('0.01');

    const tx = await sender.sendTransaction({
      to: receiver.address,
      value: amountToSend,
    });

    await tx.wait();

    const finalBalance0 = await provider.getBalance(sender.address);
    const finalBalance1 = await provider.getBalance(receiver.address);

    expect(finalBalance0).toBeLessThan(initialBalanceOfSender);
    expect(finalBalance1).toEqual(initialBalanceOfReceiver + amountToSend);
  });
});