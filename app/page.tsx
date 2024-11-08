'use client';

import { Btn, Container, Heading, Text } from 'hyun-design-system';

import AppAos from '@components/AppAos';

const Home = () => {
  return (
    <section className="section-hero section">
      <Container>
        <div className="content-wrap">
          <Heading>
            매출을 높이는
            <br /> 차세대 마케팅 <br className="mobile-line" /> 자동화 솔루션
          </Heading>
          <Text size="xl" color="primary">
            고객 여정에 따라 단계적으로 목표 전환을 유도하는 신개념 CRM <br />
            대·중견기업이 가장 많이 찾는 프리미엄 엔터프라이즈 솔루션
          </Text>
          <Btn text="도입 문의 & 데모 시연" variant="solid-red" />
          <div className="box box--outline">
            고객 여정에 따라 단계적으로 목표 전환을 유도하는 신개념 CRM 대·중견기업이 가장 많이 찾는 프리미엄
            엔터프라이즈 솔루션 고객 여정에 따라 단계적으로 목표 전환을 유도하는 신개념 CRM 대·중견기업이 가장 많이 찾는
            프리미엄 엔터프라이즈 솔루션 고객 여정에 따라 단계적으로 목표 전환을 유도하는 신개념 CRM 대·중견기업이 가장
            많이 찾는 프리미엄 엔터프라이즈 솔루션 고객 여정에 따라 단계적으로 목표 전환을 유도하는 신개념 CRM
            대·중견기업이 가장 많이 찾는 프리미엄 엔터프라이즈 솔루션 고객 여정에 따라 단계적으로 목표 전환을 유도하는
            신개념 CRM 대·중견기업이 가장 많이 찾는 프리미엄 엔터프라이즈 솔루션 고객 여정에 따라 단계적으로 목표 전환을
            유도하는 신개념 CRM 대·중견기업이 가장 많이 찾는 프리미엄 엔터프라이즈 솔루션
          </div>
          <AppAos />
        </div>
      </Container>
    </section>
  );
};

export default Home;
