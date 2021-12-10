import styled from 'styled-components';


export const Message = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
  max-height: 120px;
  max-width: 100%;
  width: 100%;

  transition-property: padding, max-height, max-width;
  transition-duration: 250ms, 250ms, 250ms;
  transition-delay: 250ms, 250ms, 0ms;

  &:not(.show) {
    transition-delay: 0ms, 0ms, 250ms;

    max-height: 0px;
    max-width: 0px;
    padding: 0px;
  }

  .message,
  .text {
    line-height: 1.25em;
  }

  .message {
    color: #66B54A;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    font-size: 0.80em;
    margin-left: 4px;
  }

  .text {
    text-align: center;
    font-weight: 300;
    color: #3F3F3F;
  }

  @media (max-width: 379px) {
    .message,
    .text {
      font-size: 1rem;
    }
  }

  @media (min-width: 380px) and (max-width: 1023px) {
    .message,
    .text {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 1023px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media (min-width: 1024px) {
    padding-top: 24px;
    padding-bottom: 24px;

    .message,
    .text {
      font-size: 1.35rem;
    }

    .message:not(:last-child) {
      margin-bottom: 2px;
    }
  }
`;
