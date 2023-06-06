import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <Title>Nos services</Title>
            <ServicesSection>
                <ServiceCard>
                    <ServiceCardTitle>Géstion de projet</ServiceCardTitle>
                    <ServiceCardDescription>
                        La magie opère! Transformez vos projets de rénovation en une expérience sans stress. Du rafraîchissement des couleurs aux métamorphoses complètes, nous gérons tout. Détendez-vous et laissez-nous faire briller votre chez-vous!
                    </ServiceCardDescription>
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardTitle>Revetement de plancher</ServiceCardTitle>
                    <ServiceCardDescription>
                        Dansez sur nos revêtements! Des sols qui vous font vibrer. Du parquet élégant aux carrelages audacieux, nous couvrons toutes vos envies. Une équipe de pros pour un sol parfait. Plancher de rêve en quelques clics!
                    </ServiceCardDescription>
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardTitle>Travaux de finition.</ServiceCardTitle>
                    <ServiceCardDescription>
                        Les derniers détails qui font la différence! Experts en travaux de finition, nous ajoutons la touche finale à votre projet. Des moulures impeccables aux peintures artistiques, chaque détail compte. Votre espace prend vie avec notre finesse. Finitions qui éblouissent, pour un intérieur qui épate!
                    </ServiceCardDescription>
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardTitle>Cuisine et salle de bains</ServiceCardTitle>
                    <ServiceCardDescription>
                        Élevez votre cuisine et salle de bains à un niveau épique! Des designs innovants aux installations fonctionnelles, nous créons des espaces qui impressionnent. Des cuisines qui font saliver et des salles de bains qui détendent. Une expertise culinaire pour une expérience enivrante. Laissez-nous sublimer vos instants gourmands et relaxants!
                    </ServiceCardDescription>
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardTitle>Excavation et terrasement</ServiceCardTitle>
                    <ServiceCardDescription>
                        Creusez plus profond, construisez plus haut! Spécialistes de l'excavation et du terrassement, nous préparons le terrain pour vos projets ambitieux. Du creusage précis aux fondations solides, notre équipe maîtrise chaque étape. Nous façonnons votre vision avec puissance et précision. Laissez-nous faire naître des merveilles du sol!
                    </ServiceCardDescription>
                </ServiceCard>
                <OtherServiceCard>
                    <h2 style={{color:"#fff"}}>Et plus encore...</h2>
                    <OtherServiceTitle>Drains Français</OtherServiceTitle>
                    <OtherServiceTitle>Dalle de béton</OtherServiceTitle>
                    <OtherServiceTitle>Pavé</OtherServiceTitle>
                    <OtherServiceTitle>Démolition</OtherServiceTitle>
                </OtherServiceCard>
            </ServicesSection>
        </>
    )
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

`;

const ServiceCard = styled.div`
  width: 350px;
  height: 350px;
  padding: 1rem;
  background-color: #121212;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  height: 350px;
  padding: 1rem;
  background-color: #121212;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const OtherServiceTitle = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  border-radius: 5rem;
  padding: 0.5rem;
  background-color: #1f1f1f;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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

const ServiceCardTitle = styled.h1`
  color: #fff;
  font-size: 1.4rem;
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

const ServiceCardDescription = styled.p`
  color: #fff;
  overflow-y: auto;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;
