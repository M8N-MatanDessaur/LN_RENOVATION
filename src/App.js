import React from 'react';
import styled from 'styled-components';
import TopPhoneBar from './Components/TopPhoneBar';
import AboutUs from './Components/About';
import CompanyDetails from './Components/CompanyDetails';

export default function App() {
  return (
    <AppContainer>
      <TopPhoneBar />
      <LandingSection>
        <CompanyDetails />
        <AboutUs />
        <ContactButton>Contactez nous</ContactButton>
      </LandingSection>
      <RBQ>RBQ : 5820-5246-01</RBQ>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: #141414;
  background-image: linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.80)),url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #181818f0;
    color: #fff;
    border: 4px solid #e87500;
  }

  &:active {
    transform: scale(0.95);
    border: 2px solid #e87500;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 2.5rem;
    font-size: 1rem;
  } 
`;

const RBQ = styled.p`
  position: fixed;
  background-color: #121212;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  bottom: 17.5px;
  left: 17.5px;
  color: #e87500a0;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;