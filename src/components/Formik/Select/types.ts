import { Option } from 'components/Select/types';


export interface Props {
  readonly id?: string;
  readonly name: string;
  readonly label?: string;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly optional?: boolean;
  readonly placeholder?: string;
  readonly options?: ReadonlyArray<Option>;
  readonly className?: string;

  readonly model?: 'default' | 'float' | 'clean';
}
