import React from "react";
import styled from "styled-components";

export default function AboutUs() {
    return (
        <AboutUsContainer>
            <AboutUsText>
            Nous sommes une jeune compagnie basée à Montréal, 
            offrant un service clef-en-main axé sur la qualité, 
            le souci du détail et la satisfaction du client. 
            Notre processus transparent et notre système de 
            feedback solide garantissent une expérience client sans 
            faille à chaque étape de votre projet
            </AboutUsText>
        </AboutUsContainer>
    )
}

const AboutUsContainer = styled.div`
    max-width: max-content;
    height: max-content;
    margin: 17.5px auto;
    background-color: #e8750015;
    backdrop-filter: blur(6px);
    border-radius: 10px;
    padding: 35px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 768px) {	
        padding: 20px;
        width: 90%;
    }

    @media screen and (max-width: 480px) {
        padding: 15px;
        width: 95%;
    }

    @media screen and (max-width: 320px) {
        padding: 10px;
        width: 100%;
    }
`;

const AboutUsText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    line-height: 1.5;
    max-width: 800px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;