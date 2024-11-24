import React from 'react';

import { Container, Stack, Heading, Text } from 'hyun-design-system';

import AppBox from '@components/AppBox';



// import StepTitle from '@components/StepTitle';

export default function Performance() {
  const PREFIX = 'performance';
  return (
    <section id={PREFIX} className={`section section-${PREFIX}`}>
      <Container className={`section-${PREFIX}__wrap`}>
        <Stack>
          <AppBox>
            <Heading size={4} level="h4" color="primary">
              5천만 원+
            </Heading>
            <Text color="primary">누적 지원금</Text>
          </AppBox>
          <AppBox>
            <Heading size={4} level="h4" color="primary">
              90%
            </Heading>
            <Text color="primary">고객 만족도</Text>
          </AppBox>
          <AppBox>
            <Heading size={4} level="h4" color="primary">
              10년+
            </Heading>
            <Text color="primary">축적된 시공 경험</Text>
          </AppBox>
        </Stack>
      </Container>
    </section>
  );
}
