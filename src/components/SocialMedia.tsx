import styled from "styled-components";
import githubIcon from "../assets/images/icon-github.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import linkedinIcon from "../assets/images/icon-linkedin.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";

export default function SocialMedia() {
  const socialMediaLinks = [
    { name: "GitHub", icon: githubIcon, url: "https://github.com/Beka-Merebashvili" },
    { name: "Facebook", icon: facebookIcon, url: "https://www.facebook.com/beqa.merebashvili.73" },
    { name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com/in/beka-merebashvili-a04554248/" },
    { name: "Twitter", icon: twitterIcon, url: "https://twitter.com/merebashvili99" },
  ];
  return (
    <SocialNavigation>
      <h2>merebashvili</h2>
      <div className="navigation">
      {socialMediaLinks.map((socialMedia, index) => (
          <a key={index} href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            <img src={socialMedia.icon} alt={socialMedia.name} />
          </a>
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
    margin: 20px 0 22px 0;
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
