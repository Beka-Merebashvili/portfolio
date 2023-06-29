import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import SocialMedia from "./SocialMedia";
import errorIcon from "../assets/images/error-icon.svg";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <ContactContainer id="1">
      <div className="description">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: "Can't be blank",
              minLength: {
                value: 2,
                message: "The field must contain at least 2 letters",
              },
            })}
          />
          {errors.name && <p className="errorMessage">{errors.name.message}</p>}
          {errors.name && (<img className="errorIcon" src={errorIcon} alt="errorIcon" /> )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: "Can't be blank",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Sorry, invalid format here",
              },
            })}
          />
          {errors.email && (
            <p className="errorMessage">{errors.email.message}</p>
          )}
          {errors.email && ( <img className="errorIcon" src={errorIcon} alt="errorIcon" /> )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="messageInpunt"
            placeholder="MESSAGE"
            {...register("message", { required: "Can't be blank" })}
          />
          {errors.message && (
            <p className="errorMessage">{errors.message.message}</p>
          )}
        </div>
        <button>SEND MESSAGE</button>
      </ContactForm>
      <hr />
      <SocialMedia />
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
    color: #d9d9d9;
    text-align: center;
    width: 342px;
    margin-top: 20px;
  }
  hr {
    width: 342px;
    height: 1px;
    background-color: #ffffff;
    margin-bottom: 20px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 50px 0 86px 0;
  .inputWrapper {
    position: relative;
  }
  input {
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
  .messageInpunt {
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
`;
