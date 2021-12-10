export interface LoadingIndicator {
  readonly frontColor?: string;
  readonly backColor?: string;
}

export interface Props {
  readonly loadingIndicator?: LoadingIndicator;
  readonly className?: string;
  readonly visible?: boolean;
  readonly label: string;
}
