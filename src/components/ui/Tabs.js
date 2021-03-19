import React from 'react';
import styled from 'styled-components';

const TABS = styled.div`
  > * {
    display: flex;
    > * {
      width: ${({ childs }) => 100 / childs.length}%;
      height: 53px;
      line-height: 53px;
      box-sizing: border-box;
      text-align: center;
      border-bottom: 2px solid #b5bbc2;
      span {
        font-size: 16px;
        font-weight: 700;
        color: #b5bbc2;
      }
      &.on {
        border-color: #3182f6;
        span {
          color: #3182f6;
        }
      }
    }
  }
`;

export default ({ children }) => {
  return <TABS childs={children.props.children}>{children}</TABS>;
};
