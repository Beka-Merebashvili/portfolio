import styled from "styled-components";
import githubIcon from "../assets/images/icon-github.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import linkedinIcon from "../assets/images/icon-linkedin.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";

export default function SocialMedia() {
  const socialMediaIcons = [
    { name: "GitHub", icon: githubIcon },
    { name: "Facebook", icon: facebookIcon },
    { name: "LinkedIn", icon: linkedinIcon },
    { name: "Twitter", icon: twitterIcon },
  ];
  return (
    <SocialNavigation>
      <h2>merebashvili</h2>
      <div className="navigation">
        {socialMediaIcons.map((socialMedia, index) => (
          <img key={index} src={socialMedia.icon} alt={socialMedia.name} />
        ))}
      </div>
    </SocialNavigation>
  );
}

const SocialNavigation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 0 0 0;
 h2 {
    font-weight: 700;
font-size: 24px;
line-height: 32px;
letter-spacing: -0.33px;
color: #FFFFFF;
margin-bottom: 20px;
 }
 .navigation {
    display: flex;
    gap: 10px;
 }
`
