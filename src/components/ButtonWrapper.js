import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  ${({ children }) =>
    children.length > 1
      ? `
    display: flex;
    justify-content: space-between;
  `
      : 'text-align: right;'}
  margin: 46px 0 130px;
  padding-top: 20px;
  text-align: right;
  border-top: 1px solid #f1f3f7;
`;

export default ({ children }) => {
  return <DIV>{children}</DIV>;
};
