import React from 'react';

import { Container, Heading, Text, Stack } from 'hyun-design-system';

import AppBox from '@components/AppBox';
import StepTitle from '@components/StepTitle';

export default function PerformanceSection() {
  const PREFIX = 'section-performance';
  return (
    <section className={`section ${PREFIX}`}>
      <Container className="performance-text">
        <StepTitle>
          <Heading level="h2" size={2} className="mb-8">
            신뢰로 다져진
            <br className="next-line" />
            믿을 수 있는 업체
          </Heading>
        </StepTitle>
        <Stack gap={8} className="box-wrap">
          <AppBox outline>
            <Heading level="h4" size={4}>
              50,000,000원+
            </Heading>
            <Text size="lg" color="primary" weight="medium">
              누적 지원금
            </Text>
          </AppBox>
          <AppBox outline>
            <Heading level="h4" size={4}>
              98%
            </Heading>
            <Text size="lg" color="primary" weight="medium">
              고객 만족도
            </Text>
          </AppBox>
          <AppBox outline>
            <Heading level="h4" size={4}>
              10년+
            </Heading>
            <Text size="lg" color="primary" weight="medium">
              축적된 시공 경험
            </Text>
          </AppBox>
        </Stack>
      </Container>

      <div className="bg-wall"></div>
    </section>
  );
}
