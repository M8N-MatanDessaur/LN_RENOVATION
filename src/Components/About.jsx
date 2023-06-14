import React from "react";
import styled from "styled-components";

export default function AboutUs() {
    return (
        <AboutUsContainer>
            <AboutUsText>
                Notre processus clef-en-main vous guide tout au long de votre projet, couvrant Montréal et ses environs.
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