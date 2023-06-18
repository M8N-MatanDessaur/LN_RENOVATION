import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import AboutUs from '../Components/About';
import CompanyDetails from '../Components/CompanyDetails';
import Services from '../Components/Services';
import ContactForm from '../Components/ContactForm';
import WhoWeAre from '../Components/WhoWeAre';
import bgImg from '../Images/bgImg.jpg';

export default function PageOne() {
  const ref = useRef(null);
  const doClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <AppContainer>

      <LandingSection>
        <CompanyDetails />
        <AboutUs />
        <ContactButton onClick={doClick}>Contactez nous</ContactButton>
      </LandingSection>
    
      <WhoWeAre />

      <Services />

      <div ref={ref} style={{height:"100%"}}>
      <ContactForm/>
      </div>
     

    </AppContainer >
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141414;
`;

const LandingSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: #141414;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactButton = styled.button`
  width: 15rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #e87500;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 2rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  
  &:active {
    cursor: pointer;
    background-color: #181818f0;
    color: #fff;
    border: 4px solid #e87500;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 13rem;
    height: 3rem;
    padding: 0.5rem;
    border-radius: 50px;
    font-size: 1rem;
  } 
`;

