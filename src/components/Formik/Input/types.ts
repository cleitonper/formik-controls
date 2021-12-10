import { FocusEvent, ChangeEvent } from 'react';


export interface Props {
  readonly id?: string;
  readonly name: string;
  readonly label?: string;
  readonly limit?: number;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly focus?: boolean;
  readonly className?: string;
  readonly title?: string;

  readonly onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onAccept?: (value: string) => void;

  readonly unmask?: boolean;
  readonly mask?: string | { mask: string }[];
  readonly dispatch?: (append: string, dynamicMasked: DynamicMask) => InputMask;

  readonly type?: 'password' | 'text' | 'textarea';
  readonly inputMode?: 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  readonly model?: 'default' | 'float' | 'clean';
}

export interface MaskProps {
  readonly ref?: any;
  readonly mask?: Mask;
  readonly unmask?: boolean;
  readonly onAccept?: (value: string) => void;
  readonly dispatch?: (append: string, dynamicMasked: DynamicMask) => InputMask;
}

export interface InputMask {
  readonly value: string;
  readonly unmaskedValue: string;
  readonly typedValue: string;
  readonly mask: Mask;
}

export interface DynamicMask extends InputMask {
  readonly compiledMasks: ReadonlyArray<CompiledMask>;
}

export type CompiledMask = InputMask & {
  [key: string]: string;
};

export type Mask =
  | string
  | number
  | RegExp
  | { mask: string }[];
