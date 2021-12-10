import { ReactText } from 'react';
import { CheckOption } from '../types';


export interface Props {
  readonly className?: string;
  readonly layout?: 'row-vertical' | 'row-horizontal' | 'column-vertical' | 'column-horizontal';
  readonly name: string;
  readonly id?: string;
  readonly value?: ReadonlyArray<ReactText>;
  readonly options: ReadonlyArray<CheckOption>;
}
