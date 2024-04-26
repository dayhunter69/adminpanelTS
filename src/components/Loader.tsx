import React from "react";
import styled, { keyframes } from "styled-components";
import img from "../assets/rodhi.png";
// Define keyframes for the loading animation
const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

const Dots = styled.span`
  animation: ${blink} 1s infinite;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  /*  animation: ${blink} 1s infinite; Apply the blink animation */
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Logo src={img} alt="Rodhi Logo" />
      <LoadingText>
        Loading<Dots>...</Dots>
      </LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
