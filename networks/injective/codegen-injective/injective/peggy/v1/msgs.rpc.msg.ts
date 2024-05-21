import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams } from "./msgs";
export interface Msg {
  valsetConfirm(signerAddress: string, message: MsgValsetConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  sendToEth(signerAddress: string, message: MsgSendToEth, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  requestBatch(signerAddress: string, message: MsgRequestBatch, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  confirmBatch(signerAddress: string, message: MsgConfirmBatch, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  depositClaim(signerAddress: string, message: MsgDepositClaim, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  withdrawClaim(signerAddress: string, message: MsgWithdrawClaim, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  valsetUpdateClaim(signerAddress: string, message: MsgValsetUpdatedClaim, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  eRC20DeployedClaim(signerAddress: string, message: MsgERC20DeployedClaim, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  setOrchestratorAddresses(signerAddress: string, message: MsgSetOrchestratorAddresses, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  cancelSendToEth(signerAddress: string, message: MsgCancelSendToEth, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  submitBadSignatureEvidence(signerAddress: string, message: MsgSubmitBadSignatureEvidence, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ValsetConfirm */
  valsetConfirm = async (signerAddress: string, message: MsgValsetConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgValsetConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SendToEth */
  sendToEth = async (signerAddress: string, message: MsgSendToEth, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSendToEth.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RequestBatch */
  requestBatch = async (signerAddress: string, message: MsgRequestBatch, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRequestBatch.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ConfirmBatch */
  confirmBatch = async (signerAddress: string, message: MsgConfirmBatch, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgConfirmBatch.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* DepositClaim */
  depositClaim = async (signerAddress: string, message: MsgDepositClaim, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDepositClaim.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawClaim */
  withdrawClaim = async (signerAddress: string, message: MsgWithdrawClaim, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawClaim.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ValsetUpdateClaim */
  valsetUpdateClaim = async (signerAddress: string, message: MsgValsetUpdatedClaim, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgValsetUpdatedClaim.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ERC20DeployedClaim */
  eRC20DeployedClaim = async (signerAddress: string, message: MsgERC20DeployedClaim, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgERC20DeployedClaim.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SetOrchestratorAddresses */
  setOrchestratorAddresses = async (signerAddress: string, message: MsgSetOrchestratorAddresses, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetOrchestratorAddresses.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CancelSendToEth */
  cancelSendToEth = async (signerAddress: string, message: MsgCancelSendToEth, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCancelSendToEth.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SubmitBadSignatureEvidence */
  submitBadSignatureEvidence = async (signerAddress: string, message: MsgSubmitBadSignatureEvidence, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSubmitBadSignatureEvidence.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams */
  updateParams = async (signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateParams.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};