import React from 'react';
import styled from 'styled-components';

const RADIO = styled.div`
  position: relative;
  display: inline-block;
  input {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 1px;
    height: 1px;
    opacity: 0;
    + label {
      position: relative;
      padding-left: 28px;
      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        border: 1px solid #cdced1;
        border-radius: 20px;
      }
      span {
        vertical-align: top;
        color: #232b38;
      }
    }
    &:checked {
      + label {
        ::before {
          border: 6px solid #3182f6;
        }
      }
    }
  }
  &:hover {
    label {
      ::before {
        border-color: #3182f6;
        background-color: #e5f1fe;
      }
    }
  }
`;

export default ({ id, name, children }) => {
  return (
    <RADIO>
      <input id={id} type="radio" name={name} />
      <label htmlFor={id}>
        <span>{children}</span>
      </label>
    </RADIO>
  );
};
