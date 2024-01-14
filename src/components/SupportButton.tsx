import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
}

const StyledSupportButton = styled.button`
  background: #997042;
  border: none;
  border-radius: 45px;
  font-size: 23px;
  color: white;
`;

const SupportButton: React.FC<Props> = ({ label }) => {
  return (
    <StyledSupportButton>{label}</StyledSupportButton>
  )

}

export default SupportButton;