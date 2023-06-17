import React from "react";
import styled from "styled-components";

import imga from "../Images/a.jpg";
import imgb from "../Images/b.jpg";
import imgc from "../Images/c.jpg";
import imgd from "../Images/d.jpg";
import imge from "../Images/e.jpg";

export default function Services() {
  return (
    <>
      <Title>Nos services</Title>
      <ServicesSection>
        <ServiceCard image={imge}>
          <ServiceCardTitle>Gestion de projet</ServiceCardTitle>
        </ServiceCard>
        <ServiceCard image={imgd}>
          <ServiceCardTitle>Revetement de plancher</ServiceCardTitle>
        </ServiceCard>
        <ServiceCard image={imgc}>
          <ServiceCardTitle>Travaux de finition</ServiceCardTitle>
        </ServiceCard>
        <ServiceCard image={imgb}>
          <ServiceCardTitle>Cuisine et salle de bains</ServiceCardTitle>
        </ServiceCard>
        <ServiceCard image={imga}>
          <ServiceCardTitle>Excavation et terrasement</ServiceCardTitle>
        </ServiceCard>
        <OtherServiceCard>
          <OtherServiceHeading>Et plus encore...</OtherServiceHeading>
          <OtherServiceTitle>Drains Français</OtherServiceTitle>
          <OtherServiceTitle>Dalle de béton</OtherServiceTitle>
          <OtherServiceTitle>Pavé</OtherServiceTitle>
          <OtherServiceTitle>Démolition</OtherServiceTitle>
        </OtherServiceCard>
      </ServicesSection>
    </>
  );
}

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  background-color: #121212;
`;

const ServicesSection = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: #141414;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ServiceCard = styled.div`
  width: 350px;
  height: 250px;
  padding: 1rem;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props) => props.image}) center/cover no-repeat;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-position: top;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 200px;
  }

  @media (max-width: 320px) {
    width: 100%;
    height: 150px;
  }
`;

const OtherServiceCard = styled.div`
  width: 350px;
  height: 250px;
  padding: 1rem;
  background-color: #101010;
  border-radius: 0.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const OtherServiceHeading = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const OtherServiceTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 5rem;
  padding: 0.5rem;
  background-color: #1f1f1f;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const ServiceCardTitle = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;
