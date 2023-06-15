import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PageOne from "./Pages/PageOne";
import Gallery from "./Pages/Gallery";
import TopPhoneBar from "./Components/TopPhoneBar";

import logo from "./Images/logo.svg";

export default function App() {
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTutorial(false);
    }, 4000);
  }, []);

  return (
    <BrowserRouter>
      {showTutorial && <TutorialOverlay />}
      <TopPhoneBar />
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <RBQ>RBQ : 5820-5246-01</RBQ>
      <GalleryButton />
    </BrowserRouter>
  );
}

const TutorialOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleClick = () => {
    setShowOverlay(false);
  };

  return (
    <Overlay onClick={handleClick} hidden={!showOverlay}>
      <Logo src={logo} alt="logo" />
      <Instruction top="70px" right="25px">
        Appuiez ici pour appeler
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m7 14 5-5 5 5H7Z"></path>
        </svg>
      </Instruction>
      <Instruction bottom="80px" right="25px">
        Appuiez ici pour voir la galerie
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m7 9.5 5 5 5-5H7Z"></path>
        </svg>
      </Instruction>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(2px);
  z-index: 2000;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 50%;
  height: 200px;
  z-index: 3000;
`;

const Instruction = styled.div`
  position: absolute;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  ${({ top, bottom, left, right }) => `
    ${top ? `top: ${top};` : ''}
    ${bottom ? `bottom: ${bottom};` : ''}
    ${left ? `left: ${left};` : ''}
    ${right ? `right: ${right};` : ''}
  `}

  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
    
`;

const GalleryButton = () => {
  const location = useLocation();

  const isGalleryPage = location.pathname === "/gallery";

  return (
    <StyledButton to={isGalleryPage ? "/" : "/gallery"} isBackButton={isGalleryPage}>
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d={isGalleryPage ? "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" : "M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14Zm-8 13.51L8.5 13.5 5 18h14l-4.5-6-3.5 4.51Z"}
        ></path>
      </svg>
    </StyledButton>
  );
};


const StyledButton = styled(Link)`
  position: fixed;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #101010;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  bottom: 17.5px;
  right: 17.5px;
  color: #ffffff;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1000;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #e8750020);	

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    color: #ffffff;
    background-color: #202020;
    transform: scale(1.05);
  }
`;

const RBQ = styled.p`
  position: fixed;
  background-color: #101010;
  border-radius: 50px;
  padding: 17px 1rem;
  bottom: 17.5px;
  left: 17.5px;
  color: #ffffffa0;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  cursor: help;
  filter: drop-shadow(0px 0px 5px #e8750020);	
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
};
`;