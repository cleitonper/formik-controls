import styled from 'styled-components';


export const Group = styled.div`
  /**
   *      •           •
   *   --------   --------
   *
   * ________________________
   *
   *   • --------   • --------
   */
  &.row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  /**
   *      •
   *   --------
   *      •
   *   --------
   *
   * ____________
   *
   *   • --------
   *   • --------
   */
  &.column {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.row .item:not(:last-child) {
    margin-right: var(--horizontal-margin, 24px);
  }

  &.column .item:not(:last-child) {
    margin-bottom: var(--vertical-margin, 8px);
  }

  .item.horizontal {
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: flex-start;
    align-items: center;

    .checkbox {
      margin-right: var(--check-margin, 10px);
    }
  }

  .item.vertical {
    display: flex;
    flex-flow: column-reverse wrap;
    justify-content: center;
    align-items: center;
    flex: 1;

    .checkbox {
      margin-bottom: var(--check-margin, 4px);
    }
  }

  label {
    cursor: pointer;
    user-select: none;
    font-weight: var(--label-font-weight, 300);
    text-align: center;
  }

  input {
    visibility: hidden;
    position: absolute;
  }

  .checkbox {
    border-radius: 3px;
    border-style: solid;
    border-width: var(--border-width, 1px);
    border-color: var(--border-color, #707070);
    background-color: var(--background, transparent);
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    transition: all 350ms cubic-bezier(0.22, 1, 0.36, 1);

    .mark {
      content: '';
      border-radius: 0px;
      width: var(--check-size, 100%);
      height: var(--check-size, 100%);
      background-color: var(--check-color, #D6001C);
      opacity: 0;
    }

    .icon {
      font-size: 0.85rem;
      color: var(--icon-color, transparent);
    }

    .mark,
    .icon {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      left: 0;
      top: 0;

      transition: all 350ms cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  input:checked ~ .checkbox {
    border-color: var(--active-border-color, #D6001C);
  }

  input:checked ~ .checkbox .mark {
    opacity: 1;
  }

  input:checked ~ .checkbox .icon {
    color: var(--active-icon-color, #FFFFFF);
  }

  @media (max-width: 450px) {
    label {
      font-size: var(--label-font-size, 0.55rem);
    }

    .checkbox {
      width: var(--size, 15px);
      height: var(--size, 15px);
    }
  }

  @media (min-width: 451px) and (max-width: 959px) {
    label {
      font-size: var(--label-font-size, 0.75rem);
    }

    .checkbox {
      width: var(--size, 18px);
      height: var(--size, 18px);
    }
  }

  @media (min-width: 960px) and (max-width: 1399px) {
    label {
      font-size: var(--label-font-size, 1rem);
    }

    .checkbox {
      width: var(--size, 19px);
      height: var(--size, 19px);
    }
  }

  @media (min-width: 1400px) {
    label {
      font-size: var(--label-font-size, 1.125rem);
    }

    .checkbox {
      width: var(--size, 22px);
      height: var(--size, 22px);
    }
  }
`;
