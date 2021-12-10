/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { OutterProps, ValueProps } from './types';


export const Value = styled.div<ValueProps>`
  opacity: ${(props) => props.visible ? 1 : 0};
  transform: ${(props) => props.visible ? 'translateX(-50%)' : 'translate(-50%, 8px)'};

  transition: all 450ms;

  color: #FFFFFF;
  font-size: 0.90rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  line-height: 1em;

  border-radius: 4px;
  background: #D6001C;
  padding: 4px 12px 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: calc(-100% - 12px);
  left: 50%;

  ::before {
    content: '';
    display: block;
    height: 8px;
    width: 8px;

    background-color: #D6001C;
    border-radius: 2px 0px 0px 0px;

    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    left: 50%;
    top: 0px;
  }
`;


export const Inner = styled.div`
  width: var(--thumb-mark-width, 2px);
  height: var(--thumb-mark-height, 10px);
`;


export const Outter = styled.div<OutterProps>`
  width: var(--thumb-size, 24px);
  height: var(--thumb-size, 24px);

  border-style: solid;
  border-width: var(--thumb-border-width, 1px);
  border-radius: var(--thumb-border-radius, 3px);
  border-color: var(--thumb-border-color, #707070);
  background-color: var(--thumb-background, #FFFFFF);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &.focus-visible ${Inner} {
    background: var(--thumb-active-mark-background, #D6001C);
  }

  &:not(.focus-visible) ${Inner} {
    background-color: ${
      (props) => props.active
        ? 'var(--thumb-active-mark-background, #D6001C)'
        : 'var(--thumb-mark-background, #707070)'
    };
  }
`;
