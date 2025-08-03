import { TelescopeGeneratedType } from "../../../types";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams, MsgBlacklistEthereumAddresses, MsgRevokeEthereumBlacklist } from "./msgs";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.peggy.v1.MsgValsetConfirm", MsgValsetConfirm], ["/injective.peggy.v1.MsgSendToEth", MsgSendToEth], ["/injective.peggy.v1.MsgRequestBatch", MsgRequestBatch], ["/injective.peggy.v1.MsgConfirmBatch", MsgConfirmBatch], ["/injective.peggy.v1.MsgDepositClaim", MsgDepositClaim], ["/injective.peggy.v1.MsgWithdrawClaim", MsgWithdrawClaim], ["/injective.peggy.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim], ["/injective.peggy.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim], ["/injective.peggy.v1.MsgSetOrchestratorAddresses", MsgSetOrchestratorAddresses], ["/injective.peggy.v1.MsgCancelSendToEth", MsgCancelSendToEth], ["/injective.peggy.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence], ["/injective.peggy.v1.MsgUpdateParams", MsgUpdateParams], ["/injective.peggy.v1.MsgBlacklistEthereumAddresses", MsgBlacklistEthereumAddresses], ["/injective.peggy.v1.MsgRevokeEthereumBlacklist", MsgRevokeEthereumBlacklist]];
export const MessageComposer = {
  encoded: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value: MsgValsetConfirm.encode(value).finish()
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value: MsgSendToEth.encode(value).finish()
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value: MsgRequestBatch.encode(value).finish()
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value: MsgConfirmBatch.encode(value).finish()
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value: MsgDepositClaim.encode(value).finish()
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value: MsgWithdrawClaim.encode(value).finish()
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value: MsgValsetUpdatedClaim.encode(value).finish()
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value: MsgERC20DeployedClaim.encode(value).finish()
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value: MsgSetOrchestratorAddresses.encode(value).finish()
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value: MsgCancelSendToEth.encode(value).finish()
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value: MsgSubmitBadSignatureEvidence.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.peggy.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    blacklistEthereumAddresses(value: MsgBlacklistEthereumAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddresses",
        value: MsgBlacklistEthereumAddresses.encode(value).finish()
      };
    },
    revokeEthereumBlacklist(value: MsgRevokeEthereumBlacklist) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklist",
        value: MsgRevokeEthereumBlacklist.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.peggy.v1.MsgUpdateParams",
        value
      };
    },
    blacklistEthereumAddresses(value: MsgBlacklistEthereumAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddresses",
        value
      };
    },
    revokeEthereumBlacklist(value: MsgRevokeEthereumBlacklist) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklist",
        value
      };
    }
  },
  fromPartial: {
    valsetConfirm(value: MsgValsetConfirm) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
        value: MsgValsetConfirm.fromPartial(value)
      };
    },
    sendToEth(value: MsgSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSendToEth",
        value: MsgSendToEth.fromPartial(value)
      };
    },
    requestBatch(value: MsgRequestBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRequestBatch",
        value: MsgRequestBatch.fromPartial(value)
      };
    },
    confirmBatch(value: MsgConfirmBatch) {
      return {
        typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
        value: MsgConfirmBatch.fromPartial(value)
      };
    },
    depositClaim(value: MsgDepositClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgDepositClaim",
        value: MsgDepositClaim.fromPartial(value)
      };
    },
    withdrawClaim(value: MsgWithdrawClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
        value: MsgWithdrawClaim.fromPartial(value)
      };
    },
    valsetUpdateClaim(value: MsgValsetUpdatedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        value: MsgValsetUpdatedClaim.fromPartial(value)
      };
    },
    eRC20DeployedClaim(value: MsgERC20DeployedClaim) {
      return {
        typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
        value: MsgERC20DeployedClaim.fromPartial(value)
      };
    },
    setOrchestratorAddresses(value: MsgSetOrchestratorAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        value: MsgSetOrchestratorAddresses.fromPartial(value)
      };
    },
    cancelSendToEth(value: MsgCancelSendToEth) {
      return {
        typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
        value: MsgCancelSendToEth.fromPartial(value)
      };
    },
    submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence) {
      return {
        typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        value: MsgSubmitBadSignatureEvidence.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.peggy.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    blacklistEthereumAddresses(value: MsgBlacklistEthereumAddresses) {
      return {
        typeUrl: "/injective.peggy.v1.MsgBlacklistEthereumAddresses",
        value: MsgBlacklistEthereumAddresses.fromPartial(value)
      };
    },
    revokeEthereumBlacklist(value: MsgRevokeEthereumBlacklist) {
      return {
        typeUrl: "/injective.peggy.v1.MsgRevokeEthereumBlacklist",
        value: MsgRevokeEthereumBlacklist.fromPartial(value)
      };
    }
  }
};