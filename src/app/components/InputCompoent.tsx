import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';


const FormContainer = styled.div`
`;

const Input = styled.input`

  height: 40px;
  gap: 0px;
  border-radius: 5px;
  padding-left: 2%;
  text-align: center;
`;



interface InputComponentProps {
  InputValue: any;
  InputPlaceholder: string;
  InputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputType: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  InputValue,
  InputPlaceholder,
  InputOnChange,
  InputType
}) => {

  
  return (
    <FormContainer>
      <form >
        <Input type={InputType} placeholder={InputPlaceholder} onChange={InputOnChange} value={InputValue} />
      </form>
    </FormContainer>
  );
};

export default InputComponent;
