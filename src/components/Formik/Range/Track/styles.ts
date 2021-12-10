import styled from 'styled-components';
import { InnerProps } from './types';


export const Inner = styled.div<InnerProps>`
  width: 100%;
  height: 4px;
  border-radius: 3px;
  background: ${(props) => props.background};
`;


export const Outter = styled.div`
  width: 100%;
  height: var(--thumb-size, 24px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: calc(var(--thumb-size, 24px) / 2);
  padding-right: calc(var(--thumb-size, 24px) / 2);
`;
