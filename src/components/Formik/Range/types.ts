export interface Props {
  readonly id?: string;
  readonly name: string;
  readonly label?: string;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly className?: string;

  readonly step?: number;
  readonly min?: number;
  readonly max?: number;

  readonly onChange?: (values: number[]) => void;
  readonly onFinalChange?: (values: number[]) => void;

  readonly format?: (value: string) => string;
}
