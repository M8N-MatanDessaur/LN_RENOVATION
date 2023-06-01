import React from "react";
import styled from "styled-components";

export default function CompanyDetails() {
    return (
        <CompanyDetailsContainer>
            <CompanyTitle>— Entrepreneur Géneral —</CompanyTitle>
            <CompanyName>LNRENOVATION</CompanyName>
            <CompanyQuote>Votre <Higlighted>maison</Higlighted>, Votre <Higlighted>style</Higlighted></CompanyQuote>
        </CompanyDetailsContainer>
    )
}

const CompanyDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }

  @media (max-width: 320px) {
    margin-top: 0.5rem;
  }
`;

const CompanyTitle = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 1rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }

`;

const CompanyName = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 600;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const CompanyQuote = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const Higlighted = styled.span`
  color: #e87500;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #e87500;
  text-decoration-thickness: 0.15rem;
  text-underline-offset: 0.2rem;
  text-decoration-style: solid;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-underline-offset: 0.5rem;
    cursor: pointer;
  }
`;