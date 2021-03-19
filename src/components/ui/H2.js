import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  margin: 113px 0 43px;
  span {
    font-size: 32px;
    font-weight: 700;
  }
`;

export default ({ children }) => {
  return (
    <H2>
      <span>{children}</span>
    </H2>
  );
};
