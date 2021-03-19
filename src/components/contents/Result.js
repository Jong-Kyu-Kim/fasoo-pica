import React from 'react';
import styled, { keyframes } from 'styled-components';
import CountUp from 'react-countup';
import H2 from 'Components/ui/H2';
import Tabs from 'Components/ui/Tabs';
import Table from 'Components/ui/Table';
import Button from 'Components/ui/Button';
import ButtonWrapper from '../ButtonWrapper';
import triangle from 'svg/triangle';

import loadable from '@loadable/component';

const FormQuestion1 = loadable(() => import('./FormQuestion1'));

const H3 = styled.h3`
  margin: 54px 0 28px;
  span {
    &:first-child {
      display: block;
      margin-bottom: 14px;
    }
    &:last-child {
      font-weight: 700;
    }
    font-size: 20px;
    letter-spacing: -0.4px;
    + span {
      font-size: 28px;
      font-weight: 700;
    }
  }
`;

const TH = styled.th`
  padding-left: 30px;
  text-align: left;
  &[scope='col'] {
    height: 46px;
    background-color: #f6f8fa;
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
  &[scope='row'] {
    padding-left: 30px;
    height: 54px;
    border-bottom: 1px solid #f1f3f7;
    span {
      font-size: 16px;
    }
  }
`;

const TD = styled.td`
  padding-left: 30px;
  height: 54px;
  border-bottom: 1px solid #f1f3f7;
  span {
    font-size: 16px;
  }
`;

const SPAN = styled.span`
  font-size: 16px;
  &.danger {
    color: #ef5350;
  }
  &.warning {
    color: #faa131;
  }
  &.success {
    color: #05c072;
  }
`;

const CHART = styled.div`
  padding: 50px 0;
  box-sizing: border-box;
  height: 250px;
  background: #f6f8fa;
  border-radius: 14px;
  dl {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 420px;
    height: 150px;
    margin: 0 auto;
  }
  &.triangle {
    position: relative;
    background: url(${triangle}) no-repeat center #f6f8fa;
    span {
      position: absolute;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: -0.4px;
      &:first-child {
        top: 15%;
        left: 47%;
      }
      &:nth-child(2) {
        bottom: 16%;
        left: 31%;
      }
      &:nth-child(3) {
        bottom: 16%;
        right: 31%;
      }
    }
    svg {
      display: block;
      margin: 0 auto;
      width: 175px;
      height: 175px;
      polygon {
        fill: rgba(49, 130, 246, 0.4);
        stroke: #3182f6;
        stroke-width: 1;
      }
    }
  }
`;

const BAR = styled.div`
  position: relative;
  width: 60px;
  height: ${({ value }) => value}%;
  animation: ${({ value }) => barGrow(value)} 0.7s linear;
  text-align: center;
  border-radius: 8px 8px 0 0;
  background-color: #d3d5d9;
  dt {
    position: absolute;
    bottom: -24px;
    width: 100%;
  }
  dd {
    position: absolute;
    top: -24px;
    width: 100%;
  }
  span {
    font-weight: 700;
  }
  &:first-child {
    background-color: ${({ value }) =>
      value > 80 ? '#05C072' : value > 70 ? '#FAA131' : '#EF5350'};
    span {
      color: ${({ value }) =>
        value > 80 ? '#05C072' : value > 70 ? '#FAA131' : '#EF5350'};
    }
  }
`;

const barGrow = (value) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${value}%;
  }
`;

export default ({ setContent, results }) => {
  const sum = (results, key) => {
    return results.reduce((sum, result) => {
      return sum + result[key];
    }, 0);
  };

  const getScore = (count, score) => {
    return Math.round((score / count) * 100);
  };

  const totalScore = getScore(sum(results, 'count'), sum(results, 'score'));
  const score1 = getScore(results[0].count, results[0].score);
  const score2 = getScore(results[1].count, results[1].score);
  const score3 = getScore(results[2].count, results[2].score);

  const getClassName = (score) => {
    return score > 80 ? 'success' : score > 70 ? 'warning' : 'danger';
  };

  const getText = (score) => {
    return score > 90
      ? '매우 우수'
      : score > 80
      ? '우수'
      : score > 70
      ? '양호'
      : score > 60
      ? '미흡'
      : '매우 미흡';
  };

  return (
    <>
      <H2>컴플라이언스 진단</H2>
      <Tabs>
        <ul>
          <li>
            <span>1. 가명정보 환경 조사</span>
          </li>
          <li>
            <span>2. 점검 체크리스트</span>
          </li>
          <li className="on">
            <span>3. 결과</span>
          </li>
        </ul>
      </Tabs>
      <div>
        <H3>
          <span>귀사의 가명정보 컴플라이언스 진단결과는</span>
          <SPAN className={getClassName(totalScore)}>{totalScore}점 · </SPAN>
          <SPAN className={getClassName(totalScore)}>
            {getText(totalScore)}
          </SPAN>
          <span> 입니다.</span>
        </H3>
      </div>
      <div>
        <H3>
          <span>전체 진단 결과</span>
        </H3>
        <CHART>
          <dl>
            <BAR value={totalScore}>
              <dt>
                <span>전체</span>
              </dt>
              <dd>
                <CountUp duration={1} start={0} end={totalScore} />
                <span>점</span>
              </dd>
            </BAR>

            <BAR value={score1}>
              <dt>
                <span>관리적</span>
              </dt>
              <dd>
                <CountUp duration={1} start={0} end={score1} />
                <span>점</span>
              </dd>
            </BAR>

            <BAR value={score2}>
              <dt>
                <span>기술적</span>
              </dt>
              <dd>
                <CountUp duration={1} start={0} end={score2} />
                <span>점</span>
              </dd>
            </BAR>

            <BAR value={score3}>
              <dt>
                <span>물리적</span>
              </dt>
              <dd>
                <CountUp duration={1} start={0} end={score3} />
                <span>점</span>
              </dd>
            </BAR>
          </dl>
        </CHART>
      </div>
      <div>
        <H3>
          <span>보호조치 대상별 점수</span>
        </H3>
        <Table>
          <thead>
            <tr>
              <TH scope="col">
                <span>보호조치 대상 구분</span>
              </TH>
              <TH scope="col">
                <span>진단 항목 수</span>
              </TH>
              <TH scope="col">
                <span>진단 점수</span>
              </TH>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TH scope="row">
                <span>전체</span>
              </TH>
              <TH scope="row">
                <span>{sum(results, 'count')}</span>
              </TH>
              <TD>
                <SPAN className={getClassName(totalScore)}>{totalScore}</SPAN>
              </TD>
            </tr>
            <tr>
              <TH scope="row">
                <span>관리적 보호 조치</span>
              </TH>
              <TH scope="row">
                <span>{results[0].count}</span>
              </TH>
              <TD>
                <SPAN className={getClassName(score1)}>{score1}</SPAN>
              </TD>
            </tr>
            <tr>
              <TH scope="row">
                <span>기술적 보호 조치</span>
              </TH>
              <TH scope="row">
                <span>{results[1].count}</span>
              </TH>
              <TD>
                <SPAN className={getClassName(score2)}>{score2}</SPAN>
              </TD>
            </tr>
            <tr>
              <TH scope="row">
                <span>물리적 보호 조치</span>
              </TH>
              <TH scope="row">
                <span>{results[2].count}</span>
              </TH>
              <TD>
                <SPAN className={getClassName(score3)}>{score3}</SPAN>
              </TD>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <H3>
          <span>보호조치 대상별 진단 수준</span>
        </H3>
        <CHART className="triangle">
          <span>관리적</span>
          <span>기술적</span>
          <span>물리적</span>
          <svg>
            <polygon
              points={`${175 / 2} ${110 - 0.94 * score1},
                 ${87 + 0.82 * score3} ${110 + 0.47 * score3} ,
                 ${87 - 0.81 * score2} ${110 + 0.47 * score2}`}
            />
          </svg>
        </CHART>
      </div>
      <div>
        <H3>
          <span>보호조치 대상별 수준</span>
        </H3>
        <Table>
          <thead>
            <tr>
              <TH scope="col">
                <span>보호조치 대상 구분</span>
              </TH>
              <TH scope="col">
                <span>진단 수준</span>
              </TH>
              <TH scope="col">
                <span></span>
              </TH>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TH scope="row">
                <span>전체</span>
              </TH>
              <TD>
                <SPAN className={getClassName(totalScore)}>{totalScore}</SPAN>
              </TD>
              <TD>
                <SPAN className={getClassName(totalScore)}>
                  {getText(totalScore)}
                </SPAN>
              </TD>
            </tr>
            <tr>
              <TH scope="row">
                <span>관리적 보호 조치</span>
              </TH>
              <TD>
                <SPAN className={getClassName(score1)}>{score1}</SPAN>
              </TD>
              <TD>
                <SPAN className={getClassName(score1)}>{getText(score1)}</SPAN>
              </TD>
            </tr>
            <tr>
              <TH scope="row">
                <span>기술적 보호 조치</span>
              </TH>
              <TD>
                <SPAN className={getClassName(score2)}>{score2}</SPAN>
              </TD>
              <TD>
                <SPAN className={getClassName(score2)}>{getText(score2)}</SPAN>
              </TD>
            </tr>
            <tr>
              <TH scope="row">
                <span>물리적 보호 조치</span>
              </TH>
              <TD>
                <SPAN className={getClassName(score3)}>{score3}</SPAN>
              </TD>
              <TD>
                <SPAN className={getClassName(score3)}>{getText(score3)}</SPAN>
              </TD>
            </tr>
          </tbody>
        </Table>
      </div>
      <ButtonWrapper>
        <Button
          secondary
          onClick={(e) => {
            e.preventDefault();
            setContent(() => <FormQuestion1 />);
          }}
        >
          다시하기
        </Button>
        {/* <Button
          secondary
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          문의하기
        </Button> */}
      </ButtonWrapper>
    </>
  );
};
