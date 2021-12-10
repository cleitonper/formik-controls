import styled from 'styled-components';


export const Container = styled.div`
  display: inline-block;

  .star {
    cursor: pointer;
    transition: all 250ms;
    overflow: hidden;
    color: #BFBFBF;
  }

  .star.active {
    color: #D6001C;
  }

  input {
    visibility: hidden;
    position: absolute;
  }
`;
