import styled from "styled-components";
import pattern from "../assets/images/pattern-rings.svg"

export default function Experience() {
  const experience = [
    { title: "HTML", info: "2 Years Experience" },
    { title: "CSS", info: "2 Years Experience" },
    { title: "Javascript", info: "1.5 Years Experience" },
    { title: "React", info: "1 Year Experience" },
    { title: "Typescript", info: "1 Year Experience" },
    { title: " REST API ", info: "1 Year Experience" },
  ];

  return (
    <StyledDiv>
      <hr className="line" />
      <div className="experienceWrapper">
      {experience.map((item, index) => (
        <div className="wrapper" key={index}>
          <h3>{item.title}</h3>
          <p>{item.info}</p>
        </div>
      ))}
      </div>
      <hr className="line2" />
      <div className="rings">
      <img src={pattern} alt="rings" />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0;
  position: relative;
  .line,
  .line2 {
    width: 88%;
    height: 1px;
    color: #ffffff;
  }
  .line {
    margin-bottom: 40px;
  }
  .line2 {
    margin-top: 16px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -1px;
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #d9d9d9;
  }
  .rings {
    position: absolute;
    width: 184px;
    right: 0;
    bottom: -60px;
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    /* align-items: flex-start;
    padding-left: 32px; */
     .experienceWrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 530px;
     }
     .wrapper {
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 40px;
     }
     h3 {
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -1.5px;
     }
     p {
      font-size: 18px; 
      line-height: 28px;
     }
     .line {
      width: 96%;
     }
     .line2 {
      display: none;
     }
  }
`;
