import { FunctionComponent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Props } from './types';

const Button: FunctionComponent<Props> = ({
  type,
  href,
  fill,
  size,
  shape,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  const classes = classNames(
    { button: !href, link: !!href },
    className,
    `fill-${fill}`,
    shape,
    size,
  );

  const button =
  (
    <button
      {...props}
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      className={classes}
      data-testid="button"
      type={type}
    >
      {children}
    </button>
  );

  const link =
    (
      <a
        {...props}
        rel={rel}
        href={href}
        target={target}
        className={classes}
      >
        {children}
      </a>
    );

  return !href
    ? button
    : link;
};

Button.defaultProps = {
  type: 'button',
  expand: 'inline-block',
  shape: 'rect',
  fill: 'default',
  size: 'small',
};

/* eslint-disable @typescript-eslint/indent */
const StyledButton = styled(Button)`
  cursor: pointer;
  text-decoration: none;
  border-width: var(--border-width, 1px);
  border-style: var(--border-style, solid);
  transition: all var(--transition-default-timing);
  display: ${(props) => props.expand};

  &.fill-default {
    background-color: ${
      (props) => props.background
        ? props.background
        : 'var(--background, var(--background, #1D1D1D))'
    };
    border-color: ${
      (props) => props.background
        ? props.background
        : 'var(--border-color, var(--background, #1D1D1D))'
    };
    color: ${
      (props) => props.foreground
        ? props.foreground
        : 'var(--foreground, var(--foreground, #ffffff))'
    };
  }

  &.fill-clear {
    background-color: transparent;
    border-color: transparent;
    color: ${(props) => props.foreground ? props.foreground : 'var(--foreground, #1D1D1D)'};

    :hover {
      background-color: var(--background, rgba(0, 0, 0, 0.05));
      border-color: transparent;
    }
  }

  &.small {
    padding-left: var(--horizontal-padding, 16px);
    padding-right: var(--horizontal-padding, 16px);
    padding-bottom: var(--vertical-padding, 8px);
    padding-top: var(--vertical-padding, 8px);
    font-size: var(--font-size, 1rem);
  }

  &.medium {
    padding-left: var(--horizontal-padding, 24px);
    padding-right: var(--horizontal-padding, 24px);
    padding-bottom: var(--vertical-padding, 12px);
    padding-top: var(--vertical-padding, 12px);
    font-size: var(--font-size, 1.5rem);
  }

  &.big {
    padding-left: var(--horizontal-padding, 32px);
    padding-right: var(--horizontal-padding, 32px);
    padding-bottom: var(--vertical-padding, 16px);
    padding-top: var(--vertical-padding, 16px);
    font-size: var(--font-size, 2rem);
  }

  &.rounded {
    border-radius: var(--border-radius, 24px);
  }

  &.round {
    border-radius: var(--border-radius, 8px);
  }

  &.rect {
    border-radius: var(--border-radius, 0px);
  }

  &:disabled {
    opacity: 0.50;
    cursor: not-allowed;
  }
`;
/* eslint-enable @typescript-eslint/indent */

export default StyledButton;
