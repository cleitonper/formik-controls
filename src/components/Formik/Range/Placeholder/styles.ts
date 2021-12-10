import styled from 'styled-components';
import { Props } from './types';


export const Container = styled.div<Props>`
  opacity: ${(props) => props.show ? 1 : 0};
  transform: ${(props) => props.show ? 'translateY(0px)' : 'translateY(-6px)'};

  transition: all 450ms;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 6px;
`;
