import { Range } from 'react-range';
import { IThumbProps } from 'react-range/lib/types';


export interface Props {
  readonly rangeRef: Range | null;
  readonly props: IThumbProps;
  readonly className?: string;
  readonly isDragged: boolean;
  readonly values: number[];
  readonly value: number;
  readonly index: number;
  readonly step?: number;
  readonly separator?: string;
  readonly showValue?: boolean;

  readonly format?: (value: string) => string;
}

export interface OutterProps {
  readonly active?: boolean;
}

export interface ValueProps {
  readonly visible?: boolean;
}

export interface Params {
  props: IThumbProps;
  value: number;
  index: number;
  isDragged: boolean;
}

export type RenderThumb = (params: Params) => React.ReactNode;
