import { BaseAccount } from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth";

export function isBaseAccount(o: any): o is BaseAccount {
  return o && (o.$typeUrl === BaseAccount.typeUrl || typeof o.address === "string" && typeof o.accountNumber === "bigint" && typeof o.sequence === "bigint");
}