import { TxRpc } from "./types";
import * as _CosmosAuthzV1beta1Txrpc from "./cosmos/authz/v1beta1/tx.rpc.msg";
import * as _CosmosBankV1beta1Txrpc from "./cosmos/bank/v1beta1/tx.rpc.msg";
import * as _CosmosDistributionV1beta1Txrpc from "./cosmos/distribution/v1beta1/tx.rpc.msg";
import * as _CosmosGovV1beta1Txrpc from "./cosmos/gov/v1beta1/tx.rpc.msg";
import * as _CosmosStakingV1beta1Txrpc from "./cosmos/staking/v1beta1/tx.rpc.msg";
import * as _IbcApplicationsTransferV1Txrpc from "./ibc/applications/transfer/v1/tx.rpc.msg";
export interface TxImpl
  extends _CosmosAuthzV1beta1Txrpc.StargateImpl,
    _CosmosBankV1beta1Txrpc.StargateImpl,
    _CosmosDistributionV1beta1Txrpc.StargateImpl,
    _CosmosGovV1beta1Txrpc.StargateImpl,
    _CosmosStakingV1beta1Txrpc.StargateImpl,
    _IbcApplicationsTransferV1Txrpc.StargateImpl {}
export class TxImpl {
  rpc: TxRpc;
  init(rpc: TxRpc) {
    this.rpc = rpc;
    this.grant = _CosmosAuthzV1beta1Txrpc.createClientImpl(rpc).grant;
    this.exec = _CosmosAuthzV1beta1Txrpc.createClientImpl(rpc).exec;
    this.revoke = _CosmosAuthzV1beta1Txrpc.createClientImpl(rpc).revoke;
    this.send = _CosmosBankV1beta1Txrpc.createClientImpl(rpc).send;
    this.multiSend = _CosmosBankV1beta1Txrpc.createClientImpl(rpc).multiSend;
    this.updateBankParams = _CosmosBankV1beta1Txrpc.createClientImpl(
      rpc
    ).updateParams;
    this.setSendEnabled = _CosmosBankV1beta1Txrpc.createClientImpl(
      rpc
    ).setSendEnabled;
    this.setWithdrawAddress = _CosmosDistributionV1beta1Txrpc.createClientImpl(
      rpc
    ).setWithdrawAddress;
    this.withdrawDelegatorReward = _CosmosDistributionV1beta1Txrpc.createClientImpl(
      rpc
    ).withdrawDelegatorReward;
    this.withdrawValidatorCommission = _CosmosDistributionV1beta1Txrpc.createClientImpl(
      rpc
    ).withdrawValidatorCommission;
    this.fundCommunityPool = _CosmosDistributionV1beta1Txrpc.createClientImpl(
      rpc
    ).fundCommunityPool;
    this.updateParams = _CosmosDistributionV1beta1Txrpc.createClientImpl(
      rpc
    ).updateParams;
    this.communityPoolSpend = _CosmosDistributionV1beta1Txrpc.createClientImpl(
      rpc
    ).communityPoolSpend;
    this.submitProposal = _CosmosGovV1beta1Txrpc.createClientImpl(
      rpc
    ).submitProposal;
    this.vote = _CosmosGovV1beta1Txrpc.createClientImpl(rpc).vote;
    this.voteWeighted = _CosmosGovV1beta1Txrpc.createClientImpl(
      rpc
    ).voteWeighted;
    this.deposit = _CosmosGovV1beta1Txrpc.createClientImpl(rpc).deposit;
    this.createValidator = _CosmosStakingV1beta1Txrpc.createClientImpl(
      rpc
    ).createValidator;
    this.editValidator = _CosmosStakingV1beta1Txrpc.createClientImpl(
      rpc
    ).editValidator;
    this.delegate = _CosmosStakingV1beta1Txrpc.createClientImpl(rpc).delegate;
    this.beginRedelegate = _CosmosStakingV1beta1Txrpc.createClientImpl(
      rpc
    ).beginRedelegate;
    this.undelegate = _CosmosStakingV1beta1Txrpc.createClientImpl(
      rpc
    ).undelegate;
    this.cancelUnbondingDelegation = _CosmosStakingV1beta1Txrpc.createClientImpl(
      rpc
    ).cancelUnbondingDelegation;
    this.updateStakingParams = _CosmosStakingV1beta1Txrpc.createClientImpl(
      rpc
    ).updateParams;
    this.transfer = _IbcApplicationsTransferV1Txrpc.createClientImpl(
      rpc
    ).transfer;
  }
}
