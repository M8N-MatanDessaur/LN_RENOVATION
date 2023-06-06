import React, { useState } from "react";
import styled from "styled-components";
import gestion from "../Images/gestion-projet.jpg";

const ContactForm = () => {

  return (
    <Container>
      <FormContainer>
        <FormTitle>Envoyez nous votre demande</FormTitle>
        <Form action="https://api.web3forms.com/submit" method="POST" id="form">
        <input type="hidden" name="access_key" value="7eb4362d-046f-40df-8bc3-9816007969df" />
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
            <Textarea
              id="message"
              required
              placeholder="Entrez votre demande"
              name="message"
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
  margin-bottom: 2rem;
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
    width: 100%;
  }
`;

const Textarea = styled.textarea`
width: 350px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  resize: none;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: #e87500;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
