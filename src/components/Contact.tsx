import styled from "styled-components";

export default function Contact() {
  return (
    <ContactContainer id="1">
      <div className="description">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  width: 100%;
  height: 834px;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    color: #ffffff;
    letter-spacing: -1.136px;
  }
  .description p {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: #D9D9D9;
    text-align: center;
    width: 342px;
    margin-top: 20px;
  }
`;
