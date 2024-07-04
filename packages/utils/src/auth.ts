import { BaseWallet, ByteAuth } from '@interchainjs/types';

export async function constructAuthsFromWallet(
  wallet: BaseWallet,
  isPubkeyCompressed: boolean
) {
  const accountAuths = await wallet.getAccountAuths();

  return accountAuths.map(({ account, auth }) => {
    const byteAuth = auth as ByteAuth;
    return {
      algo: account.algo,
      getPublicKey(isCompressed?: boolean) {
        if (isCompressed && isPubkeyCompressed) {
          return account.publicKey;
        }
        if (!isCompressed && !isPubkeyCompressed) {
          return account.publicKey;
        }
        throw new Error(
          `Failed to get ${
            isCompressed ? 'compressed' : 'uncompressed'
          } public key`
        );
      },
      sign(_data: Uint8Array) {
        return byteAuth.sign(_data);
      },
    };
  });
}
