// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { ITuple } from '@polkadot/types/types';
import { RegistrarIndex } from '@polkadot/types/interfaces/identity';
import { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name Judgement */
export interface Judgement extends Enum {
  readonly isRequested: boolean;
  readonly isApproved: boolean;
}

/** @name JudgementItem */
export interface JudgementItem extends ITuple<[RegistrarIndex, Judgement]> {}

/** @name UsernameRegistration */
export interface UsernameRegistration extends Struct {
  readonly judgements: Vec<JudgementItem>;
  readonly account_id: AccountId;
}

export type PHANTOM_USERNAMEREGISTRY = 'usernameRegistry';
