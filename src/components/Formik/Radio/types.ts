import { ReactText } from 'react';


export interface RadioOption {
  readonly label: string;
  readonly value: ReactText;
}

export interface Props {
  readonly className?: string;
  readonly layout?: 'vertical' | 'horizontal';
  readonly id?: string;
  readonly name: string;
  readonly label?: string;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly options: ReadonlyArray<RadioOption>;
}
