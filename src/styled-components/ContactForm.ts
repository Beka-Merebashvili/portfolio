import styled from "styled-components"

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 50px 0 86px 0;
  .inputWrapper {
    position: relative;
  }
  input,
  textarea {
    width: 342px;
    height: 43px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.22px;
    background-color: #242424;
    border: none;
    border-bottom: 1px solid #ffffff;
    outline: none;
    padding-left: 24px;
  }
  .message {
    height: 107px;
  }
  .errorMessage {
    color: #ff6f5b;
    font-size: 12px;
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.16px;
    position: absolute;
    bottom: -20px;
    right: 0;
  }
  .errorIcon {
    position: absolute;
    top: 8px;
    right: 0;
  }
  button {
    background-color: #242424;
    border: none;
    border-bottom: 2px solid #4ee1a0;
    padding-bottom: 8px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 2.286px;
    margin-left: 186px;
  }

  @media only screen and (min-width: 768px) {
    input,
    textarea {
      width: 445px;
    }
    button {
      margin-left: 282px;
    }
  }
`;

export default ContactForm;