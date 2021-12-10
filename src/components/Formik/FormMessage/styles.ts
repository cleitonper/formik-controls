import styled from 'styled-components';


export const Message = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  transition-property: all;
  transition-duration: 250ms;
  max-height: 120px;


  &.error:not(.show) {
    max-height: 0px;
  }
`;
