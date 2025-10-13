import { TokenProgram } from '../token-program';
import { TokenInstructions } from '../../token/instructions';
import { AuthorityType, TOKEN_PROGRAM_ID } from '../../token/constants';
import { PublicKey } from '../../../types';

describe('TokenProgram convenience wrappers', () => {
  const account = PublicKey.unique();
  const currentAuthority = PublicKey.unique();
  const destination = PublicKey.unique();
  const owner = PublicKey.unique();
  const programId = PublicKey.unique();
  const multiSigners = [PublicKey.unique(), PublicKey.unique()];

  it('delegates setAuthority to TokenInstructions with explicit program id', () => {
    const newAuthority = PublicKey.unique();
    const instruction = TokenProgram.setAuthority(
      account,
      currentAuthority,
      AuthorityType.AccountOwner,
      newAuthority,
      multiSigners,
      programId
    );

    const expected = TokenInstructions.setAuthority(
      account,
      currentAuthority,
      AuthorityType.AccountOwner,
      newAuthority,
      multiSigners,
      programId
    );

    expect(instruction).toStrictEqual(expected);
  });

  it('delegates setAuthority when clearing the authority', () => {
    const instruction = TokenProgram.setAuthority(
      account,
      currentAuthority,
      AuthorityType.CloseAccount,
      null,
      [],
      programId
    );

    const expected = TokenInstructions.setAuthority(
      account,
      currentAuthority,
      AuthorityType.CloseAccount,
      null,
      [],
      programId
    );

    expect(instruction).toStrictEqual(expected);
  });

  it('delegates closeAccount to TokenInstructions using default program id', () => {
    const instruction = TokenProgram.closeAccount(account, destination, owner, multiSigners);
    const expected = TokenInstructions.closeAccount(account, destination, owner, multiSigners, TOKEN_PROGRAM_ID);

    expect(instruction).toStrictEqual(expected);
  });

  it('delegates syncNative to TokenInstructions', () => {
    const instruction = TokenProgram.syncNative(account);
    const expected = TokenInstructions.syncNative(account, TOKEN_PROGRAM_ID);

    expect(instruction).toStrictEqual(expected);
  });
});
