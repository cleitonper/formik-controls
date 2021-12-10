import { RefObject } from 'react';


export interface Props {
  readonly id?: string;
  readonly className?: string;
  readonly message: string;
  readonly text?: string;
  readonly type?: 'success' | 'error';
  readonly show?: boolean;
  readonly elemetRef?: RefObject<HTMLDivElement> | null | undefined;
}
