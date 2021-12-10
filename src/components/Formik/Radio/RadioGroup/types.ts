import { ReactText } from 'react';
import { RadioOption } from '../types';


export interface Props {
  readonly className?: string;
  readonly layout?: 'vertical' | 'horizontal';
  readonly name: string;
  readonly id?: string;
  readonly value?: ReactText;
  readonly options: ReadonlyArray<RadioOption>;
}
