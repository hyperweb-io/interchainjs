import { Auth, BaseWallet } from "@interchainjs/types";

export async function constructAuthFromWallet(
  wallet: BaseWallet<any>,
  isPubkeyCompressed: boolean
) {
  const account = await wallet.getAccount();
  const auth: Auth = {
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
          isCompressed ? "compressed" : "uncompressed"
        } public key`
      );
    },
    sign(_data: Uint8Array) {
      throw new Error("Not implemented yet");
    },
  };
  return auth;
}
