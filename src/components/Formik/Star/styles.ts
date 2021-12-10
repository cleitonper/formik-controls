import styled from 'styled-components';


export const Field = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 420px) {
    .label {
      font-size: 1rem;
      margin-right: 8px;
    }

    .stars {
      font-size: calc(1.15rem + 1.40vw);
    }

    .stars .star {
      padding: 2px;
    }

    .error {
      width: 100%;
      margin-top: -2px;
    }
  }

  @media (min-width: 421px) and (max-width: 959px) {
    .label {
      font-size: 1.35rem;
      margin-right: 12px;
    }

    .stars {
      font-size: 2rem;
    }

    .error {
      width: 100%;
      margin-top: -2px;
    }
  }

  @media (min-width: 960px) {
    .label {
      font-size: 1.35rem;
      margin-right: 18px;
    }

    .stars {
      font-size: 2.55rem;
    }

    .error {
      width: 100%;
      margin-top: -8px;
    }
  }
`;
