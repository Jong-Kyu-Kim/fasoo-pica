import React from 'react';
import H2 from 'Components/ui/H2';
import Tabs from 'Components/ui/Tabs';
import Button from 'Components/ui/Button';
import QuestionItem from '../QuestionItem';
import ButtonWrapper from '../ButtonWrapper';

import loadable from '@loadable/component';

const FormInfo = loadable(() => import('./FormInfo'));
const FormQuestion2 = loadable(() => import('./FormQuestion2'));

const questions = [
  {
    q: 'Q1. 귀사의 비즈니스 업종은 무엇입니까?',
    a: ['공공', '금융', '물류', '교육', '의료', '제조', '기타'],
    i: 'radio',
  },
  {
    q: 'Q2. 귀사의 전체 직원 수는 몇 명 입니까?',
    a: ['0 ~ 50명', '50~ 300명', '300 ~ 500명', '500 ~ 1000명', '1000명 이상'],
    i: 'radio',
  },
  {
    q: 'Q3. 업무상 가명정보가 필요한 업무가 있다면 관련된 업무를 기입해주세요.',
    a: [
      '예시) 마케팅 분석을 위한 모델 개발, 제 3자 데이터 결합을 통한 서비스 개발',
    ],
    i: 'text',
  },
  {
    q: 'Q4. 가명정보를 생성하기 위해 데이터를 처리하는 부서를 선택해주세요.',
    a: [
      '정보보호부서',
      '가명(익명) 정보 이용/활용 담당자',
      '시스템 담당자',
      '빅데이터업무 담당자',
      '기타',
    ],
    i: 'check',
  },
  {
    q: 'Q5. 가명정보에 접근하여 이용 및 활용하는 사용자들을 선택해주세요.',
    a: [
      '여러 부서의 특정 사용자',
      '특정 부서원 전체',
      '전사 임직원',
      '협력 업체',
      '제 3자 제공',
    ],
    i: 'check',
  },
  {
    q: 'Q6. 가명정보를 외부로 전달해야 하는 경우, 대상 범위를 선택해주세요.',
    a: ['상급 또는 관계사', '해외 지사', '협력업체', '기타', '제공하지 않음'],
    i: 'check',
  },
  {
    q:
      'Q7. 비정형 데이터를 가명처리해야 하는 경우 대상 데이터 유형을 선택해주세요.',
    a: [
      '콜센터 녹취 데이터',
      'DB내 텍스트 칼럼',
      '웹 게시판',
      '이미지 (계약 서류 등)',
      '기타',
    ],
    i: 'check',
  },
  {
    q:
      'Q8. 가명정보를 생성하기 위해 처리하는 개인정보의 속성(식별자, 민감정보 등) 칼럼들의 관리방안을 선택해주세요.',
    a: ['메타 관리 시스템', '엑셀 파일', '개별 개인정보처리 시스템', '기타'],
    i: 'check',
  },
  {
    q: 'Q9. 가명정보 데이터 이용 및 활용을 위해 필요한 컨설팅을 선택해주세요.',
    a: [
      '가명정보 관리체계 수립',
      '가명처리 위탁 서비스 컨설팅',
      '가명정보 데이터 진단 컨설팅',
      '기타',
    ],
    i: 'check',
  },
  {
    q: 'Q10. 가명처리에 사용하는 솔루션을 선택해주세요.',
    a: [
      '가명(익명)처리 시스템',
      '빅데이터 시스템',
      'DB 툴',
      '통계 툴',
      '엑셀',
      '기타',
    ],
    i: 'check',
  },
  {
    q: 'Q11. 가명정보를 저장하여 이용 및 활용하는 환경을 선택해 주세요.',
    a: ['가상화 PC', '개인 PC', '파일 서버', 'DB 서버', '기타'],
    i: 'check',
  },
  {
    q:
      'Q12. 가명정보 보호를 위한 시설·장비로서 보완해야 할 대상이 있다면 선택해주세요.',
    a: [
      '물리보안 (보호구역 지정, 출입통제)',
      '보안시스템(방화벽, 가상화 등) 운영',
      '인증 및 권한 관리',
      '백업 및 복구관리',
      '접근통제',
      '접속기록 관리',
      '암호화 적용',
      '업무용 단말기',
      '정보전송 보안',
      '보조저장매체 보안',
    ],
    i: 'check',
  },
];

export default ({ setContent }) => {
  return (
    <>
      <H2>컴플라이언스 진단</H2>
      <Tabs>
        <ul>
          <li className="on">
            <span>1. 가명정보 환경 조사</span>
          </li>
          <li>
            <span>2. 점검 체크리스트</span>
          </li>
          <li>
            <span>3. 결과</span>
          </li>
        </ul>
      </Tabs>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(e.currentTarget);
          setContent(() => <FormQuestion2 />);
        }}
      >
        <div>
          {questions.map((item, i) => {
            return <QuestionItem key={i} index={i + 1} item={item} />;
          })}
        </div>
        <ButtonWrapper>
          <div>
            <Button
              secondary
              onClick={(e) => {
                e.preventDefault();
                setContent(() => <FormInfo />);
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
