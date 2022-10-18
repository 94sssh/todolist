import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  /* border-bottom: 1px solid #e9ecef; */
  h1 {
    margin: 0;
    font-size: 36px;
    color: #f5f5f5;
    text-align:right;
  }
  .day {
    margin-top: 3px;
    color: #f7f7f7;
    font-size: 21px;
    text-align:right;
  }
  .todo-left {
    color: #0050ff;
    font-size: 18px;
    margin-top: 4px;
    font-weight: bold;
    text-align:right;
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  const notYet = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className='todo-left'>{notYet.length}가지 남았어요.</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
