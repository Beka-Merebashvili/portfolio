import styled from "styled-components";

const UnderLine = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 2.28571px;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  &::after {
  content: "";
  position: absolute;
  bottom: -10px;  
  left: 0;
  width: 100%;
  height: 2px; 
  background-color: #4ee1a0;  
}
`;

export default UnderLine;
