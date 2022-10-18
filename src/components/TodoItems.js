import React from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d9da7;
  background-color: #2d2d35;
  font-size: 14px;
  border-radius: 4 px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid #ced4da;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      background-color: #0050ff;
      color: #0050ff;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 22px;
  color: #9d9da7;
  ${(props) =>
    props.done &&
    css`
      color: #f3f3f3;
    `}
`;

const TodoItems = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>삭제</Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItems);
