import SocialMedia from "./SocialMedia";
import styled from "styled-components";
import UnderLine from "../styled-components/UnderLine";
import myPhoto from "../assets/images/my-photo.jpg";
import circle from "../assets/images/pattern-circle.svg";
import pattern from "../assets/images/pattern-rings.svg";
import donwloadIcon from "../assets/images/download-icon.svg"
import { saveAs } from "file-saver";

export default function AboutMe() {
  const handleDownload = () => {
    const fileUrl = "./docs/Beka-Merebashvili.pdf";
    const fileName = "Beka Merebasvhili";
    saveAs(fileUrl, fileName);
  };

  return (
    <Container>
      <SocialMedia />
      <div className="imgBox">
        <img src={myPhoto} alt="" />
      </div>
      <p className="name">
        Nice to meet you! I'm <span>Beka Merebashvili</span>
      </p>
      <p className="aboutMe">
        I'm a front-end developer.With a passion for creating visually appealing
        and user-friendly websites, I strive to deliver seamless experiences
        through clean and efficient code. Let's collaborate and bring your ideas
        to life!
      </p>
      <UnderLine href="#1">contat me</UnderLine>
      <button onClick={handleDownload}>Download CV <img src={donwloadIcon} alt="" /> </button>
      <img className="circle" src={circle} alt="circle" />
      <img className="ring" src={pattern} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
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
    margin-bottom: 24px;
  }
  button {
    margin-top: 30px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .circle {
    position: absolute;
    top: 220px;
    right: -64px;
  }
  .ring {
    position: absolute;
    top: 110px;
    left: -370px;
  }

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    padding-left: 32px;
    .imgBox {
      width: 322px;
      height: 600px;
      position: absolute;
      right: 0;
      z-index: -1;
    }
    .name {
      font-size: 72px;
      font-weight: 700;
      line-height: 82px;
      text-align: start;
      letter-spacing: -2.045px;
      width: 440px;
      margin-left: 0;
    }
    .aboutMe {
      font-size: 18px;
      line-height: 28px;
      text-align: start;
      width: 400px;
    }
    button {
      position: absolute;
      top: 514px;
      left: 370px;
    }
    .ring {
      top: 70px;
      left: -300px;
    }
    .circle {
      top: 300px;
    }
  }

  @media only screen and (min-width: 1440px) {
    padding: 0 165px;
    .imgBox {
      width: 445px;
      height: 720px;
      right: 165px;
    }
    .name {
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -2.5px;
      width: 700px;
    }
    .aboutMe {
      width: 445px;
    }
    button {
      top: 531px;
      left: 496px;
      &:hover{
        cursor: pointer;
        background-color: #949393;
        transition: 0.3s;
      }
    }
    .circle {
      top: 390px;
      right: 545px;
    }
    .ring {
      left: -140px;
    }
  }
`;
