import React, { useState } from "react";
import styled from "styled-components";
import gestion from "../Images/gestion-projet.jpg";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission (e.g., send email)
    // You can access the form data via the state variables (name, email, message)
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Envoyez nous votre demande</FormTitle>
        <Form onSubmit={handleSubmit} id="contact-form">
          <FormField>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Entrez votre nom"
            />
          </FormField>
          <FormField>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Entrez votre email"
            />
          </FormField>
          <FormField>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Entrez votre demande"
            />
          </FormField>
          <SubmitButton type="submit">e</SubmitButton>
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
