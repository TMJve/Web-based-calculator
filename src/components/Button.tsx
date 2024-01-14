import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
  Number,
  Operation
}


type Props = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: ButtonType;
  label: string;
  position?: [x: number, y: number];
  width?: number;
}


const StyledButton = styled.button`
  background: #D7D7D7;
  border: none;
  border-radius: 45px;
  font-size: 23px;
  color: white;
`;



const Button: React.FC<Props> = ({ buttonType = ButtonType.Operation, label, position, width, onClick }) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }

  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }

  if (buttonType === ButtonType.Number) {
    styles.background = '#EE8816';
  }

  return (
    <StyledButton onClick={onClick} style={styles}>{label}</StyledButton>
  )

}

export default Button;