import { FocusEvent } from 'react';


export interface Option {
  readonly label: string;
  readonly value: string | number;
  readonly isDisabled?: boolean;
  readonly className?: string;
}

export type ValueType =
  | Option
  | ReadonlyArray<Option>
  | undefined
  | null;

export interface Props {
  readonly value?: string | null;
  readonly options?: ReadonlyArray<Option>;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly onChange?: (value: string | number) => void;
  readonly onFocus?: () => void;
  readonly onBlur?: (event: FocusEvent<HTMLElement>) => void;
}
