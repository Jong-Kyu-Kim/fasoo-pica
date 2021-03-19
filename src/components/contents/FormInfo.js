import React from 'react';
import styled from 'styled-components';
import H2 from 'Components/ui/H2';
import Button from 'Components/ui/Button';
import Table from 'Components/ui/Table';
import Checkbox from 'Components/ui/Checkbox';
import ButtonWrapper from '../ButtonWrapper';

import loadable from '@loadable/component';

const FormQuestion1 = loadable(() => import('./FormQuestion1'));

const TR = styled.tr`
  th {
    text-align: left;
    label {
      span {
        font-size: 16px;
      }
    }
  }
  td {
    > *:not(div) {
      display: block;
      margin: 17px 0;
      padding: 16px;
      width: 100%;
      box-sizing: border-box;
      border-radius: 10px;
    }
    input[type='text'] {
      height: 48px;
      border: 1px solid #d1d6db;
    }
    p {
      background-color: #f6f8fa;
      span {
        line-height: 19.6px;
        color: #4e5968;
      }
    }
  }
`;

const TableItem = ({ id, label }) => {
  return (
    <TR>
      <th>
        <label>
          <span>{label}</span>
        </label>
      </th>
      <td>
        <input type="text" id={id} name={id} required />
      </td>
    </TR>
  );
};

export default ({ setContent }) => {
  return (
    <>
      <H2>개인정보 입력</H2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
          if (!email.test(e.currentTarget[3].value)) {
            alert('올바르지 않은 이메일 주소입니다.');
            e.currentTarget[3].focus();
            return false;
          }
          if (!e.currentTarget[5].checked) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
          } else {
            // e.currentTarget.target = 'iframe';
            // e.currentTarget.action = './info.asp';
            // e.currentTarget.submit();
            setContent(() => <FormQuestion1 />);
          }
        }}
      >
        <Table>
          <colgroup>
            <col width="136" />
            <col />
          </colgroup>
          <tbody>
            {[
              { id: 'cname', label: '이름' },
              { id: 'cposition', label: '직급' },
              { id: 'ccompany', label: '회사명' },
              { id: 'cemail', label: '이메일' },
              { id: 'cphone', label: '연락처' },
            ].map(({ id, label }) => {
              return <TableItem key={id} id={id} label={label} />;
            })}
            <TR>
              <th>
                <span>목적</span>
              </th>
              <td>
                <p>
                  <span>
                    본 페이지는 귀 사의 가명정보 환경을 확인하기 위해, 개인정보를 비롯하여 정보를 사용하는 조직 및 대상시스템을 식별하고 가명정보를
                    위한 솔루션 현황을 조사합니다. 제공된 개인정보는 답변 회신 목적으로만 사용합니다.
                  </span>
                </p>
                <Checkbox id="agree">개인정보보호법에 따른 개인정보 수집 및 이용에 관한 동의합니다.</Checkbox>
              </td>
            </TR>
          </tbody>
        </Table>
        <ButtonWrapper>
          <div>
            {/* <Button secondary onClick={(e) => e.preventDefault()}>
              이전
            </Button> */}
            <Button primary>다음</Button>
          </div>
        </ButtonWrapper>
      </form>
    </>
  );
};
