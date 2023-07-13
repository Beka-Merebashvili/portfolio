import styled from "styled-components";
import ContactForm from "../styled-components/ContactForm";
import { useForm, SubmitHandler } from "react-hook-form";
import SocialMedia from "./SocialMedia";
import pattern from "../assets/images/pattern-rings.svg";
import errorIcon from "../assets/images/error-icon.svg";
import sentIcon from "../assets/images/snet-icon.svg"
import { useState } from "react";

export default function Contact() {
  const [complate, setComplate] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    setComplate(true);
  };

  return (
    <ContactContainer id="1">
      <div className="description">
        <h2 className="contact">Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      {complate ? (
        <Complate>
          <img src={sentIcon} alt="" />
          <p>Your message has been sent</p>
        </Complate>
      ) : (
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
            {errors.name && (
              <p className="errorMessage">{errors.name.message}</p>
            )}
            {errors.name && (
              <img className="errorIcon" src={errorIcon} alt="errorIcon" />
            )}
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
            {errors.email && (
              <img className="errorIcon" src={errorIcon} alt="errorIcon" />
            )}
          </div>
          <div className="inputWrapper">
            <textarea
              className="message"
              placeholder="MESSAGE"
              {...register("message", { required: "Can't be blank" })}
            />
            {errors.message && (
              <p className="errorMessage">{errors.message.message}</p>
            )}
          </div>
          <button>SEND MESSAGE</button>
        </ContactForm>
      )}
      <img className="rings" src={pattern} alt="" />
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
  position: relative;
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact {
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
  .rings {
    position: absolute;
    bottom: 270px;
    left: -250px;
  }
  hr {
    width: 342px;
    height: 1px;
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    .contact {
      font-size: 72px;
      line-height: 72px;
      letter-spacing: -2.045px;
    }
    .description p {
      font-size: 18px;
      line-height: 28px;
      width: 435px;
    }
    .rings {
      bottom: 150px;
      left: -350px;
    }
    hr {
      width: 94%;
    }
  }
`;



const Complate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 100px 0 86px 0;
height: 280px;
p {
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #9fdf7a;
  margin-top: 26px;
}

@media only screen and (min-width: 768px) {
  p {
    font-size: 20px;
  }
}
`;
