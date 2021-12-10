import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 99vh;

  .form {
    display: flex;
    flex-flow: column wrap;
    max-width: 480px;
    background-color: #fff;
    padding: 24px 16px;
    border-radius: 12px;
  }

  .form .field {
    width: 100%;
    margin-bottom: 8px;
  }

  .form .password {
    box-shadow: 0px 0px 2px 2px rgba(180, 180, 180, 0.10);
    border: 1px solid #EAEAEA;
    background-color: #FFFFFF;
    margin-bottom: 24px;
    margin-top: 4px;
    padding: 20px 32px;
  }

  .form .password h2 {
    color: #404040;
    margin-bottom: 4px;
    font-size: 0.95rem;
    font-weight: 700;
  }

  .form .password .message {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .form .password .message p {
    color: #606060;
    font-size: 0.86rem;
    margin-top: 1px;
  }

  .form .password .message .icon {
    font-size: 1em;
    margin-right: 4px;
    color: #EF6C00;
  }

  .form .password .label,
  .form .password .input {
    color: #404040;
  }

  .form .submit {
    display: flex;
    justify-content: center;
    align-items: center;

    --foreground: #FFFFFF;
    --background: #707070;
    --border-color: #707070;
    --vertical-padding: 6px;
    --horizontal-padding: 12px;
    --font-size: 1.15rem;
    font-weight: 700;
    width: 240px;
    height: 40px;
  }
`;
