import React from 'react';
import styled from 'styled-components';

const TABLE = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export default ({ children }) => {
  return <TABLE>{children}</TABLE>;
};
