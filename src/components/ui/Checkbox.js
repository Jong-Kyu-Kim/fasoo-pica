import React from 'react';
import styled from 'styled-components';
import check from 'svg/check';

const CHECKBOX = styled.div`
  display: inline-block;
  input {
    width: 0;
    height: 0;
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
        border: 1px solid #cdced1;
        border-radius: 6px;
      }
      span {
        vertical-align: top;
        /* font-size: 13px; */
        color: #232b38;
      }
    }
    &:checked {
      + label {
        ::before {
          border-color: #3182f6;
          background: url(${check}) #3182f6 no-repeat center;
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

export default ({ id, children }) => {
  return (
    <CHECKBOX>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>
        <span>{children}</span>
      </label>
    </CHECKBOX>
  );
};
