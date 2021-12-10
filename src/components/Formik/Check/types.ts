import { ReactText } from 'react';


export interface CheckOption {
  readonly label: string;
  readonly value: ReactText;
  readonly disabled?: boolean;
}

export interface Props {
  readonly className?: string;
  readonly layout?: 'row-vertical' | 'row-horizontal' | 'column-vertical' | 'column-horizontal';
  readonly id?: string;
  readonly name: string;
  readonly label?: string;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly options: ReadonlyArray<CheckOption>;
}
