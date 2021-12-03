import React from "react";
import styled from "styled-components";



const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
   background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
margin: 50;
  margin-top: 200;
  font-weight: 800;
  font-size: 90px;
  
  text-transform: uppercase;
	background: linear-gradient(to right, #ddd6f3 0%, #faaca8 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
		family: $font;
	};
}
`;

const Slogan = styled.h4`
  margin-: 10;
  
  font-weight: 700;
  font-size: 30px;
  margin-top: -30px;
  text-transform: uppercase;
	background: linear-gradient(to right, #ddd6f3 0%, #faaca8 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
		family: $font;
	};
}
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 0em;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(to right, #ddd6f3 0%, #faaca8 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
		family: $font;
	};
}
`;



const Button = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 28px;
  font-weight: 650;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 2em;
  cursor: pointer;
  border: 2px solid transparent;
  background: linear-gradient(to right, #ddd6f3 0%, #faaca8 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #faaca8;
  }
`;



export function TopSection() {
  
  return (
    <TopSectionContainer>
     
      <Logo>Moon tour</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>
    Ten years ago the Moon was an inspiration to poets and an opportunity for lovers. Ten years from now it will be just another airport.
      </Paragraph>
      <Button  >Get Started</Button>
      {/* <NavLink  to="/Home">Back to Home</NavLink> */}
    </TopSectionContainer>
  );
}
