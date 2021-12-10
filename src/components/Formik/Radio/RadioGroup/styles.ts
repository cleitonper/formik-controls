import styled from 'styled-components';


export const Group = styled.div`
  &.vertical {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  &.horizontal {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }

  &.horizontal .item:not(:last-child) {
    margin-right: 24px;
  }

  .item.horizontal {
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: flex-start;
    align-items: center;

    .radio {
      margin-right: 4px;
    }
  }

  .item.vertical {
    display: flex;
    flex-flow: column-reverse wrap;
    justify-content: center;
    align-items: center;
    flex: 1;

    .radio {
      margin-bottom: 4px;
    }
  }

  label {
    cursor: pointer;
    font-weight: var(--label-font-weight, 300);
    text-align: center;
  }

  input {
    visibility: hidden;
    position: absolute;
  }

  .radio {
    border-radius: 50%;
    border-style: solid;
    border-width: var(--border-width, 2px);
    border-color: var(--border-color, #333333);
    background-color: var(--background, transparent);
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    ::after {
      content: '';
      border-radius: 50%;
      width: var(--check-size, 60%);
      height: var(--check-size, 60%);
      background-color: var(--check-color, #D6001C);
      transform: scale(2.4);
      opacity: 0;

      transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  input:checked ~ .radio {
    border-color: var(--active-border-color, #333333);
  }

  input:checked ~ .radio::after {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: 450px) {
    label {
      font-size: var(--label-font-size, 0.55rem);
    }

    .radio {
      width: var(--size, 15px);
      height: var(--size, 15px);
    }
  }

  @media (min-width: 451px) and (max-width: 959px) {
    label {
      font-size: var(--label-font-size, 0.75rem);
    }

    .radio {
      width: var(--size, 18px);
      height: var(--size, 18px);
    }
  }

  @media (min-width: 960px) and (max-width: 1399px) {
    label {
      font-size: var(--label-font-size, 1rem);
    }

    .radio {
      width: var(--size, 19px);
      height: var(--size, 19px);
    }
  }

  @media (min-width: 1400px) {
    label {
      font-size: var(--label-font-size, 1.125rem);
    }

    .radio {
      width: var(--size, 25px);
      height: var(--size, 25px);
    }
  }
`;
