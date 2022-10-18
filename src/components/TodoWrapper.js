import React from 'react';
import styled from 'styled-components';

const TodoWrapperStyle = styled.div`
  width: 390px;
  height: 844px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #18181a;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  color: white;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  div::-webkit-scrollbar {
    width: 6px;
  }

  div::-webkit-scrollbar-thumb {
    background: #0050ff;
    border-radius: 8px;
  }

  div::-webkit-scrollbar-track {
    background: #18181a; /*스크롤바 뒷 배경 색상*/
  }
`;

const TodoWrapper = ({ children }) => {
  return <TodoWrapperStyle>{children}</TodoWrapperStyle>;
};

export default TodoWrapper;
