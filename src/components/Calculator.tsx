import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonType } from './Button';

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
  background: #6f6f6f;
  border-radius: 5px;
  font-size: 45px;
  color: #fff;
  grid-column-end: span 4;
  text-align: right;
  display: grid;
  grid-template-areas: 'history history' 'calculation calculation';
`;

const History = styled.div`
  grid-area: history;
  text-align: left;
  padding-left: 10px;
  font-size: 33px;
  color: #dedede;
  display: flex;
  flex-direction: column-reverse;
`;

const Calculation = styled.div`
  grid-area: calculation;
  text-align: right;
  padding-right: 10px;
`;

const Calculator: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [calculation, setCalculation] = useState<string>('0');
  const [history, setHistory] = useState<string>('');

  const handleButtonClick = (buttonValue: string) => {
    if (buttonValue === 'C') {
      setCalculation('0');  // Reset to '0'
      setHistory('');
    } else if (buttonValue === 'DEL') {
      setCalculation((prevCalculation) => {
        return prevCalculation.length > 1 ? prevCalculation.slice(0, -1) : '0';
      });
    } else if (buttonValue === '=') {
      try {
        const result = eval(calculation);
        setHistory(calculation + '=');
        setCalculation(result.toString());
      } catch (error) {
        setCalculation('Error');
      }
    } else {
      setCalculation((prevCalculation) => {
        return prevCalculation === '0' ? buttonValue : prevCalculation + buttonValue;
      });
    }
  };

  const handleQuestionMark = () => {
    navigate('/Support');
  };

  return (
    <Container>
      <Grid>
        <Display>
          <History>{history}</History>
          <Calculation>{calculation}</Calculation>
        </Display>
        <Button label='C' position={[0, 1]} onClick={() => handleButtonClick('C')} />
        <Button label='DEL' position={[1, 1]} onClick={() => handleButtonClick('DEL')} />
        <Button label='?' position={[2, 1]} onClick={handleQuestionMark} />
        <Button label='/' position={[3, 1]} onClick={() => handleButtonClick('/')} />
        <Button label='X' position={[3, 2]} onClick={() => handleButtonClick('*')} />
        <Button label='-' position={[3, 3]} onClick={() => handleButtonClick('-')} />
        <Button label='+' position={[3, 4]} onClick={() => handleButtonClick('+')} />
        <Button buttonType={ButtonType.Number} label='1' position={[0, 2]} onClick={() => handleButtonClick('1')} />
        <Button buttonType={ButtonType.Number} label='2' position={[1, 2]} onClick={() => handleButtonClick('2')} />
        <Button buttonType={ButtonType.Number} label='3' position={[2, 2]} onClick={() => handleButtonClick('3')} />
        <Button buttonType={ButtonType.Number} label='4' position={[0, 3]} onClick={() => handleButtonClick('4')} />
        <Button buttonType={ButtonType.Number} label='5' position={[1, 3]} onClick={() => handleButtonClick('5')} />
        <Button buttonType={ButtonType.Number} label='6' position={[2, 3]} onClick={() => handleButtonClick('6')} />
        <Button buttonType={ButtonType.Number} label='7' position={[0, 4]} onClick={() => handleButtonClick('7')} />
        <Button buttonType={ButtonType.Number} label='8' position={[1, 4]} onClick={() => handleButtonClick('8')} />
        <Button buttonType={ButtonType.Number} label='9' position={[2, 4]} onClick={() => handleButtonClick('9')} />
        <Button buttonType={ButtonType.Number} label='0' position={[0, 5]} width={2} onClick={() => handleButtonClick('0')} />
        <Button label='=' position={[2, 5]} width={2} onClick={() => handleButtonClick('=')} />
      </Grid>
    </Container>
  );
};

export default Calculator;
