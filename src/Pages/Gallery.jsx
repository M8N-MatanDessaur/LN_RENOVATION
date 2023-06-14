import React from "react";
import styled from "styled-components";

import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";
import img9 from "../Images/9.jpg";

export default function Gallery() {
    return (
        <GalleryContainer>
            <GalleryGrid>
                <GalleryImage src={img1} alt="image" />
                <GalleryImage src={img2} alt="image" />
                <GalleryImage src={img3} alt="image" />
                <GalleryImage src={img4} alt="image" />
                <GalleryImage src={img5} alt="image" />
                <GalleryImage src={img6} alt="image" />
                <GalleryImage src={img7} alt="image" />
                <GalleryImage src={img8} alt="image" />
                <GalleryImage src={img9} alt="image" />
            </GalleryGrid>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background-color: #1f1f1f;
`;

const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(0.98);
        filter: brightness(0.8);
        z-index: 1;
    }
`;




