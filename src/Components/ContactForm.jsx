import React from "react";
import styled from "styled-components";
import gestion from "../Images/gestion-projet.jpg";

const ContactForm = () => {

  return (
    <Container>
      <FormContainer>
        <div>
        <FormTitle>Contactez nous</FormTitle>
        <FormSubtitle>Nous vous contacterons dans les plus brefs délais</FormSubtitle>
        </div>
        <Form action="https://api.web3forms.com/submit" method="POST" id="form">
        <input type="hidden" name="access_key" value="0037ea31-132b-4474-b770-8d56a03aa6af" />
        <input type="hidden" name="subject" value="New Request 📃" />
        <input type="hidden" name="from_name" value="LNRenovations:Request" />
          <FormField>
            <Input
              type="text"
              id="name"
              required
              placeholder="Entrez votre nom"
              name="name"
            />
          </FormField>
          <FormField>
            <Input
              type="email"
              id="email"
              required
              placeholder="Entrez votre email"
              name="email"
            />
          </FormField>
          <FormField>
            <Input
              type="phone"
              id="phone"
              required
              placeholder="Entrez votre numéro"
              name="phone"
            />
          </FormField>
          <SubmitButton type="submit">envoyer</SubmitButton>
        </Form>
      </FormContainer>
      <Image></Image>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${gestion});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`;


const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
`;

const FormTitle = styled.h2`
  color: #fff;
  font-size: 1.8rem;

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

const FormSubtitle = styled.p`
  color: #ffffff80;
  font-size: 1rem;

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 350px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;

  @media (max-width: 425px) {
    width: 300px;
  }
`;


const SubmitButton = styled.button`
width: 15rem;
height: 3rem;
border: none;
border-radius: 0.5rem;
background-color: #e87500;
color: #fff;
font-size: 1.2rem;
font-weight: 600;
margin-top: 0.5rem;
transition: all 0.1s ease-in-out;

&:hover {
  cursor: pointer;
  transform: scale(1.05);
}

&:active {
  cursor: pointer;
  background-color: #181818f0;
  color: #fff;
  border: 4px solid #e87500;
}

&:focus {
  outline: none;
}

@media (max-width: 768px) {
  width: 13rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50px;
  font-size: 1rem;
} 
`;
