import SocialMedia from "./SocialMedia";
import styled from "styled-components";
import myPhoto from "../assets/images/main-character.jpg";

export default function AboutMe() {
  return (
    <Container>
      <SocialMedia />
      <div className="imgBox">
        <img src={myPhoto} alt="" />
      </div>
      <p className="name">
        Nice to meet you! I'm <span>Beka Merbashvili</span>
      </p>
      <p className="aboutMe">
        I'm a front-end developer.With a passion for creating visually appealing
        and user-friendly websites, I strive to deliver seamless experiences
        through clean and efficient code. Let's collaborate and bring your ideas
        to life!
      </p>
      <p className="contact">contact me</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .imgBox {
    width: 174px;
    height: 240px;
  }
  .imgBox img {
    width: 100%;
    overflow: hidden;
  }
  .name {
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -1.13px;
    color: #ffffff;
    width: 342px;
    margin: 24px;
  }
  .name span {
    text-decoration: underline #4ee1a0 4px;
  }
  .aboutMe {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #d9d9d9;
    width: 342px;
  }
  .contact {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2.28571px;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: underline 2px #4ee1a0;
    margin: 24px 0 80px 0;
  }
`;
