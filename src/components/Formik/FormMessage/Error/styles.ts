import styled from 'styled-components';


export const Message = styled.p`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  border-width: 2px;
  border-radius: 6px;
  border-style: solid;
  border-color: rgba(215, 0, 0, 0.55);
  background-color: rgba(180, 0, 0, 0.10);
  color: #D32F2F;
  padding: 12px;

  transition: all 450ms;

  &:not(.show) {
    transform: scale(0.15);
    opacity: 0;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .text {
    line-height: 1.15em;
    width: calc(100% - 36px);
    margin-left: 12px;
  }
`;
