import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const InsertForm = styled.form`
  background: #18181a;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  /* border-top: 1px solid #e9ecef; */
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #0050ff;
  background-color: #18181a;
  color: white;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;

const TodoInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    nextId.current += 1;
  };

  return (
    <div>
      <InsertForm onSubmit={onSubmit}>
        <Input autoFocus placeholder='해야하는 일을 적어주세요' onChange={onChange} value={value} />
      </InsertForm>
    </div>
  );
};

export default TodoInput;
