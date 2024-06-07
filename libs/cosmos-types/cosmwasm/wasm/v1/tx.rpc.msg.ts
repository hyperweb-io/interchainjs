import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgAddCodeUploadParamsAddresses, MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgInstantiateContract2, MsgMigrateContract, MsgPinCodes, MsgRemoveCodeUploadParamsAddresses, MsgStoreAndInstantiateContract, MsgStoreAndMigrateContract, MsgStoreCode, MsgSudoContract, MsgUnpinCodes, MsgUpdateAdmin, MsgUpdateContractLabel,MsgUpdateInstantiateConfig, MsgUpdateParams } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(signerAddress: string, message: MsgStoreCode, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantiateContract creates a new smart contract instance for the given
   *  code id.
   */
  instantiateContract(signerAddress: string, message: MsgInstantiateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantiateContract2 creates a new smart contract instance for the given
   *  code id with a predictable address
   */
  instantiateContract2(signerAddress: string, message: MsgInstantiateContract2, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(signerAddress: string, message: MsgExecuteContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(signerAddress: string, message: MsgMigrateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateAdmin sets a new admin for a smart contract */
  updateAdmin(signerAddress: string, message: MsgUpdateAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(signerAddress: string, message: MsgClearAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateInstantiateConfig updates instantiate config for a smart contract */
  updateInstantiateConfig(signerAddress: string, message: MsgUpdateInstantiateConfig, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/wasm
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  updateParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * SudoContract defines a governance operation for calling sudo
   * on a contract. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  sudoContract(signerAddress: string, message: MsgSudoContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * PinCodes defines a governance operation for pinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  pinCodes(signerAddress: string, message: MsgPinCodes, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * UnpinCodes defines a governance operation for unpinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  unpinCodes(signerAddress: string, message: MsgUnpinCodes, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * StoreAndInstantiateContract defines a governance operation for storing
   * and instantiating the contract. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  storeAndInstantiateContract(signerAddress: string, message: MsgStoreAndInstantiateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * RemoveCodeUploadParamsAddresses defines a governance operation for
   * removing addresses from code upload params.
   * The authority is defined in the keeper.
   */
  removeCodeUploadParamsAddresses(signerAddress: string, message: MsgRemoveCodeUploadParamsAddresses, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * AddCodeUploadParamsAddresses defines a governance operation for
   * adding addresses to code upload params.
   * The authority is defined in the keeper.
   */
  addCodeUploadParamsAddresses(signerAddress: string, message: MsgAddCodeUploadParamsAddresses, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * StoreAndMigrateContract defines a governance operation for storing
   * and migrating the contract. The authority is defined in the keeper.
   * 
   * Since: 0.42
   */
  storeAndMigrateContract(signerAddress: string, message: MsgStoreAndMigrateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * UpdateContractLabel sets a new label for a smart contract
   * 
   * Since: 0.43
   */
  updateContractLabel(signerAddress: string, message: MsgUpdateContractLabel, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
/** Msg defines the wasm Msg service. */
export interface CosmWasmStargateImpl {
  /** StoreCode to submit Wasm code to the system */
  storeCode(signerAddress: string, message: MsgStoreCode, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantiateContract creates a new smart contract instance for the given
   *  code id.
   */
  instantiateContract(signerAddress: string, message: MsgInstantiateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * InstantiateContract2 creates a new smart contract instance for the given
   *  code id with a predictable address
   */
  instantiateContract2(signerAddress: string, message: MsgInstantiateContract2, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(signerAddress: string, message: MsgExecuteContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(signerAddress: string, message: MsgMigrateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateAdmin sets a new admin for a smart contract */
  updateAdmin(signerAddress: string, message: MsgUpdateAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(signerAddress: string, message: MsgClearAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateInstantiateConfig updates instantiate config for a smart contract */
  updateInstantiateConfig(signerAddress: string, message: MsgUpdateInstantiateConfig, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/wasm
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  updateWasmParams(signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * SudoContract defines a governance operation for calling sudo
   * on a contract. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  sudoContract(signerAddress: string, message: MsgSudoContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * PinCodes defines a governance operation for pinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  pinCodes(signerAddress: string, message: MsgPinCodes, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * UnpinCodes defines a governance operation for unpinning a set of
   * code ids in the wasmvm cache. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  unpinCodes(signerAddress: string, message: MsgUnpinCodes, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * StoreAndInstantiateContract defines a governance operation for storing
   * and instantiating the contract. The authority is defined in the keeper.
   * 
   * Since: 0.40
   */
  storeAndInstantiateContract(signerAddress: string, message: MsgStoreAndInstantiateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * RemoveCodeUploadParamsAddresses defines a governance operation for
   * removing addresses from code upload params.
   * The authority is defined in the keeper.
   */
  removeCodeUploadParamsAddresses(signerAddress: string, message: MsgRemoveCodeUploadParamsAddresses, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * AddCodeUploadParamsAddresses defines a governance operation for
   * adding addresses to code upload params.
   * The authority is defined in the keeper.
   */
  addCodeUploadParamsAddresses(signerAddress: string, message: MsgAddCodeUploadParamsAddresses, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * StoreAndMigrateContract defines a governance operation for storing
   * and migrating the contract. The authority is defined in the keeper.
   * 
   * Since: 0.42
   */
  storeAndMigrateContract(signerAddress: string, message: MsgStoreAndMigrateContract, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /**
   * UpdateContractLabel sets a new label for a smart contract
   * 
   * Since: 0.43
   */
  updateContractLabel(signerAddress: string, message: MsgUpdateContractLabel, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* StoreCode to submit Wasm code to the system */
  storeCode = async (signerAddress: string, message: MsgStoreCode, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStoreCode.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* InstantiateContract creates a new smart contract instance for the given
    code id. */
  instantiateContract = async (signerAddress: string, message: MsgInstantiateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantiateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* InstantiateContract2 creates a new smart contract instance for the given
    code id with a predictable address */
  instantiateContract2 = async (signerAddress: string, message: MsgInstantiateContract2, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgInstantiateContract2.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Execute submits the given message data to a smart contract */
  executeContract = async (signerAddress: string, message: MsgExecuteContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExecuteContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract = async (signerAddress: string, message: MsgMigrateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgMigrateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateAdmin sets a new admin for a smart contract */
  updateAdmin = async (signerAddress: string, message: MsgUpdateAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateAdmin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ClearAdmin removes any admin stored for a smart contract */
  clearAdmin = async (signerAddress: string, message: MsgClearAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgClearAdmin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateInstantiateConfig updates instantiate config for a smart contract */
  updateInstantiateConfig = async (signerAddress: string, message: MsgUpdateInstantiateConfig, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateInstantiateConfig.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateParams defines a governance operation for updating the x/wasm
   module parameters. The authority is defined in the keeper.
  
   Since: 0.40 */
  updateParams = async (signerAddress: string, message: MsgUpdateParams, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateParams.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SudoContract defines a governance operation for calling sudo
   on a contract. The authority is defined in the keeper.
  
   Since: 0.40 */
  sudoContract = async (signerAddress: string, message: MsgSudoContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSudoContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* PinCodes defines a governance operation for pinning a set of
   code ids in the wasmvm cache. The authority is defined in the keeper.
  
   Since: 0.40 */
  pinCodes = async (signerAddress: string, message: MsgPinCodes, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPinCodes.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UnpinCodes defines a governance operation for unpinning a set of
   code ids in the wasmvm cache. The authority is defined in the keeper.
  
   Since: 0.40 */
  unpinCodes = async (signerAddress: string, message: MsgUnpinCodes, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUnpinCodes.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* StoreAndInstantiateContract defines a governance operation for storing
   and instantiating the contract. The authority is defined in the keeper.
  
   Since: 0.40 */
  storeAndInstantiateContract = async (signerAddress: string, message: MsgStoreAndInstantiateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStoreAndInstantiateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RemoveCodeUploadParamsAddresses defines a governance operation for
   removing addresses from code upload params.
   The authority is defined in the keeper. */
  removeCodeUploadParamsAddresses = async (signerAddress: string, message: MsgRemoveCodeUploadParamsAddresses, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRemoveCodeUploadParamsAddresses.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* AddCodeUploadParamsAddresses defines a governance operation for
   adding addresses to code upload params.
   The authority is defined in the keeper. */
  addCodeUploadParamsAddresses = async (signerAddress: string, message: MsgAddCodeUploadParamsAddresses, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAddCodeUploadParamsAddresses.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* StoreAndMigrateContract defines a governance operation for storing
   and migrating the contract. The authority is defined in the keeper.
  
   Since: 0.42 */
  storeAndMigrateContract = async (signerAddress: string, message: MsgStoreAndMigrateContract, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStoreAndMigrateContract.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateContractLabel sets a new label for a smart contract
  
   Since: 0.43 */
  updateContractLabel = async (signerAddress: string, message: MsgUpdateContractLabel, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateContractLabel.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};