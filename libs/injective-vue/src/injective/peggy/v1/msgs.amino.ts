import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
export const AminoConverter = {
  "/injective.peggy.v1.MsgValsetConfirm": {
    aminoType: "peggy/MsgValsetConfirm",
    toAmino: MsgValsetConfirm.toAmino,
    fromAmino: MsgValsetConfirm.fromAmino
  },
  "/injective.peggy.v1.MsgSendToEth": {
    aminoType: "peggy/MsgSendToEth",
    toAmino: MsgSendToEth.toAmino,
    fromAmino: MsgSendToEth.fromAmino
  },
  "/injective.peggy.v1.MsgRequestBatch": {
    aminoType: "peggy/MsgRequestBatch",
    toAmino: MsgRequestBatch.toAmino,
    fromAmino: MsgRequestBatch.fromAmino
  },
  "/injective.peggy.v1.MsgConfirmBatch": {
    aminoType: "peggy/MsgConfirmBatch",
    toAmino: MsgConfirmBatch.toAmino,
    fromAmino: MsgConfirmBatch.fromAmino
  },
  "/injective.peggy.v1.MsgDepositClaim": {
    aminoType: "peggy/MsgDepositClaim",
    toAmino: MsgDepositClaim.toAmino,
    fromAmino: MsgDepositClaim.fromAmino
  },
  "/injective.peggy.v1.MsgWithdrawClaim": {
    aminoType: "peggy/MsgWithdrawClaim",
    toAmino: MsgWithdrawClaim.toAmino,
    fromAmino: MsgWithdrawClaim.fromAmino
  },
  "/injective.peggy.v1.MsgValsetUpdatedClaim": {
    aminoType: "peggy/MsgValsetUpdatedClaim",
    toAmino: MsgValsetUpdatedClaim.toAmino,
    fromAmino: MsgValsetUpdatedClaim.fromAmino
  },
  "/injective.peggy.v1.MsgERC20DeployedClaim": {
    aminoType: "peggy/MsgERC20DeployedClaim",
    toAmino: MsgERC20DeployedClaim.toAmino,
    fromAmino: MsgERC20DeployedClaim.fromAmino
  },
  "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
    aminoType: "peggy/MsgSetOrchestratorAddresses",
    toAmino: MsgSetOrchestratorAddresses.toAmino,
    fromAmino: MsgSetOrchestratorAddresses.fromAmino
  },
  "/injective.peggy.v1.MsgCancelSendToEth": {
    aminoType: "peggy/MsgCancelSendToEth",
    toAmino: MsgCancelSendToEth.toAmino,
    fromAmino: MsgCancelSendToEth.fromAmino
  },
  "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
    aminoType: "peggy/MsgSubmitBadSignatureEvidence",
    toAmino: MsgSubmitBadSignatureEvidence.toAmino,
    fromAmino: MsgSubmitBadSignatureEvidence.fromAmino
  },
  "/injective.peggy.v1.MsgUpdateParams": {
    aminoType: "peggy/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/injective.peggy.v1.MsgBlacklistEthereumAddresses": {
    aminoType: "peggy/MsgBlacklistEthereumAddresses",
    toAmino: MsgBlacklistEthereumAddresses.toAmino,
    fromAmino: MsgBlacklistEthereumAddresses.fromAmino
  },
  "/injective.peggy.v1.MsgRevokeEthereumBlacklist": {
    aminoType: "peggy/MsgRevokeEthereumBlacklist",
    toAmino: MsgRevokeEthereumBlacklist.toAmino,
    fromAmino: MsgRevokeEthereumBlacklist.fromAmino
  }
};