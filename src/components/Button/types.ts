import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export interface Props
  extends
  Partial<ButtonHTMLAttributes<HTMLElement>>,
  Partial<AnchorHTMLAttributes<HTMLElement>> {
  readonly children?: ReactNode;
  readonly expand?: 'inline' | 'inline-block' | 'block';
  readonly type?: "reset" | "button" | "submit" | undefined;
  readonly shape?: 'rounded' | 'round' | 'rect';
  readonly size?: 'small' | 'medium' | 'big';
  readonly fill?: 'clear' | 'default';
  readonly href?: string;
  readonly foreground?: string;
  readonly background?: string;
}
