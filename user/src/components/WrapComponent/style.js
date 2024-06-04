import styled from 'styled-components';


export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Khoảng cách giữa các phần tử */
  width: 400px; /* Chiều rộng tổng cộng */
`;

export const FlexItem = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;