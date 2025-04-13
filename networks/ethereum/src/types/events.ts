/**
 * ABI parameter type definition
 */
export interface AbiParameter {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiParameter[];
}

/**
 * ABI event definition
 */
export interface AbiEvent {
  name: string;
  type: 'event';
  anonymous?: boolean;
  inputs: AbiParameter[];
}

/**
 * Complete ABI definition
 */
export type Abi = Array<AbiEvent | any>;

/**
 * Decoded event data structure
 */
export interface DecodedEventData {
  eventName: string;
  params: Record<string, any>;
  raw: {
    topics: string[];
    data: string;
    address: string;
    blockNumber: string;
    transactionHash: string;
    logIndex: string;
  };
}

/**
 * Event subscription handler
 */
export type EventHandler = (decodedData: DecodedEventData) => void;