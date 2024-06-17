import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit(signerAddress: string, message: MsgChannelOpenInit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry(signerAddress: string, message: MsgChannelOpenTry, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck(signerAddress: string, message: MsgChannelOpenAck, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm(signerAddress: string, message: MsgChannelOpenConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit(signerAddress: string, message: MsgChannelCloseInit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  channelCloseConfirm(signerAddress: string, message: MsgChannelCloseConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket(signerAddress: string, message: MsgRecvPacket, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  timeout(signerAddress: string, message: MsgTimeout, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose(signerAddress: string, message: MsgTimeoutOnClose, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement(signerAddress: string, message: MsgAcknowledgement, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
  channelUpgradeInit(signerAddress: string, message: MsgChannelUpgradeInit, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
  channelUpgradeTry(signerAddress: string, message: MsgChannelUpgradeTry, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
  channelUpgradeAck(signerAddress: string, message: MsgChannelUpgradeAck, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
  channelUpgradeConfirm(signerAddress: string, message: MsgChannelUpgradeConfirm, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
  channelUpgradeOpen(signerAddress: string, message: MsgChannelUpgradeOpen, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
  channelUpgradeTimeout(signerAddress: string, message: MsgChannelUpgradeTimeout, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
  channelUpgradeCancel(signerAddress: string, message: MsgChannelUpgradeCancel, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
  updateChannelParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
  pruneAcknowledgements(signerAddress: string, message: MsgPruneAcknowledgements, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  channelOpenInit = async (signerAddress: string, message: MsgChannelOpenInit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenInit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  channelOpenTry = async (signerAddress: string, message: MsgChannelOpenTry, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenTry.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  channelOpenAck = async (signerAddress: string, message: MsgChannelOpenAck, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenAck.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  channelOpenConfirm = async (signerAddress: string, message: MsgChannelOpenConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelOpenConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  channelCloseInit = async (signerAddress: string, message: MsgChannelCloseInit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelCloseInit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelCloseConfirm defines a rpc handler method for
   MsgChannelCloseConfirm. */
  channelCloseConfirm = async (signerAddress: string, message: MsgChannelCloseConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelCloseConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RecvPacket defines a rpc handler method for MsgRecvPacket. */
  recvPacket = async (signerAddress: string, message: MsgRecvPacket, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRecvPacket.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Timeout defines a rpc handler method for MsgTimeout. */
  timeout = async (signerAddress: string, message: MsgTimeout, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTimeout.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  timeoutOnClose = async (signerAddress: string, message: MsgTimeoutOnClose, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgTimeoutOnClose.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  acknowledgement = async (signerAddress: string, message: MsgAcknowledgement, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAcknowledgement.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
  channelUpgradeInit = async (signerAddress: string, message: MsgChannelUpgradeInit, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeInit.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
  channelUpgradeTry = async (signerAddress: string, message: MsgChannelUpgradeTry, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeTry.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
  channelUpgradeAck = async (signerAddress: string, message: MsgChannelUpgradeAck, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeAck.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
  channelUpgradeConfirm = async (signerAddress: string, message: MsgChannelUpgradeConfirm, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeConfirm.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
  channelUpgradeOpen = async (signerAddress: string, message: MsgChannelUpgradeOpen, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeOpen.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
  channelUpgradeTimeout = async (signerAddress: string, message: MsgChannelUpgradeTimeout, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeTimeout.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
  channelUpgradeCancel = async (signerAddress: string, message: MsgChannelUpgradeCancel, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChannelUpgradeCancel.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
  updateChannelParams = async (signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateParams.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
  pruneAcknowledgements = async (signerAddress: string, message: MsgPruneAcknowledgements, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPruneAcknowledgements.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};