import { ITrackProps } from 'react-range/lib/types';


export interface Props {
  readonly props: ITrackProps;
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly isDragged?: boolean;
  readonly disabled?: boolean;
  readonly background?: string;
}

export interface InnerProps {
  readonly background?: string;
}

export interface Params {
  readonly props: ITrackProps;
  readonly children: React.ReactNode;
  readonly isDragged: boolean;
  readonly disabled: boolean;
}

export type RenderTrack = (params: Params) => React.ReactNode;
