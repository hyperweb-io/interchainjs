import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgDepositClaim, MsgDepositClaimResponse, MsgWithdrawClaim, MsgWithdrawClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgBlacklistEthereumAddresses, MsgBlacklistEthereumAddressesResponse, MsgRevokeEthereumBlacklist, MsgRevokeEthereumBlacklistResponse } from "./msgs";
export interface Msg {
  valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
  withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
  valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
  eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
  setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse>;
  cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
  submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** BlacklistEthereumAddresses adds Ethereum addresses to the peggy blacklist. */
  blacklistEthereumAddresses(request: MsgBlacklistEthereumAddresses): Promise<MsgBlacklistEthereumAddressesResponse>;
  /**
   * RevokeEthereumBlacklist removes Ethereum addresses from the peggy
   * blacklist.
   */
  revokeEthereumBlacklist(request: MsgRevokeEthereumBlacklist): Promise<MsgRevokeEthereumBlacklistResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ValsetConfirm */
  valsetConfirm = async (request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> => {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetConfirm", data);
    return promise.then(data => MsgValsetConfirmResponse.decode(new BinaryReader(data)));
  };
  /* SendToEth */
  sendToEth = async (request: MsgSendToEth): Promise<MsgSendToEthResponse> => {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SendToEth", data);
    return promise.then(data => MsgSendToEthResponse.decode(new BinaryReader(data)));
  };
  /* RequestBatch */
  requestBatch = async (request: MsgRequestBatch): Promise<MsgRequestBatchResponse> => {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "RequestBatch", data);
    return promise.then(data => MsgRequestBatchResponse.decode(new BinaryReader(data)));
  };
  /* ConfirmBatch */
  confirmBatch = async (request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> => {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ConfirmBatch", data);
    return promise.then(data => MsgConfirmBatchResponse.decode(new BinaryReader(data)));
  };
  /* DepositClaim */
  depositClaim = async (request: MsgDepositClaim): Promise<MsgDepositClaimResponse> => {
    const data = MsgDepositClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "DepositClaim", data);
    return promise.then(data => MsgDepositClaimResponse.decode(new BinaryReader(data)));
  };
  /* WithdrawClaim */
  withdrawClaim = async (request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse> => {
    const data = MsgWithdrawClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "WithdrawClaim", data);
    return promise.then(data => MsgWithdrawClaimResponse.decode(new BinaryReader(data)));
  };
  /* ValsetUpdateClaim */
  valsetUpdateClaim = async (request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse> => {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetUpdateClaim", data);
    return promise.then(data => MsgValsetUpdatedClaimResponse.decode(new BinaryReader(data)));
  };
  /* ERC20DeployedClaim */
  eRC20DeployedClaim = async (request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse> => {
    const data = MsgERC20DeployedClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ERC20DeployedClaim", data);
    return promise.then(data => MsgERC20DeployedClaimResponse.decode(new BinaryReader(data)));
  };
  /* SetOrchestratorAddresses */
  setOrchestratorAddresses = async (request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse> => {
    const data = MsgSetOrchestratorAddresses.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SetOrchestratorAddresses", data);
    return promise.then(data => MsgSetOrchestratorAddressesResponse.decode(new BinaryReader(data)));
  };
  /* CancelSendToEth */
  cancelSendToEth = async (request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse> => {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "CancelSendToEth", data);
    return promise.then(data => MsgCancelSendToEthResponse.decode(new BinaryReader(data)));
  };
  /* SubmitBadSignatureEvidence */
  submitBadSignatureEvidence = async (request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse> => {
    const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SubmitBadSignatureEvidence", data);
    return promise.then(data => MsgSubmitBadSignatureEvidenceResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* BlacklistEthereumAddresses adds Ethereum addresses to the peggy blacklist. */
  blacklistEthereumAddresses = async (request: MsgBlacklistEthereumAddresses): Promise<MsgBlacklistEthereumAddressesResponse> => {
    const data = MsgBlacklistEthereumAddresses.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "BlacklistEthereumAddresses", data);
    return promise.then(data => MsgBlacklistEthereumAddressesResponse.decode(new BinaryReader(data)));
  };
  /* RevokeEthereumBlacklist removes Ethereum addresses from the peggy
   blacklist. */
  revokeEthereumBlacklist = async (request: MsgRevokeEthereumBlacklist): Promise<MsgRevokeEthereumBlacklistResponse> => {
    const data = MsgRevokeEthereumBlacklist.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "RevokeEthereumBlacklist", data);
    return promise.then(data => MsgRevokeEthereumBlacklistResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};