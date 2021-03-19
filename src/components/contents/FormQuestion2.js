import React, { useEffect, useState } from 'react';
import H2 from 'Components/ui/H2';
import Tabs from 'Components/ui/Tabs';
import Stepper from 'Components/ui/Stepper';
import Button from 'Components/ui/Button';
import QuestionItem from '../QuestionItem';
import ButtonWrapper from '../ButtonWrapper';

import loadable from '@loadable/component';

const FormQuestion1 = loadable(() => import('./FormQuestion1'));
const Result = loadable(() => import('./Result'));

const a = ['그렇다', '부분적으로 그렇다', '그렇지 않다', '해당사항 없음'];
const i = 'radio';
const questions1 = [
  {
    t: '내부관리계획 수립',
    q:
      '개인정보처리자는 가명정보 및 추가정보를 안전하게 관리하기 위한 내부 관리계획을 수립 · 시행하는가?',
    a,
    i,
  },
  {
    t: '내부관리계획 주기적 검토, 개정',
    q:
      '내부관리계획을 주기적으로 검토하여 변경사항이 있는 경우, 이를 내부관리계획에 변경 반영하고 있는가?',
    a,
    i,
  },
  {
    t: '내부관리계획 이행실태 점검',
    q: '연1회이상 개인정보 내부관리계획에 따른 이행실태를 점검하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보취급자 직무관리',
    q: '가명정보취급자의 세부 직무와 담당자 목록을 현행화하여 관리하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보취급자 교육',
    q:
      '개인정보 내부관리계획에 따라 연1회 이상 가명 정보 취급자를 대상으로 교육계획을 수립하고 이행하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보처리 수탁사 관리',
    q:
      '가명정보 처리업무를 외부에 위탁하는 경우, 연 1회 이상 수탁사 관리현황을 점검하고 있는가?',
    a,
    i,
  },
  {
    t: '개인정보처리방침 수정 및 게시',
    q:
      '가명정보 처리 방침에 대한 사항이 변경되었을 경우, 개인정보처리방침에 해당 변경을 반영하여 게시하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보 제 3자 제공',
    q:
      '통계작성, 과학적 연구, 공익적 기록보존 목적으로 가명정보를 제3자에게 제공 시 보호대책을 마련하고 계약서에 주요 사항을 포함하여 시행하고 있는가?',
    a,
    i,
  },
];
const questions2 = [
  {
    t: '가명정보와 추가정보 분리보관',
    q: '가명정보와 추가정보를 분리하여 저장·관리하고 있는가?',
    a,
    i,
  },
  {
    t: '추가정보 파기 시 기록관리',
    q: '추가정보가 불필요한 경우에는 추가정보를 파기하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보 분리보관',
    q:
      '가명처리 전 개인정보, 가명처리된 가명정보, 결합된 가명정보, 외부결합을 통해 반입된 가명정보(외부결합결과물) 등은 각각 분리되어 저장·관리하고 있는가?',
    a,
    i,
  },
  {
    t: '추가정보 파기 시 기록관리',
    q: '추가정보가 불필요한 경우에는 추가정보를 파기하고 있는가?',
    a,
    i,
  },
  {
    t: '접근권한 분리',
    q: '가명정보 처리업무 담당자별 권한을 분리하고 관리하고 있는가?',
    a,
    i,
  },
  {
    t: '접근권한 회수',
    q:
      '전보 또는 퇴직 등 인사이동 발생 시 가명정보/추가정보취급자의 권한을 변경 또는 말소처리하고 있는가?',
    a,
    i,
  },
  {
    t: '접근권한 이력관리',
    q:
      '가명정보 및 추가정보 처리시스템의 권한 변경 이력이 정상적으로 기록 및 보관되고 있는지 확인하고 있는가?',
    a,
    i,
  },
  {
    t: '1인 1계정',
    q:
      '가명정보 및 추가정보 처리시스템 접속 계정은 취급자별 1인 1계정으로 다른 취급자와 계정을 공유하지 않도록 관리하고 있는가?',
    a,
    i,
  },
  {
    t: '비밀번호 관리',
    q:
      '가명정보 및 추가정보 처리시스템 접속을 위한 비밀번호 작성규칙을 만들어 적용하고 있는가?',
    a,
    i,
  },
  {
    t: '인증 실패 횟수 관리',
    q:
      '계정 정보 또는 비밀번호를 일정 횟수 이상 잘못 입력한 경우 가명정보 및 추가정보 처리시스템에 대한 접근을 제한하고 있는가?',
    a,
    i,
  },
  {
    t: '접근통제 관리',
    q:
      '관리자 IP 대역, 로그인 유효시간 등의 설정으로 비인가자의 가명정보 및 추가정보 처리시스템 접속 시도를 통제하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보 처리기록 관리',
    q: '가명정보 처리기록을 작성 및 보관하여 관리하고 있는가?',
    a,
    i,
  },
  {
    t: '접속기록 저장 및 점검',
    q:
      '가명정보 및 추가정보 처리시스템의 접속기록이 정상적으로 기록 및 보관되고 있으며, 담당자에 의한 주기적 점검이 수행하고 있는가?',
    a,
    i,
  },
  {
    t: '가명정보의 재식별 위험 점검',
    q:
      '가명처리된 정보를 대상으로 재식별 위험을 주기적으로 점검하고 특정 개인을 재식별할 수 있게 된 정보는 즉시 삭제 처리하고 있는가?',
    a,
    i,
  },
  {
    t: '가명·익명정보 파기 및 이력관리',
    q:
      '파기 기준에 따라 가명정보(내/외부 결합물 포함)를 파기하고, 파기이력을 기록하여 보관하고 있는가?',
    a,
    i,
  },
];
const questions3 = [
  {
    t: '출입통제 적용',
    q:
      '가명정보가 보관·저장된 시설에 대한 비인가자 접근을 차단하기 위해 출입통제 시스템이 적용되어 있는가?',
    a,
    i,
  },
  {
    t: '보조저장매체 관리',
    q:
      '가명정보 또는 추가정보가 보조저장매체에 저장되어있는 경우 이를 잠금장치가 있는 안전한 장소에 보관하고 있는가?',
    a,
    i,
  },
];

export default ({ setContent }) => {
  const [step, setStep] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (results.length === 3) {
      setContent(() => <Result results={results} />);
    }
  }, [results]);

  return (
    <>
      <H2>컴플라이언스 진단</H2>
      <Tabs>
        <ul>
          <li>
            <span>1. 가명정보 환경 조사</span>
          </li>
          <li className="on">
            <span>2. 점검 체크리스트</span>
          </li>
          <li>
            <span>3. 결과</span>
          </li>
        </ul>
      </Tabs>
      <Stepper>
        <ul>
          <li
            className={
              results.length === 0
                ? 'current'
                : results.length > 0
                ? 'completed'
                : ''
            }
          >
            <span>관리적보호조치</span>
          </li>
          <li
            className={
              results.length === 1
                ? 'current'
                : results.length > 1
                ? 'completed'
                : ''
            }
          >
            <span>기술적보호조치</span>
          </li>
          <li
            className={
              results.length === 2
                ? 'current'
                : results.length > 2
                ? 'completed'
                : ''
            }
          >
            <span>물리적보호조치</span>
          </li>
        </ul>
      </Stepper>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const result = Array.prototype.reduce.call(
            e.currentTarget.getElementsByTagName('input'),
            (obj, item) => {
              const answer = item.id.split('-')[1];
              if (item.checked && answer !== '3') {
                obj.count++;
                obj.score =
                  obj.score + (answer === '0' ? 1 : answer === '1' ? 0.5 : 0);
              }
              return obj;
            },
            { count: 0, score: 0 }
          );

          setResults(results.concat(result));
          window.scroll(0, 0);
        }}
      >
        <div>
          {results.length === 0 &&
            questions1.map((item, i) => {
              return <QuestionItem key={i} index={i + 1} item={item} />;
            })}
          {results.length === 1 &&
            questions2.map((item, i) => {
              return <QuestionItem key={i} index={i + 1} item={item} />;
            })}
          {results.length === 2 &&
            questions3.map((item, i) => {
              return <QuestionItem key={i} index={i + 1} item={item} />;
            })}
        </div>
        <ButtonWrapper>
          <div>
            <Button
              secondary
              onClick={(e) => {
                e.preventDefault();
                if (step === 1) {
                  setContent(() => <FormQuestion1 />);
                } else {
                  setStep(step - 1);
                  window.scroll(0, 0);
                }
              }}
            >
              이전
            </Button>
            <Button primary>다음</Button>
          </div>
        </ButtonWrapper>
      </form>
    </>
  );
};
