import styled from "styled-components";

const UnderLine = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 2.28571px;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  border-bottom: 2px solid #4ee1a0;
  padding-bottom: 6px;

  @media only screen and (min-width: 1440px) {
    &:hover {
      color: #4ee1a0;
      transition: 0.2s;
    }
  }
`;

export default UnderLine;
