import React from 'react';
import styled from 'styled-components';

const BUTTON = styled.button`
  padding: 13px 20px;
  border: 0;
  border-radius: 6px;
  span {
    font-weight: 700;
  }
  &.primary {
    background-color: #3182f6;
    &:disabled {
      background-color: #adcdfb;
    }
    span {
      color: #fff;
    }
  }
  &.secondary {
    background-color: #ebeff2;
  }
  + button {
    margin-left: 10px;
  }
`;

export default ({ children, primary, secondary, disabled, onClick }) => {
  return (
    <BUTTON
      className={primary ? 'primary' : 'secondary'}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{children}</span>
    </BUTTON>
  );
};
