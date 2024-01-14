import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  gap: 10px; /* Adjust the gap as needed */
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; /* Adjust the flex-direction to column */
  align-items: center; /* Center the content horizontally */
`;

const SendButton = styled.button`
  background-color: orange;
  color: white;
  border-radius: 12px;
  border: none;
  padding: 10px 20px;
  margin-top: 10px; /* Add margin to separate the button from the message */
`;

const Input = styled.input`
  background-color: #323232;
  color: white;
  border: 1px solid white; /* Add a border for better visibility */
  border-radius: 5px;
  padding: 5px; /* Add some padding for better appearance */

  &:focus {
    border-color: orange;
    outline: none;
  }
`;

const RadioInput = styled.input`
  margin-top: 15px;
`;

const RequiredLabel = styled.span`
  color: red;
`;

const TopicContainer = styled.div`
  border: 1px dotted white;
  border-radius: 5px;
`;

const EmailInput = styled(Input)`
  width: 350px; /* Adjust the width as needed */
`;

const ThankYouMessage = styled.div`
  font-size: 24px;
  color: orange;
  text-align: center; /* Center the text */
`;

const TicketNumber = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 10px; /* Add margin to separate the number from the message */
`;

const Form: React.FC<{}> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    problem: '',
  });

  const [ticketNumber, setTicketNumber] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadio = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);




    const newTicketNumber = Math.floor(Math.random() * 10000) + 1;
    setTicketNumber(newTicketNumber);


    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      problem: '',
    });


    setShowForm(false);
  };

  return (
    <MainContainer>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <label>
              First Name <RequiredLabel>*</RequiredLabel>
              <br />
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onInput={handleInput}
                required
              />
            </label>
            <label>
              Last Name <RequiredLabel>*</RequiredLabel>
              <br />
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onInput={handleInput}
                required
              />
            </label>
          </FormContainer>
          <br />
          <label>
            Email <RequiredLabel>*</RequiredLabel>
            <br />
            <EmailInput
              type="email"
              name="email"
              value={formData.email}
              onInput={handleInput}
              required
            />
          </label>
          <br />

          <label>
            <br />
            TOPIC
            <br />
            <TopicContainer>
              <RadioInput
                type="radio"
                name="problem"
                value="Technical Issue"
                checked={formData.problem === 'Technical Issue'}
                onInput={handleRadio}
              />
              Technical Issue
              <br />
              <RadioInput
                type="radio"
                name="problem"
                value="General Inquiry"
                checked={formData.problem === 'General Inquiry'}
                onInput={handleRadio}
              />
              General Inquiry
            </TopicContainer>
          </label>

          <br />
          <SendButton type="submit">SEND</SendButton>
        </form>
      ) : (
        <>
          <ThankYouMessage>
            Thank you for sending us your report, we will track the problem now
          </ThankYouMessage>
          {ticketNumber && (
            <TicketNumber>ticket number: {ticketNumber}</TicketNumber>
          )}
        </>
      )}
    </MainContainer>
  );
};

export default Form;
