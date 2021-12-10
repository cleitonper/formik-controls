import styled from 'styled-components';


export const Field = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  text-align: left;

  .select {
    --foreground: #333333;
    --font-size: 1rem;
    width: 100%;
  }

  &.clean .select:hover,
  &.default .select:hover,
  &.clean .select:focus,
  &.default .select:focus,
  &.clean .select:active,
  &.default .select:active,
  &.has-value .select.clean,
  &.has-value .select.default {
    --border-color: #D0D0D0;
    --background: #FEFEFE;
  }

  &.clean.has-error .select,
  &.default.has-error .select {
    --border-color: rgba(215, 0, 0, 0.55);
    --background: rgba(180, 0, 0, 0.10);
  }

  &.clean.is-disabled .select,
  &.default.is-disabled .select {
    --border-color: #D0D0D0;
    --background: #C0C0C5;
  }

  &.clean .select,
  &.default .select {
    --border-color: #DEDEDE;
    --border-style: solid;
    --background: #F5F5F5;
    --foreground: #333333;
    --dropdown-color: #B5B5B5;

    --hover-dropdown-color: #999999;
    --hover-border-color: #D0D0D0;
    --hover-background: #FEFEFE;
  }

  &.default .select {
    --font-weight: 500;
    --border-width: 2px;
    --border-radius: 6px;
    --menu-border-width: 2px;
    --menu-border-radius: 6px;
    --menu-margin: 3px 0px 0px;
  }

  &.clean .select {
    --font-weight: 300;
    --border-width: 1px;
    --border-radius: 0px;
    --menu-border-color: #D0D0D0;
    --hover-menu-border-color: #D0D0D0;
    --option-focused-background: rgba(0, 0, 0, 0.55);
    --option-selected-background: rgba(0, 0, 0, 0.65);
  }

  &.default .label {
    font-size: var(--label-font-size, 1rem);
    font-weight: var(--label-font-weight, 900);
    color: var(--label-color, var(--foreground-default, red));
    font-variant: small-caps;
    margin-bottom: 4px;
  }

  &.clean .label {
    font-size: var(--label-font-size, 1rem);
    font-weight: var(--label-font-weight, 300);
    color: var(--label-foreground, var(--foreground-default));
    margin-bottom: 4px;
  }

  &.float {
    padding-top: 8px;
  }

  &.float .select {
    --border-style: solid;
    --border-width: 0px 0px 1px;
    --background: transparent;
    --font-size: 0.85rem;
    --font-weight: 400;

    --value-padding-top: 8px;
    --value-padding-bottom: 4px;
    --value-container-padding: 0px;

    --menu-border-color: #999;
    --option-focused-background: rgba(0, 0, 0, 0.55);
    --option-selected-background: rgba(0, 0, 0, 0.65);

    --hover-background: transparent;
    --hover-border-color: #999999;
    --hover-dropdown-color: #808080;
    --hover-dropdown-transform: translateY(3px);
    --active-dropdown-transform: rotate(180deg);
    --hover-menu-border-color: #999;
  }

  &.float:not(.has-error) .select {
    --border-color: #999;
  }

  &.float.has-error .select {
    --border-color: rgba(215, 0, 0, 0.55);
    --dropdown-color: rgba(215, 0, 0, 0.55);
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
      font-size: 0.94rem;
      top: calc(100% - 39px);
      left: 0px;
    }
  }

  &.float.has-value,
  &.float.has-focus {
    .label {
      top: 0px;
      left: 0px;
      font-size: 0.86rem;
    }
  }

`;
