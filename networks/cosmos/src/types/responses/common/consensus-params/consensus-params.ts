/**
 * ConsensusParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

// Import dependencies from same module
import { BlockParams } from './block-params';
import { EvidenceParams } from './evidence-params';
import { ValidatorParams } from './validator-params';
import { VersionParams } from './version-params';

export interface ConsensusParams {
  readonly block?: BlockParams;
  readonly evidence?: EvidenceParams;
  readonly validator?: ValidatorParams;
  readonly version?: VersionParams;
}
