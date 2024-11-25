'use client';

import { Accordion, Container, Text } from 'hyun-design-system';

import StepTitle from '@components/StepTitle';
import Hero from '@sections/Hero';
import Performance from '@sections/Performance';

const Home = () => {
  return (
    <>
      <Hero />
      <Performance />
      <section className="section">
        <Container>
          <div className="content-wrap">
            <StepTitle title="퍼포먼스 섹션">
              <Text>
                경력, 지원금 내역, 고객 만족도 등
                <br />
                박스 형태로 나열 할 예정
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle title="진척도 공유 및 작업 현황 공유">
              <Text color="primary">
                작업 도착 및 작업 시작 알림
                <br />
                작업 중간 예상 소요시간 공유
                <br />
                퇴실 절차 끝 작업 완료 공유
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle title="고객 만족이 우선입니다.">
              <Text color="primary">
                가격 후불제
                <br />
                공사 범위 내 추가 금액 절대 없음
                <br />
                카드 결제 가능
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle title="고객의 편리가 우선입니다.">
              <Text color="primary">
                고객 체크 리스트 작성 하게끔
                <br />
                안내 해주는 섹션
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle title="희망 리턴 패키지">
              <Text color="primary">
                신청 절차 안내
                <br />
                지원 사업 안내 및 정보 공유 섹션
              </Text>
            </StepTitle>
          </div>
        </Container>
        <Container>
          <div className="content-wrap">
            <StepTitle
              title={
                <>
                  자주 묻는 <span>질문</span>
                </>
              }
            ></StepTitle>
          </div>
          <Accordion>
            <Accordion.Item title="궁금해서 묻는 질문 1?">해당 내용에 대한 답변 1</Accordion.Item>
            <Accordion.Item title="궁금해서 묻는 질문 2">해당 내용에 대한 답변 2</Accordion.Item>
            <Accordion.Item title="궁금해서 묻는 질문 3">해당 내용에 대한 답변 3</Accordion.Item>
            <Accordion.Item title="궁금해서 묻는 질문 4">해당 내용에 대한 답변 4</Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Home;
