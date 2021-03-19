import React from 'react';
import styled from 'styled-components';
import check from 'svg/check';

const STEPPER = styled.div`
  padding: 25px 0 10px;
  > * {
    display: flex;
    > * {
      position: relative;
      padding-top: 30px;
      width: ${({ childs }) => 100 / childs.length}%;
      text-align: center;
      &::before {
        content: '';
        position: absolute;
        top: 7px;
        right: 50%;
        width: 150%;
        height: 2px;
        background-color: #ebeff2;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 8px);
        width: 16px;
        height: 16px;
        box-sizing: border-box;
        background-color: #ebeff2;
        border-radius: 16px;
        z-index: 1;
      }
      &:first-child {
        text-align: left;
        &::before {
          content: none;
        }
        &::after {
          left: 0;
        }
      }
      &:last-child {
        text-align: right;
        &::before {
          right: 0;
        }
        &::after {
          left: calc(100% - 16px);
        }
      }
      span {
        font-weight: 700;
        color: #cacfd4;
      }
      &.current,
      &.completed {
        &::before {
          background-color: #3182f6;
        }
        span {
          color: #3182f6;
        }
      }
      &.current {
        &::after {
          background-color: #fff;
          border: 5px solid #3182f6;
        }
      }
      &.completed {
        &::after {
          background: url(${check}) no-repeat center #3182f6;
          background-size: 9px;
        }
      }
    }
  }
`;

export default ({ children }) => {
  return <STEPPER childs={children.props.children}>{children}</STEPPER>;
};
