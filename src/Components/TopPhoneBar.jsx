import React from "react";
import styled from "styled-components";

export default function TopPhoneBar() {
    return (
        <TopPhoneBarContainer href="tel:(514)991-2320">
            <Title>(514)991-2320</Title>
            <Icon fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3Zm1 17H7V4h10v14Zm-3 3h-4v-1h4v1Z"></path>
            </Icon>
        </TopPhoneBarContainer>
    )
}

const TopPhoneBarContainer = styled.a`
    width: max-content;
    padding: 0 20px;
    border-radius: 50px;
    height: 70px;
    background-color: #101010;
    color: #fff;
    text-decoration: none;
    position: fixed;
    top: 17.5px;
    right: 17.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 100;
    transition: all 100ms ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    @media screen and (max-width: 768px) {	
        width: 100%;
        top: 0;
        right: 0;
        border-radius: 0;
        padding: 0 10px;
    }
`;

const Title = styled.h1`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
`;

const Icon = styled.svg`
    width: 22px;
    height: 22px;
    fill: #fff;
    top: 20px;
    right: 20px;
`;
