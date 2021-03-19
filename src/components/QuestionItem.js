import React from 'react';
import styled from 'styled-components';
import Radio from 'Components/ui/Radio';
import Checkbox from 'Components/ui/Checkbox';

const DIV = styled.div`
  margin-top: 50px;
  dl {
    display: flex;
    flex-wrap: wrap;
    /* gap: 0 25px; */
    dt {
      /* margin-bottom: 5px; */
      flex-basis: 100%;
      line-height: 28.8px;
      span {
        &:first-child {
          display: block;
          margin-bottom: 8px;
          font-size: 16px !important;
          color: #868d98;
        }
        &:last-child {
          font-size: 18px;
          color: #252d38;
        }
        font-weight: 500;
        letter-spacing: -0.4px;
      }
    }
    dd {
      margin: 25px 25px 0 0;
      textarea {
        display: block;
        padding: 16px;
        width: 740px;
        height: 90px;
        resize: none;
        box-sizing: border-box;
        border: 1px solid #d1d6db;
        border-radius: 10px;
      }
    }
  }
`;

export default ({ index, item }) => {
  return (
    <DIV>
      <dl>
        <dt>
          {item.t && <span>{item.t}</span>}
          <span>{item.q}</span>
        </dt>
        {item.a.map((answer, i) => {
          return (
            <dd key={i}>
              {item.i === 'radio' && (
                <Radio id={`q${index}-${i}`} name={`q${index}`}>
                  {answer}
                </Radio>
              )}
              {item.i === 'check' && <Checkbox id={`q${index}-${i}`}>{answer}</Checkbox>}
              {item.i === 'text' && <textarea id={`q${index}-${i}`} placeholder={answer}></textarea>}
            </dd>
          );
        })}
      </dl>
    </DIV>
  );
};
