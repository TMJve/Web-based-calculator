import React, { useState } from 'react';
import Form from './Form';
import styled from 'styled-components';



const SupportContainer = styled.div`

  color:#fff;
`;

const Support = () => {
  return (
    <SupportContainer>
      <h1>Support Ticket Form</h1>
      <hr />
      <Form />
    </SupportContainer>
  );
};

export default Support;
