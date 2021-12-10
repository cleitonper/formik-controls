import styled from 'styled-components';


export const Field = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  text-align: left;

  .input {
    font-size: var(--font-size, 1rem);
    font-weight: var(--font-weight, 300);
    text-align: var(--text-align, left);
    width: 100%;

    padding-top: var(--padding-top, 8px);
    padding-bottom: var(--padding-bottom, 8px);
    padding-right: var(--padding-right, 8px);
    padding-left: var(--padding-left, 8px);

    color: var(--foreground, #333333);

    transition: all 300ms;

    &,
    &:focus {
      outline: none;
    }
  }

  textarea.input {
    min-height: var(--height, 120px);
  }

  .input::placeholder {
    color: var(--placeholder-color, rgba(0, 0, 0, 0.65));
    opacity: 1;
  }

  &.clean .input:hover,
  &.default .input:hover,
  &.clean .input:focus,
  &.default .input:focus,
  &.clean .input:active,
  &.default .input:active,
  &.has-value .input.clean,
  &.has-value .input.default {
    border-color: var(--active-border-color, #AFAFAF);
    background-color: var(--active-background, #FEFEFE);
  }

  &.default .input:disabled,
  &.clean .input:disabled {
    border-color: var(--disabled-border-color, #E5E5E5);
    background-color: var(--disabled-background, #F0F0F0);
  }

  &.clean.has-error .input,
  &.default.has-error .input {
    border-color: var(--error-border-color, rgba(215, 0, 0, 0.55));
    background-color: var(--error-background, rgba(180, 0, 0, 0.10));
  }

  &.clean .input,
  &.default .input {
    border-color: var(--border-color, #BBBBBB);
    border-style: var(--border-style, solid);

    background-color: var(--background, #F0F0F0);
  }

  &.default .input {
    border-width: var(--border-width, 2px);
    border-radius: var(--border-radius, 6px);
  }

  &.clean .input {
    border-width: var(--border-width, 1px);
    border-radius: var(--border-radius, 0px);
  }

  &.default .label {
    font-size: var(--label-font-size, 1rem);
    font-weight: var(--label-font-weight, 900);
    font-variant: small-caps;
    margin-bottom: 4px;
  }

  &.clean .label {
    font-size: var(--label-font-size, 1rem);
    font-weight: var(--label-font-weight, 400);
    margin-bottom: 4px;
  }

  &.float {
    padding-top: 12px;
  }

  &.float .input {
    border-style: var(--border-style, solid);
    border-width: var(--border-width, 0px 0px 1px);
    background-color: var(--background, transparent);
    font-family: 'Open Sans', sans-serif;
    font-size: var(--font-size, 0.85rem);
    font-weight: var(--font-weight, 400);

    --padding-top: 4px;
    --padding-bottom: 4px;
    --padding-right: 12px;
    --padding-left: 0px;
  }

  &.float:not(.has-error) .input {
    border-color: var(--border-color, #999999);
  }

  &.float.has-error .input {
    border-color: var(--error-border-color, rgba(215, 0, 0, 0.55));
  }

  &.float .label {
    font-weight: var(--label-font-weight, 400);
    font-family: 'Open Sans', sans-serif;
    position: absolute;

    transition-property: all;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
  }

  &.float
  :not(.has-value)
  :not(.has-focus) {
    .label {
      font-size: var(--label-font-size, 0.94rem);
      top: calc(100% - 40px);
      left: 0px;
    }
  }

  &.float.has-value,
  &.float.has-focus {
    .label {
      top: 0px;
      left: 0px;
      font-size: var(--label-active-font-size);
    }
  }

`;
