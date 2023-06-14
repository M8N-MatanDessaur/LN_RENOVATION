import React from "react";
import styled from "styled-components";

export default function WhoWeAre() {
    return (
        <Container>
            <BlockQuote>
                <br />
                En tant qu'experts en gestion de projets et coordination d'équipes avec 6 ans d'expérience dans la construction, notre jeune compagnie basée à Montréal offre des services complets de haute qualité. Notre équipe talentueuse s'engage à respecter les délais et à dépasser les attentes des clients, tout en sélectionnant les meilleurs matériaux et en assurant une sécurité optimale. Notre processus transparent et notre système de feedback solide garantissent une expérience client sans faille à chaque étape de votre projet. Satisfaction assurée !
            </BlockQuote>
        </Container>
    )
}

const BlockQuote = styled.blockquote`
    font-size: 1.2rem;
    font-weight: 800;
    color: #fff;
    text-align: left;
    line-height: 1.5;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.6rem;
    }

    &::before {
        content: open-quote;
        font-size: 4rem;
        color: #fff;
        line-height: 0.1;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    &::after {
        content: "";
    }
`;

const Container = styled.div`
    height: max-content;
    width: 100%;
    background-color: #e87500;
    padding: 35px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 15px;
    }

    @media screen and (max-width: 320px) {
        padding: 10px;
    }
`;