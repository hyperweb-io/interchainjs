import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams } from "./msgs";
export const AminoConverter = {
  "/injective.peggy.v1.MsgValsetConfirm": {
    aminoType: "/injective.peggy.v1.MsgValsetConfirm",
    toAmino: MsgValsetConfirm.toAmino,
    fromAmino: MsgValsetConfirm.fromAmino
  },
  "/injective.peggy.v1.MsgSendToEth": {
    aminoType: "/injective.peggy.v1.MsgSendToEth",
    toAmino: MsgSendToEth.toAmino,
    fromAmino: MsgSendToEth.fromAmino
  },
  "/injective.peggy.v1.MsgRequestBatch": {
    aminoType: "/injective.peggy.v1.MsgRequestBatch",
    toAmino: MsgRequestBatch.toAmino,
    fromAmino: MsgRequestBatch.fromAmino
  },
  "/injective.peggy.v1.MsgConfirmBatch": {
    aminoType: "/injective.peggy.v1.MsgConfirmBatch",
    toAmino: MsgConfirmBatch.toAmino,
    fromAmino: MsgConfirmBatch.fromAmino
  },
  "/injective.peggy.v1.MsgDepositClaim": {
    aminoType: "/injective.peggy.v1.MsgDepositClaim",
    toAmino: MsgDepositClaim.toAmino,
    fromAmino: MsgDepositClaim.fromAmino
  },
  "/injective.peggy.v1.MsgWithdrawClaim": {
    aminoType: "/injective.peggy.v1.MsgWithdrawClaim",
    toAmino: MsgWithdrawClaim.toAmino,
    fromAmino: MsgWithdrawClaim.fromAmino
  },
  "/injective.peggy.v1.MsgValsetUpdatedClaim": {
    aminoType: "/injective.peggy.v1.MsgValsetUpdatedClaim",
    toAmino: MsgValsetUpdatedClaim.toAmino,
    fromAmino: MsgValsetUpdatedClaim.fromAmino
  },
  "/injective.peggy.v1.MsgERC20DeployedClaim": {
    aminoType: "/injective.peggy.v1.MsgERC20DeployedClaim",
    toAmino: MsgERC20DeployedClaim.toAmino,
    fromAmino: MsgERC20DeployedClaim.fromAmino
  },
  "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
    aminoType: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
    toAmino: MsgSetOrchestratorAddresses.toAmino,
    fromAmino: MsgSetOrchestratorAddresses.fromAmino
  },
  "/injective.peggy.v1.MsgCancelSendToEth": {
    aminoType: "/injective.peggy.v1.MsgCancelSendToEth",
    toAmino: MsgCancelSendToEth.toAmino,
    fromAmino: MsgCancelSendToEth.fromAmino
  },
  "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
    aminoType: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
    toAmino: MsgSubmitBadSignatureEvidence.toAmino,
    fromAmino: MsgSubmitBadSignatureEvidence.fromAmino
  },
  "/injective.peggy.v1.MsgUpdateParams": {
    aminoType: "/injective.peggy.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};