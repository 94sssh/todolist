import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoWrapper from './components/TodoWrapper';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f5f5
  }
  
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoWrapper>
        <TodoHead />
        <TodoList />
        <TodoInput />
      </TodoWrapper>
    </TodoProvider>
  );
}

export default App;
