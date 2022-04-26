import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  span {
    margin-right: 10px;
  }

  .ant-row {
    margin: 5px 0;
  }
`;
