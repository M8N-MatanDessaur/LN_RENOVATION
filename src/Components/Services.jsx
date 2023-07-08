import React from "react";
import styled from "styled-components";

import a from "../Images/a.jpg";
import b from "../Images/b.jpg";
import c from "../Images/c.jpg";
import d from "../Images/d.jpg";
import e from "../Images/e.jpg";

const servicesData = [
  { image: e, title: "Gestion de projet" },
  { image: d, title: "Revêtement de plancher" },
  { image: c, title: "Travaux de finition" },
  { image: b, title: "Cuisine et salle de bains" },
  { image: a, title: "Excavation et terrassement" },
];

export default function Services({ handleClick }) {
  return (
    <>
      <Title>Nos services</Title>
      <ServicesSection>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            onClick={handleClick}
          >
            <ServiceCardTitle>{service.title}</ServiceCardTitle>
          </ServiceCard>
        ))}
        <OtherServiceCard>
          <OtherServiceHeading>Et plus encore...</OtherServiceHeading>
          <OtherServiceTitle onClick={handleClick}>Drains Français</OtherServiceTitle>
          <OtherServiceTitle onClick={handleClick}>Dalle de béton</OtherServiceTitle>
          <OtherServiceTitle onClick={handleClick}>Pavé</OtherServiceTitle>
          <OtherServiceTitle onClick={handleClick}>Démolition</OtherServiceTitle>
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
};
`;