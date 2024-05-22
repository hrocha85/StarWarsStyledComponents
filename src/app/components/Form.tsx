// components/Form.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useData } from '../context/DataContext.tsx';

interface FormValues {
  title: string;
}

const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { setData } = useData();

  const onSubmit = (data: FormValues) => {
    setData((prevData) => [...prevData, data.title]);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('title')} placeholder="Enter title" />
        <Button type="submit">Add</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
